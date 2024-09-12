import { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import PropTypes from 'prop-types';
// import { premierLeagueMock } from "../../mocks/premierLeague";
import { Loading } from "../../shared/components/Loading/Loading";
import { getRankPosition } from "../../helpers/getRankPosition";
import { TeamDialog } from "../../shared/components/dialog/TeamDialog/TeamDialog";
import { requestOptions } from "../../helpers/services/requestOptions";

import './Clasificacion.scss';

const localCache = {};

export const Clasificacion = ({leagueID}) => {

    const {data = [], hasError, isLoading} = useFetch(`https://v3.football.api-sports.io/standings?league=${leagueID}&season=2024`);
    
    // const data = premierLeagueMock;

    const numberOfTeams = data[0]?.league?.standings[0].length;

    const [collapse, setCollapse] = useState(new Array(numberOfTeams).fill(true));
    const [open, setOpen] = useState(false);
    const [team, setTeam] = useState({});
    const [isLoadingTeam, setIsLoadingTeam] = useState(true);

    const setCollapseDataAsync = async () => {
        setCollapse(new Array(numberOfTeams).fill(true))
    }

    useEffect(() => {
        onClickInfoTeam
    }, [])
    

    const useEffectIf = (loading, fn) => {
        useEffect(() => {if (!loading) {
            fn();
            return () => {};
        }}, [loading])
      }


    useEffectIf(isLoading, setCollapseDataAsync);

    

    const onClickInfoTeam = async(idTeam) => {
        setOpen(true);
        
        let url = `https://v3.football.api-sports.io/teams?id=${idTeam}`;
        
        if (localCache[url]){
            setTeam(localCache[url].response[0])
            setOpen(true);
            return;
        }

        setIsLoadingTeam(true);

        try {
            const result = await fetch(url, requestOptions);
            if (!result.ok) {
                console.log('Ha habido un error')
                return; 
            }
            
            const resp = await result.json();
            setTeam(resp.response[0]);
            setIsLoadingTeam(false);
    
            localCache[url] = resp;
            
        } catch(error) {
            console.log('Hubo un problema con la petición Fetch:' + error.message);
            setIsLoadingTeam(false);
        }       
        
    };

    const handleClose = () => {
        setOpen(false);
    };
    

    if (hasError) {
        return <p>Ha habido un problema en la carga... Intenta de nuevo mas tarde.</p>
    }
    if (isLoading || !data) {
        return <Loading></Loading>
    }
    
    const clickCollapse = (index) => {
        setCollapse(prevState => { 
            let copyShow = [...prevState];
            copyShow[index] = !copyShow[index];
            return copyShow;
        });
    };

    

    return (
        <>
            <h1>Clasificación de: </h1>

            <TeamDialog
                open={open}
                onClose={handleClose}
                data={team}
                isLoadingTeam={isLoadingTeam}
            />

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
                                            <tr className={`fd-table__row ${collapse[index] ? 'collapsed' : 'collapsed-in'} ${getRankPosition(team)} `} key={index} onClick={() => clickCollapse(index)}>
                                                <td className={`fd-table__col`}>
                                                    <button className="fd-table__team-button" onClick={() => onClickInfoTeam(team.team.id)}>Info team</button>
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

Clasificacion.propTypes = {
    leagueID: PropTypes.number
}