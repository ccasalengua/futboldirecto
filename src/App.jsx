import { useState } from "react";
import { Clasificacion } from "./components/Clasificacion/Clasificacion";
import { Tab, Box } from "@mui/material";
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { AppTheme } from "./theme";
import { SelectLeague } from "./components/SelectLeague/SelectLeague";
import { Ranking } from "./components/Ranking/Ranking";
import { Live } from "./components/Live/Live";
import { Calendar } from "./components/Calendar/Calendar";

function App() {
    const [activeTab, setActiveTab] = useState('1');
    const [league, setLeague] = useState(140);

    const changeTab = (event, newValue) => {
        setActiveTab(newValue);
    };

    const onChangeLeague = (value = 140) => {
        setLeague(value);
        return value;
    }



    return (
        <AppTheme>
            <h1>FUTBOL DIRECTO</h1>

            <form>
                <SelectLeague onChangeLeague={onChangeLeague}></SelectLeague>
            </form>

            <TabContext value={activeTab}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList className="fd-tabs" onChange={changeTab} aria-label="tablist">
                        <Tab label="En directo" value="0" />
                        <Tab label="Calendario" value="1" />
                        <Tab label="Clasificacion" value="2" />
                        <Tab label="Ranking" value="3" />
                    </TabList>
                </Box>
                <TabPanel value="0">
                    <Live></Live>
                </TabPanel>
                <TabPanel value="1">
                    <Calendar leagueID={league}></Calendar>
                </TabPanel>
                <TabPanel value="2">
                    <Clasificacion leagueID={league}></Clasificacion>
                </TabPanel>
                <TabPanel value="3">
                    <Ranking></Ranking>
                </TabPanel>
            </TabContext>
            
        </AppTheme>
    );
}

export default App;
