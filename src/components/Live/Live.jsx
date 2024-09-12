import { } from "react";
import { useFetch } from "../../hooks/useFetch";
// import { liveMock } from "../../mocks/liveMock";
// import { roundMock } from "../../mocks/roundMock";
import dayjs from "dayjs";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import PropTypes from 'prop-types';
dayjs.extend(isSameOrAfter);

import './Live.scss';

export const Live = ({leagueID}) => {    
    
    // const {data = [], hasError, isLoading} = useFetch(`https://v3.football.api-sports.io/fixtures?status="NS"`);
    // const {data = [], hasError, isLoading} = useFetch(`https://v3.football.api-sports.io/fixtures?live=140-703`);

    // LIVE 
    const liveData = useFetch(`https://v3.football.api-sports.io/fixtures?live=all`);
    // let data = liveMock;
    console.log('liveData: ' , liveData.data);
    //END LIVE
    
    const round = useFetch(`https://v3.football.api-sports.io/fixtures/rounds?league=${leagueID}&season=2024&current=true`);
    // const round = roundMock;
    console.log('round: ', round.data);
    
    
    const roundData = useFetch(`https://v3.football.api-sports.io/fixtures?season=2024&league=${leagueID}&round=${round.data}`);
    const roundSorted = roundData.data.sort((a, b) => dayjs(a.fixture.date).isSameOrAfter(dayjs(b.fixture.date)) ? 1 : -1);

    // const roundSorted = data.sort((a, b) => dayjs(a.fixture.date).isSameOrAfter(dayjs(b.fixture.date)) ? 1 : -1);
    
    

    console.log('roundData: ' , roundData.data);

    return (
        <>
            <h1>En directo: </h1>
            <section className="fd-calendar fd-live">
                <div className="fd-live__box fd-live__round" >
                    {
                        liveData.data.map((round, i) => (
                            <div key={round.fixture.id} className="fd-calendar__box fd-calendar__round" >
                                <div className="fd-calendar__header">Partido {i + 1}
                                    <span className="fd-calendar__date">{dayjs(round.fixture.date).format('DD/MM/YYYY - HH:mm')}</span>
                                </div>
                                <ul className="fd-calendar__list">
                                    <li className="fd-calendar__row">
                                        <div className="fd-calendar__col fd-calendar__home-team">
                                            <span className="fd-calendar__team-name fd-calendar__home-team-name">{round.teams.home.name} </span>
                                            <img src={round.teams.home.logo} alt={round.teams.home.name} className="fd-calendar__team-logo fd-calendar__home-team-logo"/>
                                        </div>
                                        <div className={`fd-calendar__score-box ${round.fixture.status.short === 'NS' || round.fixture.status.short === 'TBD' ? 'fd-calendar__score-box--ns' : ''}`}>
                                            {round.fixture.status.short === 'FT' && 
                                                <>
                                                    <span className="fd-calendar__score fd-calendar__score-home">{round.goals.home} - </span>
                                                    <span className="fd-calendar__score fd-calendar__score-away">{round.goals.away}</span>
                                                </>
                                            }
                                            {round.fixture.status.short === 'NS' && 
                                                <span className="fd-calendar__score fd-calendar__not-started">{dayjs(round.fixture.date).format('dd')} {dayjs(round.fixture.date).format('HH:mm')} </span>
                                            }
                                            {round.fixture.status.short === 'TBD' && 
                                                <span className="fd-calendar__score fd-calendar__not-started"> - </span>
                                            }
                                            {(round.fixture.status.short === '1H' || round.fixture.status.short === 'HT' || round.fixture.status.short === '2H') &&
                                                <>
                                                    <span className="fd-calendar__score fd-calendar__score-home">{round.goals.home} - </span>
                                                    <span className="fd-calendar__score fd-calendar__score-away">{round.goals.away}</span>
                                                </>
                                            }
                                        </div>
                                        <div className="fd-calendar__col fd-calendar__away-team">
                                            <img src={round.teams.away.logo} alt={round.teams.away.name} className="fd-calendar__team-logo fd-calendar__away-team-logo"/>
                                            <span className="fd-calendar__team-name fd-calendar__away-team-name">{round.teams.away.name} </span>
                                        </div>
                                    </li>           
                                </ul>   
                            </div>
                        ))
                    }
                </div>
            </section>
            <section className="fd-calendar fd-live">
                <header className="fd-calendar__header">Jornada {round.data} - Liga: </header>
                <div className="fd-live__box fd-live__round" >
                    {
                        roundSorted.map((round, i) => (
                            <div key={round.fixture.id} className="fd-calendar__box fd-calendar__round" >
                                <div className="fd-calendar__header">Partido {i + 1}
                                    <span className="fd-calendar__date">{dayjs(round.fixture.date).format('DD/MM/YYYY - HH:mm')}</span>
                                </div>
                                <ul className="fd-calendar__list">
                                    <li className="fd-calendar__row">
                                        <div className="fd-calendar__col fd-calendar__home-team">
                                            <span className="fd-calendar__team-name fd-calendar__home-team-name">{round.teams.home.name} </span>
                                            <img src={round.teams.home.logo} alt={round.teams.home.name} className="fd-calendar__team-logo fd-calendar__home-team-logo"/>
                                        </div>
                                        <div className={`fd-calendar__score-box ${round.fixture.status.short === 'NS' || round.fixture.status.short === 'TBD' ? 'fd-calendar__score-box--ns' : ''}`}>
                                            {round.fixture.status.short === 'FT' && 
                                                <>
                                                    <span className="fd-calendar__score fd-calendar__score-home">{round.goals.home} - </span>
                                                    <span className="fd-calendar__score fd-calendar__score-away">{round.goals.away}</span>
                                                </>
                                            }
                                            {round.fixture.status.short === 'NS' && 
                                                <span className="fd-calendar__score fd-calendar__not-started">{dayjs(round.fixture.date).format('dd')} {dayjs(round.fixture.date).format('HH:mm')} </span>
                                            }
                                            {round.fixture.status.short === 'TBD' && 
                                                <span className="fd-calendar__score fd-calendar__not-started"> - </span>
                                            }
                                            {(round.fixture.status.short === '1H' || round.fixture.status.short === 'HT' || round.fixture.status.short === '2H') &&
                                                <>
                                                    <span className="fd-calendar__score fd-calendar__score-home">{round.goals.home} - </span>
                                                    <span className="fd-calendar__score fd-calendar__score-away">{round.goals.away}</span>
                                                </>
                                            }
                                        </div>
                                        <div className="fd-calendar__col fd-calendar__away-team">
                                            <img src={round.teams.away.logo} alt={round.teams.away.name} className="fd-calendar__team-logo fd-calendar__away-team-logo"/>
                                            <span className="fd-calendar__team-name fd-calendar__away-team-name">{round.teams.away.name} </span>
                                        </div>
                                    </li>           
                                </ul>   
                            </div>
                        ))
                    }
                </div>
            </section>
        </>
    );
};

Live.propTypes = {
    leagueID: PropTypes.number
}