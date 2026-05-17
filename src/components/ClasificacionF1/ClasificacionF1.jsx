import { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import PropTypes from 'prop-types';
import { Loading } from "../../shared/components/Loading/Loading";
import { requestOptions } from "../../helpers/services/requestOptions";
import { clasificacionF1Mock } from "../../mocks/clasificacionF1Mock";
import { DriverDialog } from "../../shared/components/dialog/DriverDialog/DriverDialog";

import './ClasificacionF1.scss';

const localCache = {};

export const ClasificacionF1 = ({season}) => {

    // const {data = [], hasError, isLoading} = useFetch(`https://v1.formula-1.api-sports.io/rankings/drivers?season=${season}`);
    
    const data = clasificacionF1Mock;
    const hasError = null;
    const isLoading = false;
    console.log('dataF1', data);
    

    const numberOfPilots = data[0]?.league?.standings[0].length;

    const [collapse, setCollapse] = useState(new Array(numberOfPilots).fill(true));
    const [open, setOpen] = useState(false);
    const [driver, setDriver] = useState({});
    const [isLoadingTeam, setIsLoadingTeam] = useState(true);

    const setCollapseDataAsync = async () => {
        setCollapse(new Array(numberOfPilots).fill(true))
    }

    useEffect(() => {
        onClickInfoDriver
    }, [])
    

    const useEffectIf = (loading, fn) => {
        useEffect(() => {if (!loading) {
            fn();
            return () => {};
        }}, [loading])
      }


    useEffectIf(isLoading, setCollapseDataAsync);

    

    const onClickInfoDriver = async(idDriver) => {
        setOpen(true);
        
        let url = `https://v1.formula-1.api-sports.io/drivers?id=${idDriver}`;
        
        if (localCache[url]){
            setDriver(localCache[url].response[0])
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
            setDriver(resp.response[0]);
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
            <h1>Clasificación de Pilotos: </h1>

            <DriverDialog
                open={open}
                onClose={handleClose}
                data={driver}
                isLoadingTeam={isLoadingTeam}
            />

           
                    <table className="fd-table">
                        <caption className="fd-table__caption">
                            {/* <span className="fd-table__caption-flag"><img src={league.league.flag} alt={league.league.name}/></span> */}
                            {/* <span>{driver.driver.name} </span> */}
                        </caption>
                        <thead className="fd-table__head">
                            <tr className="fd-table__row">
                                <th className="fd-table__col">Piloto</th>
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
                                data.map((driver, i) => (
                                    <tr key={i} className={`fd-table__row ${collapse[i] ? 'collapsed' : 'collapsed-in'}`} onClick={() => clickCollapse(i)}>
                                        <td className={`fd-table__col`}>
                                            <button className="fd-table__team-button" onClick={() => onClickInfoDriver(driver.driver.id)}>Info Driver</button>
                                            <div className="fd-table__col-int">
                                                <span className="fd-table__team-rank">{driver.position} </span> 
                                                <span className="fd-table__team-logo"><img className="fd-table__logo-team" src={driver.driver.image} alt={driver.driver.name}/></span> 
                                                <span className="fd-table__team-name">{driver.driver.name}</span>
                                        
                                                <button className="fd-table__collapse-button">Desplegar</button>
                                            </div>
                                        </td> 
                                        <td data-label="PTS: "className="fd-table__col">{driver.points}</td>
                                        {/* <td data-label="PJ: " className="fd-table__col">{team.all.played}</td> 
                                        <td data-label="PG: " className="fd-table__col">{team.all.win}</td> 
                                        <td data-label="PE: " className="fd-table__col">{team.all.draw}</td> 
                                        <td data-label="PP: " className="fd-table__col">{team.all.lose}</td> 
                                        <td data-label="GF: " className="fd-table__col">{team.all.goals.for}</td> 
                                        <td data-label="GC: " className="fd-table__col">{team.all.goals.against}</td> 
                                        <td data-label="DG: " className="fd-table__col">{team.goalsDiff}</td> */}
                                    </tr>
                                ))
                            }                             
                        </tbody>
                    </table>
        </>
    );
};

ClasificacionF1.propTypes = {
    season: PropTypes.number
}