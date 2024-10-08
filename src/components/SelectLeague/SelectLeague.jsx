import { useState } from "react";
import PropTypes from 'prop-types';
import { useFetch } from "../../hooks/useFetch";
import { Box, InputLabel, MenuItem, FormControl, Select } from '@mui/material';
import './SelectLeague.scss';

export const SelectLeague = ({onChangeLeague}) => {
    const [selectedLeague, setSelectedLeague] = useState(140);

    const handleChange = (event) => {
        setSelectedLeague(event.target.value);
        onChangeLeague(event.target.value);
    };
    // const {data = [], hasError, isLoading} = useFetch(`https://v3.football.api-sports.io/leagues`);
    const data = [
        {
            "league": {
                "id": 4,
                "name": "Euro Championship",
                "type": "Cup",
                "logo": "https://media.api-sports.io/football/leagues/4.png"
            },
            "country": {
                "name": "World",
                "code": null,
                "flag": null
            },
            "seasons": [
                {
                    "year": 2008,
                    "start": "2008-06-07",
                    "end": "2008-06-29",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": false,
                            "statistics_players": false
                        },
                        "standings": false,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2012,
                    "start": "2012-06-08",
                    "end": "2012-07-01",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": false,
                            "statistics_players": false
                        },
                        "standings": false,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2016,
                    "start": "2016-06-10",
                    "end": "2016-07-10",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": true,
                            "statistics_players": true
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2020,
                    "start": "2019-03-21",
                    "end": "2021-07-11",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": true,
                            "statistics_players": true
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2024,
                    "start": "2024-06-14",
                    "end": "2024-07-14",
                    "current": true,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": true,
                            "statistics_players": true
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                }
            ]
        },
        {
            "league": {
                "id": 21,
                "name": "Confederations Cup",
                "type": "Cup",
                "logo": "https://media.api-sports.io/football/leagues/21.png"
            },
            "country": {
                "name": "World",
                "code": null,
                "flag": null
            },
            "seasons": [
                {
                    "year": 2009,
                    "start": "2009-06-14",
                    "end": "2009-06-28",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": false,
                            "statistics_players": false
                        },
                        "standings": false,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2013,
                    "start": "2013-06-15",
                    "end": "2013-06-30",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": false,
                            "statistics_players": false
                        },
                        "standings": false,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2017,
                    "start": "2017-06-17",
                    "end": "2017-07-02",
                    "current": true,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": true,
                            "statistics_players": false
                        },
                        "standings": false,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                }
            ]
        },
        {
            "league": {
                "id": 61,
                "name": "Ligue 1",
                "type": "League",
                "logo": "https://media.api-sports.io/football/leagues/61.png"
            },
            "country": {
                "name": "France",
                "code": "FR",
                "flag": "https://media.api-sports.io/flags/fr.svg"
            },
            "seasons": [
                {
                    "year": 2010,
                    "start": "2010-08-07",
                    "end": "2011-05-29",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": false,
                            "statistics_players": false
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2011,
                    "start": "2011-08-06",
                    "end": "2012-05-20",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": false,
                            "statistics_players": false
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2012,
                    "start": "2012-08-10",
                    "end": "2013-05-26",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": false,
                            "statistics_players": false
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2013,
                    "start": "2013-08-09",
                    "end": "2014-05-17",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": false,
                            "statistics_players": false
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2014,
                    "start": "2014-08-08",
                    "end": "2015-05-23",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": false,
                            "statistics_players": false
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2015,
                    "start": "2015-08-07",
                    "end": "2016-05-14",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": true,
                            "statistics_players": true
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2016,
                    "start": "2016-08-12",
                    "end": "2017-05-20",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": true,
                            "statistics_players": true
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2017,
                    "start": "2017-08-04",
                    "end": "2018-05-19",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": true,
                            "statistics_players": true
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2018,
                    "start": "2018-08-10",
                    "end": "2019-05-24",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": true,
                            "statistics_players": true
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2019,
                    "start": "2019-08-09",
                    "end": "2020-05-23",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": true,
                            "statistics_players": true
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2020,
                    "start": "2020-08-21",
                    "end": "2021-05-30",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": true,
                            "statistics_players": true
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": true,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2021,
                    "start": "2021-08-06",
                    "end": "2022-05-29",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": true,
                            "statistics_players": true
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": true,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2022,
                    "start": "2022-08-05",
                    "end": "2023-06-03",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": true,
                            "statistics_players": true
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": true,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2023,
                    "start": "2023-08-11",
                    "end": "2024-06-02",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": true,
                            "statistics_players": true
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": true,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2024,
                    "start": "2024-08-18",
                    "end": "2025-05-18",
                    "current": true,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": true,
                            "statistics_players": true
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": true,
                        "predictions": true,
                        "odds": true
                    }
                }
            ]
        },
        {
            "league": {
                "id": 144,
                "name": "Jupiler Pro League",
                "type": "League",
                "logo": "https://media.api-sports.io/football/leagues/144.png"
            },
            "country": {
                "name": "Belgium",
                "code": "BE",
                "flag": "https://media.api-sports.io/flags/be.svg"
            },
            "seasons": [
                {
                    "year": 2010,
                    "start": "2010-07-30",
                    "end": "2011-05-16",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": false,
                            "statistics_players": false
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2011,
                    "start": "2011-07-29",
                    "end": "2012-05-20",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": false,
                            "statistics_players": false
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2012,
                    "start": "2012-07-28",
                    "end": "2013-05-26",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": false,
                            "statistics_players": false
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2013,
                    "start": "2013-07-26",
                    "end": "2014-05-18",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": false,
                            "statistics_players": false
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2014,
                    "start": "2014-07-25",
                    "end": "2015-05-31",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": false,
                            "statistics_players": false
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2015,
                    "start": "2015-07-24",
                    "end": "2016-05-29",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": true,
                            "statistics_players": false
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2016,
                    "start": "2016-07-29",
                    "end": "2017-05-21",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": true,
                            "statistics_players": false
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2017,
                    "start": "2017-07-28",
                    "end": "2018-05-20",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": true,
                            "statistics_players": false
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2018,
                    "start": "2018-07-27",
                    "end": "2019-05-19",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": true,
                            "statistics_players": false
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2019,
                    "start": "2019-07-26",
                    "end": "2020-03-15",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": true,
                            "statistics_players": false
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2020,
                    "start": "2020-08-08",
                    "end": "2021-05-23",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": true,
                            "statistics_players": true
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": true,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2021,
                    "start": "2021-07-23",
                    "end": "2022-05-29",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": true,
                            "statistics_players": true
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": true,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2022,
                    "start": "2022-07-22",
                    "end": "2023-06-04",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": true,
                            "statistics_players": true
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2023,
                    "start": "2023-07-28",
                    "end": "2024-06-02",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": true,
                            "statistics_players": true
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2024,
                    "start": "2024-07-26",
                    "end": "2025-03-15",
                    "current": true,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": true,
                            "statistics_players": true
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": true
                    }
                }
            ]
        },
        {
            "league": {
                "id": 71,
                "name": "Serie A",
                "type": "League",
                "logo": "https://media.api-sports.io/football/leagues/71.png"
            },
            "country": {
                "name": "Brazil",
                "code": "BR",
                "flag": "https://media.api-sports.io/flags/br.svg"
            },
            "seasons": [
                {
                    "year": 2010,
                    "start": "2010-05-08",
                    "end": "2010-11-28",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": false,
                            "statistics_players": false
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2011,
                    "start": "2011-05-21",
                    "end": "2011-12-04",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": false,
                            "statistics_players": false
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2012,
                    "start": "2012-05-19",
                    "end": "2012-12-02",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": false,
                            "statistics_players": false
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2013,
                    "start": "2013-05-25",
                    "end": "2013-12-08",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": false,
                            "statistics_players": false
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2014,
                    "start": "2014-04-19",
                    "end": "2014-12-07",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": false,
                            "statistics_players": false
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2015,
                    "start": "2015-05-09",
                    "end": "2015-12-06",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": true,
                            "statistics_players": true
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2016,
                    "start": "2016-05-14",
                    "end": "2016-12-11",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": true,
                            "statistics_players": true
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2017,
                    "start": "2017-05-13",
                    "end": "2017-12-03",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": true,
                            "statistics_players": true
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2018,
                    "start": "2018-04-14",
                    "end": "2018-12-02",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": true,
                            "statistics_players": true
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2019,
                    "start": "2019-04-27",
                    "end": "2019-12-08",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": true,
                            "statistics_players": true
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2020,
                    "start": "2020-08-08",
                    "end": "2021-02-26",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": true,
                            "statistics_players": true
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2021,
                    "start": "2021-05-29",
                    "end": "2021-12-10",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": true,
                            "statistics_players": true
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2022,
                    "start": "2022-04-10",
                    "end": "2022-11-13",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": true,
                            "statistics_players": true
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2023,
                    "start": "2023-04-15",
                    "end": "2023-12-03",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": true,
                            "statistics_players": true
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2024,
                    "start": "2024-04-13",
                    "end": "2024-12-08",
                    "current": true,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": true,
                            "statistics_players": true
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": true,
                        "predictions": true,
                        "odds": true
                    }
                }
            ]
        },
        {
            "league": {
                "id": 39,
                "name": "Premier League",
                "type": "League",
                "logo": "https://media.api-sports.io/football/leagues/39.png"
            },
            "country": {
                "name": "England",
                "code": "GB",
                "flag": "https://media.api-sports.io/flags/gb.svg"
            },
            "seasons": [
                {
                    "year": 2010,
                    "start": "2010-08-14",
                    "end": "2011-05-17",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": false,
                            "statistics_players": false
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2011,
                    "start": "2011-08-13",
                    "end": "2012-05-13",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": false,
                            "statistics_players": false
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2012,
                    "start": "2012-08-18",
                    "end": "2013-05-19",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": false,
                            "statistics_players": false
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2013,
                    "start": "2013-08-17",
                    "end": "2014-05-11",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": false,
                            "statistics_players": false
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2014,
                    "start": "2014-08-16",
                    "end": "2015-05-24",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": true,
                            "statistics_players": true
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2015,
                    "start": "2015-08-08",
                    "end": "2016-05-17",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": true,
                            "statistics_players": true
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2016,
                    "start": "2016-08-13",
                    "end": "2017-05-21",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": true,
                            "statistics_players": true
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2017,
                    "start": "2017-08-11",
                    "end": "2018-05-13",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": true,
                            "statistics_players": true
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2018,
                    "start": "2018-08-10",
                    "end": "2019-05-12",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": true,
                            "statistics_players": true
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2019,
                    "start": "2019-08-09",
                    "end": "2020-07-26",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": true,
                            "statistics_players": true
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2020,
                    "start": "2020-09-12",
                    "end": "2021-05-23",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": true,
                            "statistics_players": true
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": true,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2021,
                    "start": "2021-08-13",
                    "end": "2022-05-22",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": true,
                            "statistics_players": true
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": true,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2022,
                    "start": "2022-08-05",
                    "end": "2023-05-28",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": true,
                            "statistics_players": true
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": true,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2023,
                    "start": "2023-08-11",
                    "end": "2024-05-19",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": true,
                            "statistics_players": true
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": true,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2024,
                    "start": "2024-08-16",
                    "end": "2025-05-25",
                    "current": true,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": true,
                            "statistics_players": true
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": true,
                        "predictions": true,
                        "odds": true
                    }
                }
            ]
        },
        {
            "league": {
                "id": 78,
                "name": "Bundesliga",
                "type": "League",
                "logo": "https://media.api-sports.io/football/leagues/78.png"
            },
            "country": {
                "name": "Germany",
                "code": "DE",
                "flag": "https://media.api-sports.io/flags/de.svg"
            },
            "seasons": [
                {
                    "year": 2010,
                    "start": "2010-08-20",
                    "end": "2011-05-14",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": false,
                            "statistics_players": false
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2011,
                    "start": "2011-08-05",
                    "end": "2012-05-05",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": false,
                            "statistics_players": false
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2012,
                    "start": "2012-08-24",
                    "end": "2013-05-18",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": false,
                            "statistics_players": false
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2013,
                    "start": "2013-08-09",
                    "end": "2014-05-10",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": false,
                            "statistics_players": false
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2014,
                    "start": "2014-08-22",
                    "end": "2015-05-23",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": false,
                            "statistics_players": false
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2015,
                    "start": "2015-08-14",
                    "end": "2016-05-14",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": true,
                            "statistics_players": true
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2016,
                    "start": "2016-08-26",
                    "end": "2017-05-20",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": true,
                            "statistics_players": true
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2017,
                    "start": "2017-08-18",
                    "end": "2018-05-12",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": true,
                            "statistics_players": true
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2018,
                    "start": "2018-08-24",
                    "end": "2019-05-27",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": true,
                            "statistics_players": true
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2019,
                    "start": "2019-08-16",
                    "end": "2020-07-06",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": true,
                            "statistics_players": true
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2020,
                    "start": "2020-09-18",
                    "end": "2021-05-29",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": true,
                            "statistics_players": true
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": true,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2021,
                    "start": "2021-08-13",
                    "end": "2022-05-23",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": true,
                            "statistics_players": true
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": true,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2022,
                    "start": "2022-08-05",
                    "end": "2023-06-05",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": true,
                            "statistics_players": true
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": true,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2023,
                    "start": "2023-08-18",
                    "end": "2024-05-27",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": true,
                            "statistics_players": true
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": true,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2024,
                    "start": "2024-08-23",
                    "end": "2025-05-17",
                    "current": true,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": true,
                            "statistics_players": true
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": true,
                        "predictions": true,
                        "odds": true
                    }
                }
            ]
        },
        {
            "league": {
                "id": 135,
                "name": "Serie A",
                "type": "League",
                "logo": "https://media.api-sports.io/football/leagues/135.png"
            },
            "country": {
                "name": "Italy",
                "code": "IT",
                "flag": "https://media.api-sports.io/flags/it.svg"
            },
            "seasons": [
                {
                    "year": 2010,
                    "start": "2010-08-28",
                    "end": "2011-05-22",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": false,
                            "statistics_players": false
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2011,
                    "start": "2011-09-09",
                    "end": "2012-05-13",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": false,
                            "statistics_players": false
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2012,
                    "start": "2012-08-25",
                    "end": "2013-05-19",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": false,
                            "statistics_players": false
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2013,
                    "start": "2013-08-24",
                    "end": "2014-05-18",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": false,
                            "statistics_players": false
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2014,
                    "start": "2014-08-30",
                    "end": "2015-05-31",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": false,
                            "statistics_players": false
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2015,
                    "start": "2015-08-22",
                    "end": "2016-05-15",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": true,
                            "statistics_players": true
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2016,
                    "start": "2016-08-20",
                    "end": "2017-05-28",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": true,
                            "statistics_players": true
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2017,
                    "start": "2017-08-19",
                    "end": "2018-05-20",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": true,
                            "statistics_players": true
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2018,
                    "start": "2018-08-18",
                    "end": "2019-05-26",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": true,
                            "statistics_players": true
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2019,
                    "start": "2019-08-24",
                    "end": "2020-08-02",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": true,
                            "statistics_players": true
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2020,
                    "start": "2020-09-19",
                    "end": "2021-05-23",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": true,
                            "statistics_players": true
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": true,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2021,
                    "start": "2021-08-21",
                    "end": "2022-05-22",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": true,
                            "statistics_players": true
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": true,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2022,
                    "start": "2022-08-13",
                    "end": "2023-06-11",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": true,
                            "statistics_players": true
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": true,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2023,
                    "start": "2023-08-19",
                    "end": "2024-05-26",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": true,
                            "statistics_players": true
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": true,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2024,
                    "start": "2024-08-17",
                    "end": "2025-05-25",
                    "current": true,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": true,
                            "statistics_players": true
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": true,
                        "predictions": true,
                        "odds": true
                    }
                }
            ]
        },
        {
            "league": {
                "id": 88,
                "name": "Eredivisie",
                "type": "League",
                "logo": "https://media.api-sports.io/football/leagues/88.png"
            },
            "country": {
                "name": "Netherlands",
                "code": "NL",
                "flag": "https://media.api-sports.io/flags/nl.svg"
            },
            "seasons": [
                {
                    "year": 2010,
                    "start": "2010-08-06",
                    "end": "2011-05-29",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": false,
                            "statistics_players": false
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2011,
                    "start": "2011-08-05",
                    "end": "2012-05-20",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": false,
                            "statistics_players": false
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2012,
                    "start": "2012-08-10",
                    "end": "2013-05-26",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": false,
                            "statistics_players": false
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2013,
                    "start": "2013-08-02",
                    "end": "2014-05-18",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": false,
                            "statistics_players": false
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2014,
                    "start": "2014-08-08",
                    "end": "2015-05-31",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": false,
                            "statistics_players": false
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2015,
                    "start": "2015-08-08",
                    "end": "2016-05-22",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": true,
                            "statistics_players": true
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2016,
                    "start": "2016-08-05",
                    "end": "2017-05-28",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": true,
                            "statistics_players": true
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2017,
                    "start": "2017-08-11",
                    "end": "2018-05-19",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": true,
                            "statistics_players": true
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2018,
                    "start": "2018-08-10",
                    "end": "2019-05-28",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": true,
                            "statistics_players": true
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2019,
                    "start": "2019-08-02",
                    "end": "2020-05-10",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": true,
                            "statistics_players": true
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2020,
                    "start": "2020-09-12",
                    "end": "2021-05-23",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": true,
                            "statistics_players": true
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": true,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2021,
                    "start": "2021-08-13",
                    "end": "2022-05-29",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": true,
                            "statistics_players": true
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": true,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2022,
                    "start": "2022-08-05",
                    "end": "2023-06-11",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": true,
                            "statistics_players": true
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": true,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2023,
                    "start": "2023-08-11",
                    "end": "2024-06-02",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": true,
                            "statistics_players": true
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": true,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2024,
                    "start": "2024-08-09",
                    "end": "2025-05-18",
                    "current": true,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": true,
                            "statistics_players": true
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": true,
                        "predictions": true,
                        "odds": true
                    }
                }
            ]
        },
        {
            "league": {
                "id": 94,
                "name": "Primeira Liga",
                "type": "League",
                "logo": "https://media.api-sports.io/football/leagues/94.png"
            },
            "country": {
                "name": "Portugal",
                "code": "PT",
                "flag": "https://media.api-sports.io/flags/pt.svg"
            },
            "seasons": [
                {
                    "year": 2010,
                    "start": "2010-08-13",
                    "end": "2011-05-14",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": false,
                            "statistics_players": false
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2011,
                    "start": "2011-08-12",
                    "end": "2012-05-12",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": false,
                            "statistics_players": false
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2012,
                    "start": "2012-08-17",
                    "end": "2013-05-19",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": false,
                            "statistics_players": false
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2013,
                    "start": "2013-08-16",
                    "end": "2014-05-11",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": false,
                            "statistics_players": false
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2014,
                    "start": "2014-08-15",
                    "end": "2015-05-23",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": false,
                            "statistics_players": false
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2015,
                    "start": "2015-08-14",
                    "end": "2016-05-15",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": true,
                            "statistics_players": true
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2016,
                    "start": "2016-08-12",
                    "end": "2017-05-21",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": true,
                            "statistics_players": true
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2017,
                    "start": "2017-08-06",
                    "end": "2018-05-13",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": true,
                            "statistics_players": true
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2018,
                    "start": "2018-08-10",
                    "end": "2019-05-19",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": true,
                            "statistics_players": true
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2019,
                    "start": "2019-08-09",
                    "end": "2020-07-26",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": true,
                            "statistics_players": true
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2020,
                    "start": "2020-09-18",
                    "end": "2021-05-30",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": true,
                            "statistics_players": true
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": true,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2021,
                    "start": "2021-08-06",
                    "end": "2022-05-29",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": true,
                            "statistics_players": true
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2022,
                    "start": "2022-08-05",
                    "end": "2023-06-11",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": true,
                            "statistics_players": true
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2023,
                    "start": "2023-08-11",
                    "end": "2024-06-02",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": true,
                            "statistics_players": true
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2024,
                    "start": "2024-08-11",
                    "end": "2025-05-17",
                    "current": true,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": true,
                            "statistics_players": true
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": true
                    }
                }
            ]
        },
        {
            "league": {
                "id": 140,
                "name": "La Liga",
                "type": "League",
                "logo": "https://media.api-sports.io/football/leagues/140.png"
            },
            "country": {
                "name": "Spain",
                "code": "ES",
                "flag": "https://media.api-sports.io/flags/es.svg"
            },
            "seasons": [
                {
                    "year": 2010,
                    "start": "2010-08-28",
                    "end": "2011-05-21",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": false,
                            "statistics_players": false
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2011,
                    "start": "2011-08-27",
                    "end": "2012-05-13",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": false,
                            "statistics_players": false
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2012,
                    "start": "2012-08-18",
                    "end": "2013-06-01",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": false,
                            "statistics_players": false
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2013,
                    "start": "2013-08-17",
                    "end": "2014-05-18",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": false,
                            "statistics_players": false
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2014,
                    "start": "2014-08-23",
                    "end": "2015-05-23",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": true,
                            "statistics_players": false
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2015,
                    "start": "2015-08-21",
                    "end": "2016-05-15",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": true,
                            "statistics_players": true
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2016,
                    "start": "2016-08-19",
                    "end": "2017-05-21",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": true,
                            "statistics_players": true
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2017,
                    "start": "2017-08-18",
                    "end": "2018-05-20",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": true,
                            "statistics_players": true
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2018,
                    "start": "2018-08-17",
                    "end": "2019-05-19",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": true,
                            "statistics_players": true
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2019,
                    "start": "2019-08-16",
                    "end": "2020-07-19",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": true,
                            "statistics_players": true
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2020,
                    "start": "2020-09-12",
                    "end": "2021-05-23",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": true,
                            "statistics_players": true
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": true,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2021,
                    "start": "2021-08-13",
                    "end": "2022-05-22",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": true,
                            "statistics_players": true
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": true,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2022,
                    "start": "2022-08-12",
                    "end": "2023-06-04",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": true,
                            "statistics_players": true
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": true,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2023,
                    "start": "2023-08-11",
                    "end": "2024-05-26",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": true,
                            "statistics_players": true
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": true,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2024,
                    "start": "2024-08-15",
                    "end": "2025-05-25",
                    "current": true,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": true,
                            "statistics_players": true
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": true,
                        "predictions": true,
                        "odds": true
                    }
                }
            ]
        },
        {
            "league": {
                "id": 180,
                "name": "Championship",
                "type": "League",
                "logo": "https://media.api-sports.io/football/leagues/180.png"
            },
            "country": {
                "name": "Scotland",
                "code": "GB",
                "flag": "https://media.api-sports.io/flags/gb.svg"
            },
            "seasons": [
                {
                    "year": 2010,
                    "start": "2010-08-07",
                    "end": "2011-04-26",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": false,
                            "statistics_players": false
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2011,
                    "start": "2011-08-06",
                    "end": "2012-05-05",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": false,
                            "statistics_players": false
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2012,
                    "start": "2012-08-11",
                    "end": "2013-05-04",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": false,
                            "statistics_players": false
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2013,
                    "start": "2013-08-10",
                    "end": "2014-05-03",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": false,
                            "statistics_players": false
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2014,
                    "start": "2014-08-09",
                    "end": "2015-05-02",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": false,
                            "statistics_players": false
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2015,
                    "start": "2015-08-07",
                    "end": "2016-05-01",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": false,
                            "statistics_players": false
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2016,
                    "start": "2016-08-06",
                    "end": "2017-05-06",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": false,
                            "statistics_players": false
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2017,
                    "start": "2017-08-05",
                    "end": "2018-04-28",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": false,
                            "statistics_players": false
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2018,
                    "start": "2018-08-04",
                    "end": "2019-05-04",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": false,
                            "statistics_players": false
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2019,
                    "start": "2019-08-02",
                    "end": "2020-05-02",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": false,
                            "statistics_players": false
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2020,
                    "start": "2020-10-16",
                    "end": "2021-04-30",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": false,
                            "statistics_players": false
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2021,
                    "start": "2021-07-31",
                    "end": "2022-05-15",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": false,
                            "statistics_players": false
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2022,
                    "start": "2022-07-30",
                    "end": "2023-05-20",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": false,
                            "statistics_players": false
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2023,
                    "start": "2023-08-04",
                    "end": "2024-05-18",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": false,
                            "statistics_players": false
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2024,
                    "start": "2024-08-02",
                    "end": "2025-05-02",
                    "current": true,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": false,
                            "statistics_players": false
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": true
                    }
                }
            ]
        },
        {
            "league": {
                "id": 1,
                "name": "World Cup",
                "type": "Cup",
                "logo": "https://media.api-sports.io/football/leagues/1.png"
            },
            "country": {
                "name": "World",
                "code": null,
                "flag": null
            },
            "seasons": [
                {
                    "year": 2010,
                    "start": "2010-06-11",
                    "end": "2010-07-11",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": false,
                            "statistics_players": false
                        },
                        "standings": false,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2014,
                    "start": "2014-06-12",
                    "end": "2014-07-13",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": false,
                            "statistics_players": false
                        },
                        "standings": false,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2018,
                    "start": "2018-06-14",
                    "end": "2018-07-15",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": true,
                            "statistics_players": true
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "year": 2022,
                    "start": "2022-11-20",
                    "end": "2022-12-18",
                    "current": true,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": true,
                            "statistics_players": true
                        },
                        "standings": true,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                }
            ]
        }
    ];

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

// SelectLeague.propTypes = {
//     onChangeLeague: PropTypes.Function
// }