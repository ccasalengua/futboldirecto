import { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { calendarMock } from "../../mocks/calendarMock";

import './Calendar.scss';

export const Calendar = ({leagueID}) => {    
        
    //  const {data = [], hasError, isLoading} = useFetch(`https:v3.football.api-sports.io/fixtures?season=2024&league=${leagueID}`);
    const data = calendarMock;

    console.log('calendarMock: ',data);

    const getNumberRounds = () => {
        let roundsArray = [];
        data.map((round) => {
            
            if (!roundsArray.includes(round.league.round.split("-")[1])) {
                roundsArray = [...roundsArray, round.league.round.split("-")[1]]
            }
        });
        console.log('roundsArray: ', roundsArray);
        return roundsArray
    }

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

        
        console.log('new Date: ', new Date());
        console.log(gamesForRound.map(game=> game.lastDate))
            
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
            case '01': {
                return 'Enero';
            }
            case '02': {
                return 'Febrero'
            }
            case '03': {
                return 'Marzo'
            }
            case '04': {
                return 'Abril'
            }
            case '05': {
                return 'Mayo'
            }
            case '06': {
                return 'Mayo'
            }
            case '07': {
                return 'Mayo'
            }
            case '08': {
                return 'Agosto'
            }
            case '09': {
                return 'Mayo'
            }
            case '10': {
                return 'Mayo'
            }
            case '11': {
                return 'Mayo'
            }
            case '12': {
                return 'Mayo'
            }
            
            default: 
                return 'Enero'
            
        }
    }

    return (
        <>
            <h1>Calendario </h1>

            <div className="fd-calendar">
                <section className="fd-calendar__box fd-calendar__round">
                    {
                        gamesForRound(data).map((round) => (
                            <div key={round.roundNumber} >
                                <header className="fd-calendar__header">Jornada {round.roundNumber} - <span>{getDate(round.firstDate).day} - {getDate(round.lastDate).day} {getMonth(getDate(round.lastDate).month)} </span></header>
                                <ul >
                                    {
                                        round.games.map((game) => (
                                            <li key={game.fixture.id} className="fd-calendar__row">
                                                <div className="fd-calendar__col fd-calendar__player-info">
                                                    <span className="fd-calendar__col fd-calendar__player-rank">{game.teams.home.name} </span>
                                                    
                                                </div>
                                                <div>
                                                    <span className="fd-calendar__col fd-calendar__player-rank">{game.score.fulltime.home} - </span>
                                                    <span className="fd-calendar__col fd-calendar__player-rank">{game.score.fulltime.away}</span>
                                                </div>
                                                <div className="fd-calendar__col fd-calendar__player-info">
                                                    <span className="fd-calendar__col fd-calendar__player-rank">{game.teams.away.name} </span>
                                                    
                                                </div>
                                            </li>           
                                        ))
                                    }
                                </ul>   
                            </div>
                        ))
                    }
                    
                </section>
            
            </div>
        </>
    );
};
