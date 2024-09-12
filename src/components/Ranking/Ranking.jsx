import { useState } from "react";
import { useFetch } from "../../hooks/useFetch";
// import { useFetchGoalKeeper } from "../../hooks/useFetchGoalKeeper";
// import { topGoalsMock } from "../../mocks/topGoalsMock";
// import { topAssistsMock } from "../../mocks/topAssistsMock";
// import { playersLeagueMock } from "../../mocks/playersLeagueMock";
import PropTypes from 'prop-types';
import { PlayerDialog } from "../../shared/components/dialog/PlayerDialog/PlayerDialog";
import { getPosition } from "../../helpers/getPosition";
import { Loading } from "../../shared/components/Loading/Loading";

import './Ranking.scss';

export const Ranking = ({leagueID}) => {    
    
    const topGoals = useFetch(`https://v3.football.api-sports.io/players/topscorers?season=2024&league=${leagueID}`);
    const topAssist = useFetch(`https://v3.football.api-sports.io/players/topassists?season=2024&league=${leagueID}`);
    // const playersLeague = useFetch(`https://v3.football.api-sports.io/players?season=2024&league=${leagueID}&page=2`);
    // console.log(playersLeague.data)
   

    // const topGoals = topGoalsMock;
    // const topAssist = topAssistsMock;
    // const playersLeague = playersLeagueMock;
    // const goalkeepers = playersLeague.data.filter((player) => player.statistics[0].games.position === 'Goalkeeper');
    // console.log(goalkeepers);

    const [open, setOpen] = useState(false);
    const [player, setPlayer] = useState({});

    const handleClickOpen = (value) => {
        setOpen(true);
        setPlayer(value);
    };

    const handleClose = () => {
        setOpen(false);
    };

    
    if (topGoals.hasError || topAssist.hasError) {
        return <p>Ha habido un problema en la carga... Intenta de nuevo mas tarde.</p>
    }
    if (topGoals.isLoading || topAssist.isLoading) {
        return <Loading></Loading>
    }

    return (
        <>
            <h1>Ranking: </h1>

            <PlayerDialog
                open={open}
                onClose={handleClose}
                data={player}
            />

            <div className="fd-ranking">
                {/* TOP GOALS */}
                <section className="fd-ranking__box fd-ranking__goals">
                    <header className="fd-ranking__header">Goles</header>
                    {
                        topGoals.data.map((player, i) => (
                            <div className="fd-ranking__row" key={player.player.id}>
                                <span className="fd-ranking__col fd-ranking__player-rank">{i + 1} </span>
                               
                                <div className="fd-ranking__col fd-ranking__player-content">
                                    <button className="fd-ranking__player-button" onClick={() => handleClickOpen(player)}>
                                        <img className="fd-ranking__player-photo" src={player.player.photo} alt={player.player.name}/>
                                        <div className="fd-ranking__player-info">
                                            <span className="fd-ranking__player-name">{player.player.name}</span>
                                            <span className="fd-ranking__player-position">{getPosition(player.statistics[0].games.position)}</span>
                                            <div className="fd-ranking__player-team">
                                                <img className="fd-ranking__team-photo" src={player.statistics[0].team.logo} alt={player.statistics[0].team.name}/>
                                                <span className="fd-ranking__team-name">{player.statistics[0].team.name}</span>
                                            </div> 
                                        </div>
                                        
                                    </button>
                                </div>
                                <span className="fd-ranking__col fd-ranking__player-number">{player.statistics[0].goals.total}</span>
                            </div>
                        ))
                    }
                </section>

                {/* TOP ASSIST */}
                <section className="fd-ranking__box fd-ranking__goals">
                    <header className="fd-ranking__header">Asistencias</header>
                    {
                        topAssist.data.map((player, i) => (
                            <div className="fd-ranking__row" key={player.player.id}>
                                <span className="fd-ranking__col fd-ranking__player-rank">{i + 1} </span>
                               
                                <div className="fd-ranking__col fd-ranking__player-content">
                                    <button className="fd-ranking__player-button" onClick={() => handleClickOpen(player)}>
                                        <img className="fd-ranking__player-photo" src={player.player.photo} alt={player.player.name}/>
                                        <div className="fd-ranking__player-info">
                                            <span className="fd-ranking__player-name">{player.player.name}</span>
                                            <span className="fd-ranking__player-position">{getPosition(player.statistics[0].games.position)}</span>
                                            <div className="fd-ranking__player-team">
                                                <img className="fd-ranking__team-photo" src={player.statistics[0].team.logo} alt={player.statistics[0].team.name}/>
                                                <span className="fd-ranking__team-name">{player.statistics[0].team.name}</span>
                                            </div> 
                                        </div>
                                        
                                    </button>
                                </div>
                                <span className="fd-ranking__col fd-ranking__player-number">{player.statistics[0].goals.assists}</span>
                            </div>
                        ))
                    }
                </section>
                {/* END TOP ASSIST */}
                {/* TOP GOALKEEPERS */}
                {/* <section className="fd-ranking__box fd-ranking__goals">
                    <header className="fd-ranking__header">Porteros</header>
                    {
                        goalkeepers.map((player, i) => (
                            <div className="fd-ranking__row" key={player.player.id}>
                                <span className="fd-ranking__col fd-ranking__player-rank">{i + 1} </span>
                               
                                <div className="fd-ranking__col fd-ranking__player-content">
                                    <button className="fd-ranking__player-button" onClick={() => handleClickOpen(player)}>
                                        <img className="fd-ranking__player-photo" src={player.player.photo} alt={player.player.name}/>
                                        <div className="fd-ranking__player-info">
                                            <span className="fd-ranking__player-name">{player.player.name}</span>
                                            <span className="fd-ranking__player-position">{getPosition(player.statistics[0].games.position)}</span>
                                            <div className="fd-ranking__player-team">
                                                <img className="fd-ranking__team-photo" src={player.statistics[0].team.logo} alt={player.statistics[0].team.name}/>
                                                <span className="fd-ranking__team-name">{player.statistics[0].team.name}</span>
                                            </div> 
                                        </div>
                                        
                                    </button>
                                </div>
                                <span className="fd-ranking__col fd-ranking__player-number">{player.statistics[0].goals.assists}</span>
                            </div>
                        ))
                    }
                </section> */}
                {/* END TOP GOALKEEPERS */}
            </div>
        </>
    );
};

Ranking.propTypes = {
    leagueID: PropTypes.number
}