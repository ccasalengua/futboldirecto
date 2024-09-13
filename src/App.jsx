import { useState } from "react";
import { Clasificacion } from "./components/Clasificacion/Clasificacion";
import { Tab, Box } from "@mui/material";
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { AppTheme } from "./theme";
import { SelectLeague } from "./components/SelectLeague/SelectLeague";
import { Ranking } from "./components/Ranking/Ranking";
import { Live } from "./components/Live/Live";
import { Calendar } from "./components/Calendar/Calendar";
import { SelectSports } from "./components/SelectSports/SelectSports";
import { ClasificacionF1 } from "./components/ClasificacionF1/ClasificacionF1";

function App() {
    const [sport, setSport] = useState('f1');
    const [activeTabFootball, setActiveTabFootball] = useState('3');
    const [activeTabF1, setActiveTabF1] = useState('2');
    const [league, setLeague] = useState(140);
    const [seasonF1, setSeasonF1] = useState(2024);

    const changeTabFootball = (event, newValue) => {
        setActiveTabFootball(newValue);
    };

    const changeTabF1 = (event, newValue) => {
        setActiveTabF1(newValue);
    };

    const onChangeLeague = (value = league) => {
        setLeague(value);
        return value;
    }

    const onChangeSeasonF1 = (value = seasonF1) => {
        setSeasonF1(value);
        return value;
    }

    const onChangeSports = (value = sport) => {
        setSport(value);
        return value;
    }

    return (
        <AppTheme>
            {sport === 'football' && 
                <h1>FUTBOL DIRECTO</h1>
            }
            {sport === 'f1' && 
                <h1>F1</h1>
            }

            <form>
                <SelectSports onChangeSports={onChangeSports}></SelectSports>
                {sport === 'football' && 
                    <>
                        <SelectLeague onChangeLeague={onChangeLeague}></SelectLeague>
                    </>    
                }
                {sport === 'f1' && 
                    <>
                        {/* <SelectSeasonF1 onChangeLeague={onChangeSeasonF1}></SelectSeasonF1> */}
                    </>    
                }  
                
            </form>

            {sport === 'football' && 
                <TabContext className="fd-tabs__context" value={activeTabFootball}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList className="fd-tabs" onChange={changeTabFootball} aria-label="tablist">
                            <Tab label="En directo" value="0" />
                            <Tab label="Calendario" value="1" />
                            <Tab label="Clasificacion" value="2" />
                            <Tab label="Ranking" value="3" />
                        </TabList>
                    </Box>
                    <TabPanel className="fd-tabs__panel" value="0">
                        <Live leagueID={league}></Live>
                    </TabPanel>
                    <TabPanel className="fd-tabs__panel" value="1">
                        <Calendar leagueID={league}></Calendar>
                    </TabPanel>
                    <TabPanel className="fd-tabs__panel" value="2">
                        <Clasificacion leagueID={league}></Clasificacion>
                    </TabPanel>
                    <TabPanel className="fd-tabs__panel" value="3">
                        <Ranking leagueID={league}></Ranking>
                    </TabPanel>
                </TabContext>
                 
            }  

            {sport === 'f1' && 
                <>
                    FORMULA 1
                    <TabContext className="fd-tabs__context" value={activeTabF1}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList className="fd-tabs" onChange={changeTabF1} aria-label="tablist">
                                <Tab label="Resultados" value="0" />
                                <Tab label="Clasificacion" value="1" />
                                <Tab label="Calendario" value="2" />
                            </TabList>
                        </Box>
                        <TabPanel className="fd-tabs__panel" value="0">
                            {/* <Live leagueID={league}></Live> */}
                            Resultados F1 Proximamente...
                        </TabPanel>
                        <TabPanel className="fd-tabs__panel" value="1">
                            {/* <Calendar leagueID={league}></Calendar> */}
                            Calendar F1 Proximamente...
                        </TabPanel>
                        <TabPanel className="fd-tabs__panel" value="2">
                            <ClasificacionF1 season={seasonF1}></ClasificacionF1>
                        </TabPanel>
                    </TabContext>
                </>
            }

            
            
        </AppTheme>
    );
}

export default App;
