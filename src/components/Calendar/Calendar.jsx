import { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { calendarMock } from "../../mocks/calendarMock";
import dayjs from "dayjs";
import es from "dayjs/locale/es";
import minMax from "dayjs/plugin/minMax";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
dayjs.extend(minMax);
dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);
dayjs.locale(es);


import './Calendar.scss';

export const Calendar = ({leagueID}) => {    
        
    const {data = [], hasError, isLoading} = useFetch(`https:v3.football.api-sports.io/fixtures?season=2024&league=${leagueID}`);
    // const data = calendarMock;

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
                    gamesForRound[index].dates.push(dayjs(game.fixture.date));
                    gamesForRound[index].datesShort.push(dayjs(game.fixture.date).format('DD/MM/YYYY'));
                }
            });

            let firstDate = dayjs.min(...gamesForRound[index].dates).format('DD');
            let lastDate = dayjs.max(...gamesForRound[index].dates).format('DD');
            let firstMonth = dayjs.min(...gamesForRound[index].dates).format('MMMM');
            let lastMonth = dayjs.max(...gamesForRound[index].dates).format('MMMM');

            gamesForRound[index].finalDate = `${firstDate} ${firstMonth === lastMonth ? '' : firstMonth} - ${lastDate} ${lastMonth} `;
            gamesForRound[index].games = gamesForRound[index].games.sort((a, b) => dayjs(a.fixture.date).isSameOrAfter(dayjs(b.fixture.date)) ? 1 : -1);

        });
        
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
                                                    <span className="fd-calendar__score fd-calendar__not-started">{dayjs(game.fixture.date).format('dd')} {dayjs(game.fixture.date).format('HH:mm')} </span>
                                                }
                                                {game.fixture.status.short === 'TBD' && 
                                                    <span className="fd-calendar__score fd-calendar__not-started"> - </span>
                                                }
                                                {(game.fixture.status.short === '1H' || game.fixture.status.short === 'HT' || game.fixture.status.short === '2H') &&
                                                <>
                                                    <span className="fd-calendar__score fd-calendar__score-home">{game.goals.home} - </span>
                                                    <span className="fd-calendar__score fd-calendar__score-away">{game.goals.away}</span>
                                                </>
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
