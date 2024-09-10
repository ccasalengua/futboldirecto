import { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { rankingMock } from "../../mocks/rankingMock";
import PropTypes from 'prop-types';
import { SimpleDialog } from "../../shared/components/SimpleDialog/SimpleDialog";
import Button from '@mui/material/Button';

import './Ranking.scss';

export const Ranking = ({leagueID}) => {    
    
    // const data = getLeague(onChangeLeague());
    // const {data = [], hasError, isLoading} = useFetch(`https://v3.football.api-sports.io/players/topscorers?season=2024&league=${leagueID}`);
    const data = rankingMock;

    console.log(data);

    const [open, setOpen] = useState(false);
    const [player, setPlayer] = useState({});

    const handleClickOpen = (value) => {
        setOpen(true);
        setPlayer(value);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <h1>Ranking: </h1>

            <SimpleDialog
                open={open}
                onClose={handleClose}
                data={player}
            />

            <div className="fd-ranking">
                <section className="fd-ranking__box fd-ranking__goals">
                    <header className="fd-ranking__header">Goles</header>
                    {
                        data.map((player, i) => (
                            <div className="fd-ranking__row" key={player.player.id}>
                                <span className="fd-ranking__col fd-ranking__player-rank">{i + 1} </span>
                                <div className="fd-ranking__col fd-ranking__player-info">
                                    <Button onClick={() => handleClickOpen(player)}>
                                        <img className="fd-ranking__player-photo" src={player.player.photo} alt={player.player.name}/>
                                        <span className="fd-ranking__player-name">{player.player.name}</span>
                                        <span className="fd-ranking__player-position">{player.statistics[0].games.position}</span>
                                        <div className="fd-ranking__player-team">
                                            <img className="fd-ranking__team-photo" src={player.statistics[0].team.logo} alt={player.statistics[0].team.name}/>
                                            <span className="fd-ranking__team-name">{player.statistics[0].team.name}</span>
                                        </div> 
                                    </Button>
                                </div>
                                <span className="fd-ranking__col fd-ranking__player-goals">{player.statistics[0].goals.total}</span>
                            </div>
                        ))
                    }
                </section>
            </div>
        </>
    );
};
