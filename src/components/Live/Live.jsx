import { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { liveMock } from "../../mocks/liveMock";

import './Live.scss';

export const Live = () => {    
    
    // const {data = [], hasError, isLoading} = useFetch(`https://v3.football.api-sports.io/fixtures?status="NS"`);
    // const {data = [], hasError, isLoading} = useFetch(`https://v3.football.api-sports.io/fixtures?live=140-703`);
    const data = liveMock;

    console.log(data);

    return (
        <>
            <h1>En directo: </h1>

            {/* <div className="fd-ranking">
                <section className="fd-ranking__box fd-ranking__goals">
                    <header className="fd-ranking__header">Goles</header>
                    {
                        data.map((player, i) => (
                            <div className="fd-ranking__row" key={player.player.id}>
                                <span className="fd-ranking__col fd-ranking__player-rank">{i + 1} </span>
                                <div className="fd-ranking__col fd-ranking__player-info">
                                    <img className="fd-ranking__player-photo" src={player.player.photo} alt={player.player.name}/>
                                    <span className="fd-ranking__player-name">{player.player.name}</span>
                                    <span className="fd-ranking__player-position">{player.statistics[0].games.position}</span>
                                    <div className="fd-ranking__player-team">
                                        <img className="fd-ranking__team-photo" src={player.statistics[0].team.logo} alt={player.statistics[0].team.name}/>
                                        <span className="fd-ranking__team-name">{player.statistics[0].team.name}</span>
                                    </div> 
                                </div>
                                <span className="fd-ranking__col fd-ranking__player-goals">{player.statistics[0].goals.total}</span>
                            </div>
                        ))
                    }
                </section>
            
            </div> */}
        </>
    );
};
