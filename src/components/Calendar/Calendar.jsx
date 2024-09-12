// import { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
// import { calendarMock } from "../../mocks/calendarMock";
import PropTypes from 'prop-types';
import dayjs from "dayjs";
import es from "dayjs/locale/es";
import { Loading } from "../../shared/components/Loading/Loading";
import { getGamesForRound } from "../../helpers/getGamesForRound";

dayjs.locale(es);
import './Calendar.scss';

export const Calendar = ({leagueID}) => {    
        
    const {data = [], hasError, isLoading} = useFetch(`https:v3.football.api-sports.io/fixtures?season=2024&league=${leagueID}`);
    // const data = calendarMock;

    if (hasError) {
        return <p>Ha habido un problema en la carga... Intenta de nuevo mas tarde.</p>
    }
    if (isLoading || !data) {
        return <Loading></Loading>
    }

    return (
        <>
            <h1>Calendario </h1>

            <div className="fd-calendar">
                {
                    getGamesForRound(data).map((round) => (
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

Calendar.propTypes = {
    leagueID: PropTypes.number
}