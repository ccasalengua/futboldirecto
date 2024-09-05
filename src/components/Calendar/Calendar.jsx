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


    return (
        <>
            <h1>Calendario </h1>

            <div className="fd-calendar">
                <section className="fd-calendar__box fd-calendar__round">
                    {
                        
                        getNumberRounds().map((round) => (
                            <div key={round} >
                                <header className="fd-calendar__header">Jornada {round}</header>
                                <ul >
                                {
                                    data.map((game, i) => (
                                        <li key={game.fixture.id} className="fd-calendar__row">
                                            <span className="fd-calendar__col fd-calendar__player-rank">{round} </span>
                                            <div className="fd-calendar__col fd-calendar__player-info">
                                                {/* <img className="fd-calendar__player-photo" src={round.player.photo} alt={round.player.name}/>
                                                <span className="fd-calendar__player-name">{round.player.name}</span>
                                                <span className="fd-calendar__player-position">{round.statistics[0].games.position}</span>
                                                <div className="fd-calendar__player-team">
                                                    <img className="fd-calendar__team-photo" src={round.statistics[0].team.logo} alt={round.statistics[0].team.name}/>
                                                    <span className="fd-calendar__team-name">{round.statistics[0].team.name}</span>
                                                </div>  */}
                                            </div>
                                            {/* <span className="fd-calendar__col fd-calendar__player-goals">{round.statistics[0].goals.total}</span> */}
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
