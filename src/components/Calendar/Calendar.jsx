import { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { calendarMock } from "../../mocks/calendarMock";


import './Calendar.scss';

export const Calendar = ({leagueID}) => {    
        
    //  const {data = [], hasError, isLoading} = useFetch(`https:v3.football.api-sports.io/fixtures?season=2024&league=${leagueID}`);
    const data = calendarMock;

    console.log('calendarMock: ',data);

    const getRound = () => {
        let roundsArray = [];
        data.map((round) => {
            
            if (!roundsArray.includes(round.league.round)) {
                roundsArray = [...roundsArray, round.league.round];
            }
        });
        return roundsArray;
    }

    const gamesForRound = (data) => {
        let gamesForRound = [];

        getRound().map((round, index) => {
            gamesForRound.push({
                round: round,
                dates: [],
                firstDate: '',
                lastDate: '',
                roundNumber: parseInt(round.split("-")[1]),
                games: []
            })
            data.map((game) => {
                if (game.league.round === round) {
                    gamesForRound[index].games.push(game);
                    gamesForRound[index].dates.push(game.fixture.date)
                    
                }
            })

            gamesForRound[index].firstDate = gamesForRound[index].dates[0];
            gamesForRound[index].lastDate = gamesForRound[index].dates[gamesForRound[index].dates.length - 1];
        });

        
        console.log('dates: ' , gamesForRound.map(game=>game.dates))
            
        return gamesForRound;
    }

    const getDate = (date) => {
        let year = date.split('-')[0];
        let month = date.split('-')[1];
        let day = date.split('-')[2].split('T')[0];
        let hour = date.split('-')[2].split('T')[1].split('+')[0];

        // const finalDate = `${day}/${month}/${year}`;

        const finalDate = {
            day: day,
            month: month,
            year: year,
            hour: hour
        }

        return finalDate;
    }

    const getMonth = (month) => {
        switch (month) {
            case '01': 
                return 'Enero'
            case '02': 
                return 'Febrero'
            case '03': 
                return 'Marzo'
            case '04': 
                return 'Abril'
            case '05': 
                return 'Mayo'
            case '06': 
                return 'Junio'
            case '07': 
                return 'Julio'
            case '08': 
                return 'Agosto'
            case '09': 
                return 'Septiembre'
            case '10': 
                return 'Octubre'
            case '11': 
                return 'Noviembre'
            case '12': 
                return 'Diciembre'
            default: 
                return 'Enero'
        }
    }

    return (
        <>
            <h1>Calendario </h1>

            <div className="fd-calendar">
                {
                    gamesForRound(data).map((round) => (
                        <section className="fd-calendar__box fd-calendar__round" key={round.roundNumber} >
                            <header className="fd-calendar__header">Jornada {round.roundNumber} <span className="fd-calendar__date">{getDate(round.firstDate).day} - {getDate(round.lastDate).day} {getMonth(getDate(round.lastDate).month)} </span></header>
                            <ul className="fd-calendar__list">
                                {
                                    round.games.map((game) => (
                                        <li key={game.fixture.id} className="fd-calendar__row">
                                            <div className="fd-calendar__col fd-calendar__home-team">
                                                <span className="fd-calendar__team-name fd-calendar__home-team-name">{game.teams.home.name} </span>
                                                
                                            </div>
                                            <div className="fd-calendar__score-box">
                                                <span className="fd-calendar__score fd-calendar__score-home">{game.score.fulltime.home} - </span>
                                                <span className="fd-calendar__score fd-calendar__score-away">{game.score.fulltime.away}</span>
                                            </div>
                                            <div className="fd-calendar__col fd-calendar__away-team">
                                                <span className="fd-calendar__team-name fd-calendar__away-team-name">{game.teams.away.name} </span>
                                                
                                            </div>
                                        </li>           
                                    ))
                                }
                            </ul>   
                        </section>
                    ))
                }
            </div>
        </>
    );
};
