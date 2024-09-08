import { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { calendarMock } from "../../mocks/calendarMock";
import { format, parse } from "@formkit/tempo";


import './Calendar.scss';

export const Calendar = ({leagueID}) => {    
        
    //  const {data = [], hasError, isLoading} = useFetch(`https:v3.football.api-sports.io/fixtures?season=2024&league=${leagueID}`);
    const data = calendarMock;

    console.log('calendarMock: ', data);

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
                datesShort: [],
                finalDate: '',
                roundNumber: parseInt(round.split("-")[1]),
                games: []
            });
            data.map((game) => {
                if (game.league.round === round) {
                    gamesForRound[index].games.push(game);
                    gamesForRound[index].dates.push(new Date(game.fixture.date));
                    gamesForRound[index].datesShort.push(format(game.fixture.date, 'short'));
                }
            });

            let firstDate = new Date(Math.min(...gamesForRound[index].dates)).getDate();
            let lastDate = new Date(Math.max(...gamesForRound[index].dates)).getDate();
            let firstMonth = new Date(Math.min(...gamesForRound[index].dates)).toLocaleString('default', { month: 'long' });
            let lastMonth = new Date(Math.max(...gamesForRound[index].dates)).toLocaleString('default', { month: 'long' });


            gamesForRound[index].finalDate = `${firstDate} ${firstMonth === lastMonth ? '' : firstMonth} - ${lastDate} ${lastMonth} `;
  
            gamesForRound[index].datesShort = gamesForRound[index].datesShort.sort((a, b) => new Date(a.dates).getTime() > new Date(b.dates).getTime());
            gamesForRound[index].games = gamesForRound[index].games.sort((a, b) => new Date(a.dates).getTime() > new Date(b.dates).getTime());
            console.log(gamesForRound)
        });
        
        console.log(gamesForRound)
        return gamesForRound;
    }

    return (
        <>
            <h1>Calendario </h1>

            <div className="fd-calendar">
                {
                    gamesForRound(data).map((round) => (
                        <section className="fd-calendar__box fd-calendar__round" key={round.roundNumber} >
                            <header className="fd-calendar__header">Jornada {round.roundNumber} 
                                <span className="fd-calendar__date">{round.finalDate}</span>
                            </header>
                            <ul className="fd-calendar__list">
                                {
                                    round.games.map((game) => (
                                        <li key={game.fixture.id} className="fd-calendar__row">
                                            <div className="fd-calendar__col fd-calendar__home-team">
                                                <span className="fd-calendar__team-name fd-calendar__home-team-name">{game.teams.home.name} </span>
                                                <img src={game.teams.home.logo} alt={game.teams.home.name} className="fd-calendar__team-logo fd-calendar__home-team-logo"/>
                                            </div>
                                            <div className={`fd-calendar__score-box ${game.fixture.status.short === 'NS' || game.fixture.status.short === 'TBD' ? 'fd-calendar__score-box--ns' : ''}`}>
                                                {game.fixture.status.short === 'FT' && 
                                                    <>
                                                        <span className="fd-calendar__score fd-calendar__score-home">{game.score.fulltime.home} - </span>
                                                        <span className="fd-calendar__score fd-calendar__score-away">{game.score.fulltime.away}</span>
                                                    </>
                                                }
                                                {game.fixture.status.short === 'NS' && 
                                                    <span className="fd-calendar__score fd-calendar__not-started">{format(new Date(game.fixture.date),'d')} {format(game.fixture.date, {time:'short'})} </span>
                                                }
                                                {game.fixture.status.short === 'TBD' && 
                                                    <span className="fd-calendar__score fd-calendar__not-started"> - </span>
                                                }
                                            </div>
                                            <div className="fd-calendar__col fd-calendar__away-team">
                                                <img src={game.teams.away.logo} alt={game.teams.away.name} className="fd-calendar__team-logo fd-calendar__away-team-logo"/>
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
