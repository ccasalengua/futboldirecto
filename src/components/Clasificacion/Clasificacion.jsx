import { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { getLeague } from "../../helpers/getLeague";
import { premierLeagueMock } from "../../mocks/premierLeague";

import './Clasificacion.scss';

export const Clasificacion = ({onChangeLeague}) => {

    // const [counter, setCounter] = useState(140);
    // let resp = [];
    // useEffect(() => {
    //     console.log('league primera vez: ', onChangeLeague());
    //     getLeague(140);
    // }, [])
    
    
    
    
    // const data = getLeague(onChangeLeague());
    const {data = [], hasError, isLoading} = useFetch(`https://v3.football.api-sports.io/standings?league=140&season=2024`);
    // const data = premierLeagueMock;
    const [collapse, setCollapse] = useState(new Array(data[0]?.league?.standings[0].length).fill(true));

    const clickCollapse = (index) => {
        setCollapse(prevState => { 
            let copyShow = [...prevState];
            copyShow[index] = !copyShow[index];
            return copyShow;
        });
    };

    const rankPosition = (team) => {
        let result = '';
        if (team.description === 'Champions League') {
            result = 'champions';
        } else if (team.description === 'UEFA Europa League') {
            result = 'uefa';
        } else if (team.description === 'Relegation') {
            result = 'relegation';
        }

        return result;
    }

    return (
        <>
            <h1>Clasificación de: </h1>

            {
                data.map(league => (
                    <div key={league.league.id}>
                        <table className="fd-table">
                            <caption className="fd-table__caption">
                                <span className="fd-table__caption-flag"><img src={league.league.flag} alt={league.league.name}/></span>
                                <span>{league.league.name} </span>
                            </caption>
                            <thead className="fd-table__head">
                                <tr className="fd-table__row">
                                    <th className="fd-table__col">Equipo</th>
                                    <th className="fd-table__col" title="Puntos">PTS</th>
                                    <th className="fd-table__col" title="Partidos jugados">PJ</th>
                                    <th className="fd-table__col" title="Partidos Ganados">PG</th>
                                    <th className="fd-table__col" title="Partidos Empatados">PE</th>
                                    <th className="fd-table__col" title="Partidos Perdidos">PP</th>
                                    <th className="fd-table__col" title="Goles a favor">GF</th>
                                    <th className="fd-table__col" title="Goles en contra">GC</th>
                                    <th className="fd-table__col" title="Diferencia de goles">DG</th>
                                </tr>
                            </thead>
                            <tbody className="fd-table__body">
                                {
                                    league.league.standings.map(teams => (
                                        teams.map((team,index) => (
                                            <tr className={`fd-table__row ${collapse[index] ? 'collapsed' : 'collapsed-in'} ${rankPosition(team)} `} key={index} onClick={() => clickCollapse(index)}>
                                                <td className={`fd-table__col`}>
                                                    <div className="fd-table__col-int">
                                                        <span className="fd-table__team-rank">{team.rank} </span> 
                                                        <span className="fd-table__team-logo"><img className="fd-table__logo-team" src={team.team.logo} alt={team.team.name}/></span> 
                                                        <span className="fd-table__team-name">{team.team.name}</span>
                                                 
                                                        <button className="fd-table__collapse-button" >Desplegar</button>
                                                    </div>
                                                </td> 
                                                <td data-label="PTS: "className="fd-table__col">{team.points}</td>
                                                <td data-label="PJ: " className="fd-table__col">{team.all.played}</td> 
                                                <td data-label="PG: " className="fd-table__col">{team.all.win}</td> 
                                                <td data-label="PE: " className="fd-table__col">{team.all.draw}</td> 
                                                <td data-label="PP: " className="fd-table__col">{team.all.lose}</td> 
                                                <td data-label="GF: " className="fd-table__col">{team.all.goals.for}</td> 
                                                <td data-label="GC: " className="fd-table__col">{team.all.goals.against}</td> 
                                                <td data-label="DG: " className="fd-table__col">{team.goalsDiff}</td>
                                            </tr>
                                        ))
                                    ))
                                }
                            </tbody>
                        </table>
                        <ul className="fd-table__legend">
                            <li className="fd-table__zone-top-1">
                                <span>Champions League</span>
                            </li>
                            <li className="fd-table__zone-top-2">
                                <span>Europa League</span>
                            </li>
                            <li className="fd-table__zone-top-3">
                                <span>Conference League</span>
                            </li>
                            <li className="fd-table__zone-bottom-1">
                                <span>Descenso</span>
                            </li>
                        </ul>
                    </div>
                    
                ))
            }
        </>
    );
};
