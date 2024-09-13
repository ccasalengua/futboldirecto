import { useState } from "react";
import PropTypes from 'prop-types';
// import { useFetch } from "../../hooks/useFetch";
import { Box, InputLabel, MenuItem, FormControl, Select } from '@mui/material';
import { leaguesMock } from "../../mocks/LeaguesMock";
import { Loading } from "../../shared/components/Loading/Loading";

import './SelectSports.scss';

export const SelectSports = ({onChangeSports, title = 'test' }) => {
    const [selectedSport, setSelectedSport] = useState('f1');

    const handleChange = (event) => {
        setSelectedSport(event.target.value);
        onChangeSports(event.target.value);
    };
    // const {data = [], hasError, isLoading} = useFetch(`https://v3.football.api-sports.io/leagues`);
    const data = leaguesMock;
    const hasError = null;
    const isLoading = false;

    // const mainLeaguesID = [140, 39];

    if (hasError) {
        return <p>Ha habido un problema en la carga... Intenta de nuevo mas tarde.</p>
    }
    if (isLoading || !data) {
        return <Loading></Loading>
    }

    return (
        <Box sx={{ minWidth: 120}}>
            <FormControl fullWidth>
                <InputLabel className="fd-select__input" id="demo-simple-select-label">{title}</InputLabel>
                <Select
                    className="fd-select__select"
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selectedSport}
                    label="Selecciona un deporte"
                    onChange={handleChange}>
                    <MenuItem className="fd-select__item" key='football' value='football'>Fútbol</MenuItem>
                    <MenuItem className="fd-select__item" key='f1' value='f1'>F1</MenuItem>
                </Select>
            </FormControl>
            </Box>
    );
};

SelectSports.propTypes = {
    onChangeSports: PropTypes.func,
    title: PropTypes.string
}