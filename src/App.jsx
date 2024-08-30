import { useState } from "react";
import { Clasificacion } from "./components/Clasificacion/Clasificacion";
import { Tab, Box } from "@mui/material";
import { TabContext, TabList, TabPanel } from '@mui/lab';
import "./App.css";
import { AppTheme } from "./theme";
import { SelectLeague } from "./components/SelectLeague/SelectLeague";

function App() {
    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const onChangeLeague = (value = 140) => {
        return value;
    }


    return (
        <AppTheme>
            <h1>FUTBOL DIRECTO</h1>

            <form>
                <SelectLeague onChangeLeague={onChangeLeague}></SelectLeague>
            </form>

            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                    <Tab label="Calendario" value="0" />
                    <Tab label="Clasificacion" value="1" />
                    <Tab label="Ranking" value="2" />
                    </TabList>
                </Box>
                <TabPanel value="0">Calendario</TabPanel>
                <TabPanel value="1">
                    <Clasificacion onChangeLeague={onChangeLeague}></Clasificacion>
                </TabPanel>
                <TabPanel value="2">Ranking</TabPanel>
            </TabContext>
            
        </AppTheme>
    );
}

export default App;
