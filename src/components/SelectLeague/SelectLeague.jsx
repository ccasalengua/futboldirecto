import { useState } from "react";
import PropTypes from 'prop-types';
import { useFetch } from "../../hooks/useFetch";
import { Box, InputLabel, MenuItem, FormControl, Select } from '@mui/material';
import { leaguesMock } from "../../mocks/LeaguesMock";

import './SelectLeague.scss';

export const SelectLeague = ({onChangeLeague}) => {
    const [selectedLeague, setSelectedLeague] = useState(140);

    const handleChange = (event) => {
        setSelectedLeague(event.target.value);
        onChangeLeague(event.target.value);
    };
    // const {data = [], hasError, isLoading} = useFetch(`https://v3.football.api-sports.io/leagues`);
    const data = leaguesMock;

    // const mainLeaguesID = [140, 39];

    return (
        <Box sx={{ minWidth: 120}}>
            <FormControl fullWidth>
                <InputLabel className="fd-select__input" id="demo-simple-select-label">Selecciona una liga</InputLabel>
                <Select
                    className="fd-select__select"
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selectedLeague}
                    label="Selecciona una liga"
                    onChange={handleChange}>
                        {
                            data.map(league => (
                                <MenuItem className="fd-select__item" key={league.league.id} value={league.league.id}><span className="fd-select__flag" style={{backgroundImage:'url(' + league.country.flag + ')'}}></span>{league.league.name}</MenuItem>
                            ))
                        }
                </Select>
            </FormControl>
            </Box>
    );
};

SelectLeague.propTypes = {
    onChangeLeague: PropTypes.func
}