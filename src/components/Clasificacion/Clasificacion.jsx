import { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { getLeague } from "../../helpers/getLeague";

import './Clasificacion.scss';

export const Clasificacion = ({onChangeLeague}) => {

    // const [counter, setCounter] = useState(140);
    // let resp = [];
    // useEffect(() => {
    //     console.log('league primera vez: ', onChangeLeague());
    //     getLeague(140);
    // }, [])
    


    

    // const data = getLeague(onChangeLeague());
    const {data = [], hasError, isLoading} = useFetch(`https://v3.football.api-sports.io/standings?league=140&season=2024`);
    // const data = [
    //     {
    //         "league": {
    //             "id": 39,
    //             "name": "Premier League",
    //             "country": "England",
    //             "logo": "https://media.api-sports.io/football/leagues/39.png",
    //             "flag": "https://media.api-sports.io/flags/gb.svg",
    //             "season": 2024,
    //             "standings": [
    //                 [
    //                     {
    //                         "rank": 1,
    //                         "team": {
    //                             "id": 50,
    //                             "name": "Manchester City",
    //                             "logo": "https://media.api-sports.io/football/teams/50.png"
    //                         },
    //                         "points": 6,
    //                         "goalsDiff": 5,
    //                         "group": "Premier League",
    //                         "form": "WW",
    //                         "status": "same",
    //                         "description": "Champions League",
    //                         "all": {
    //                             "played": 2,
    //                             "win": 2,
    //                             "draw": 0,
    //                             "lose": 0,
    //                             "goals": {
    //                                 "for": 6,
    //                                 "against": 1
    //                             }
    //                         },
    //                         "home": {
    //                             "played": 1,
    //                             "win": 1,
    //                             "draw": 0,
    //                             "lose": 0,
    //                             "goals": {
    //                                 "for": 4,
    //                                 "against": 1
    //                             }
    //                         },
    //                         "away": {
    //                             "played": 1,
    //                             "win": 1,
    //                             "draw": 0,
    //                             "lose": 0,
    //                             "goals": {
    //                                 "for": 2,
    //                                 "against": 0
    //                             }
    //                         },
    //                         "update": "2024-08-26T00:00:00+00:00"
    //                     },
    //                     {
    //                         "rank": 2,
    //                         "team": {
    //                             "id": 51,
    //                             "name": "Brighton",
    //                             "logo": "https://media.api-sports.io/football/teams/51.png"
    //                         },
    //                         "points": 6,
    //                         "goalsDiff": 4,
    //                         "group": "Premier League",
    //                         "form": "WW",
    //                         "status": "same",
    //                         "description": "Champions League",
    //                         "all": {
    //                             "played": 2,
    //                             "win": 2,
    //                             "draw": 0,
    //                             "lose": 0,
    //                             "goals": {
    //                                 "for": 5,
    //                                 "against": 1
    //                             }
    //                         },
    //                         "home": {
    //                             "played": 1,
    //                             "win": 1,
    //                             "draw": 0,
    //                             "lose": 0,
    //                             "goals": {
    //                                 "for": 2,
    //                                 "against": 1
    //                             }
    //                         },
    //                         "away": {
    //                             "played": 1,
    //                             "win": 1,
    //                             "draw": 0,
    //                             "lose": 0,
    //                             "goals": {
    //                                 "for": 3,
    //                                 "against": 0
    //                             }
    //                         },
    //                         "update": "2024-08-26T00:00:00+00:00"
    //                     },
    //                     {
    //                         "rank": 3,
    //                         "team": {
    //                             "id": 42,
    //                             "name": "Arsenal",
    //                             "logo": "https://media.api-sports.io/football/teams/42.png"
    //                         },
    //                         "points": 6,
    //                         "goalsDiff": 4,
    //                         "group": "Premier League",
    //                         "form": "WW",
    //                         "status": "same",
    //                         "description": "Champions League",
    //                         "all": {
    //                             "played": 2,
    //                             "win": 2,
    //                             "draw": 0,
    //                             "lose": 0,
    //                             "goals": {
    //                                 "for": 4,
    //                                 "against": 0
    //                             }
    //                         },
    //                         "home": {
    //                             "played": 1,
    //                             "win": 1,
    //                             "draw": 0,
    //                             "lose": 0,
    //                             "goals": {
    //                                 "for": 2,
    //                                 "against": 0
    //                             }
    //                         },
    //                         "away": {
    //                             "played": 1,
    //                             "win": 1,
    //                             "draw": 0,
    //                             "lose": 0,
    //                             "goals": {
    //                                 "for": 2,
    //                                 "against": 0
    //                             }
    //                         },
    //                         "update": "2024-08-26T00:00:00+00:00"
    //                     },
    //                     {
    //                         "rank": 4,
    //                         "team": {
    //                             "id": 40,
    //                             "name": "Liverpool",
    //                             "logo": "https://media.api-sports.io/football/teams/40.png"
    //                         },
    //                         "points": 6,
    //                         "goalsDiff": 4,
    //                         "group": "Premier League",
    //                         "form": "WW",
    //                         "status": "same",
    //                         "description": "Champions League",
    //                         "all": {
    //                             "played": 2,
    //                             "win": 2,
    //                             "draw": 0,
    //                             "lose": 0,
    //                             "goals": {
    //                                 "for": 4,
    //                                 "against": 0
    //                             }
    //                         },
    //                         "home": {
    //                             "played": 1,
    //                             "win": 1,
    //                             "draw": 0,
    //                             "lose": 0,
    //                             "goals": {
    //                                 "for": 2,
    //                                 "against": 0
    //                             }
    //                         },
    //                         "away": {
    //                             "played": 1,
    //                             "win": 1,
    //                             "draw": 0,
    //                             "lose": 0,
    //                             "goals": {
    //                                 "for": 2,
    //                                 "against": 0
    //                             }
    //                         },
    //                         "update": "2024-08-26T00:00:00+00:00"
    //                     },
    //                     {
    //                         "rank": 5,
    //                         "team": {
    //                             "id": 47,
    //                             "name": "Tottenham",
    //                             "logo": "https://media.api-sports.io/football/teams/47.png"
    //                         },
    //                         "points": 4,
    //                         "goalsDiff": 4,
    //                         "group": "Premier League",
    //                         "form": "WD",
    //                         "status": "same",
    //                         "description": "UEFA Europa League",
    //                         "all": {
    //                             "played": 2,
    //                             "win": 1,
    //                             "draw": 1,
    //                             "lose": 0,
    //                             "goals": {
    //                                 "for": 5,
    //                                 "against": 1
    //                             }
    //                         },
    //                         "home": {
    //                             "played": 1,
    //                             "win": 1,
    //                             "draw": 0,
    //                             "lose": 0,
    //                             "goals": {
    //                                 "for": 4,
    //                                 "against": 0
    //                             }
    //                         },
    //                         "away": {
    //                             "played": 1,
    //                             "win": 0,
    //                             "draw": 1,
    //                             "lose": 0,
    //                             "goals": {
    //                                 "for": 1,
    //                                 "against": 1
    //                             }
    //                         },
    //                         "update": "2024-08-26T00:00:00+00:00"
    //                     },
    //                     {
    //                         "rank": 6,
    //                         "team": {
    //                             "id": 34,
    //                             "name": "Newcastle",
    //                             "logo": "https://media.api-sports.io/football/teams/34.png"
    //                         },
    //                         "points": 4,
    //                         "goalsDiff": 1,
    //                         "group": "Premier League",
    //                         "form": "DW",
    //                         "status": "same",
    //                         "description": null,
    //                         "all": {
    //                             "played": 2,
    //                             "win": 1,
    //                             "draw": 1,
    //                             "lose": 0,
    //                             "goals": {
    //                                 "for": 2,
    //                                 "against": 1
    //                             }
    //                         },
    //                         "home": {
    //                             "played": 1,
    //                             "win": 1,
    //                             "draw": 0,
    //                             "lose": 0,
    //                             "goals": {
    //                                 "for": 1,
    //                                 "against": 0
    //                             }
    //                         },
    //                         "away": {
    //                             "played": 1,
    //                             "win": 0,
    //                             "draw": 1,
    //                             "lose": 0,
    //                             "goals": {
    //                                 "for": 1,
    //                                 "against": 1
    //                             }
    //                         },
    //                         "update": "2024-08-26T00:00:00+00:00"
    //                     },
    //                     {
    //                         "rank": 7,
    //                         "team": {
    //                             "id": 65,
    //                             "name": "Nottingham Forest",
    //                             "logo": "https://media.api-sports.io/football/teams/65.png"
    //                         },
    //                         "points": 4,
    //                         "goalsDiff": 1,
    //                         "group": "Premier League",
    //                         "form": "WD",
    //                         "status": "same",
    //                         "description": null,
    //                         "all": {
    //                             "played": 2,
    //                             "win": 1,
    //                             "draw": 1,
    //                             "lose": 0,
    //                             "goals": {
    //                                 "for": 2,
    //                                 "against": 1
    //                             }
    //                         },
    //                         "home": {
    //                             "played": 1,
    //                             "win": 0,
    //                             "draw": 1,
    //                             "lose": 0,
    //                             "goals": {
    //                                 "for": 1,
    //                                 "against": 1
    //                             }
    //                         },
    //                         "away": {
    //                             "played": 1,
    //                             "win": 1,
    //                             "draw": 0,
    //                             "lose": 0,
    //                             "goals": {
    //                                 "for": 1,
    //                                 "against": 0
    //                             }
    //                         },
    //                         "update": "2024-08-26T00:00:00+00:00"
    //                     },
    //                     {
    //                         "rank": 8,
    //                         "team": {
    //                             "id": 49,
    //                             "name": "Chelsea",
    //                             "logo": "https://media.api-sports.io/football/teams/49.png"
    //                         },
    //                         "points": 3,
    //                         "goalsDiff": 2,
    //                         "group": "Premier League",
    //                         "form": "WL",
    //                         "status": "same",
    //                         "description": null,
    //                         "all": {
    //                             "played": 2,
    //                             "win": 1,
    //                             "draw": 0,
    //                             "lose": 1,
    //                             "goals": {
    //                                 "for": 6,
    //                                 "against": 4
    //                             }
    //                         },
    //                         "home": {
    //                             "played": 1,
    //                             "win": 0,
    //                             "draw": 0,
    //                             "lose": 1,
    //                             "goals": {
    //                                 "for": 0,
    //                                 "against": 2
    //                             }
    //                         },
    //                         "away": {
    //                             "played": 1,
    //                             "win": 1,
    //                             "draw": 0,
    //                             "lose": 0,
    //                             "goals": {
    //                                 "for": 6,
    //                                 "against": 2
    //                             }
    //                         },
    //                         "update": "2024-08-26T00:00:00+00:00"
    //                     },
    //                     {
    //                         "rank": 9,
    //                         "team": {
    //                             "id": 48,
    //                             "name": "West Ham",
    //                             "logo": "https://media.api-sports.io/football/teams/48.png"
    //                         },
    //                         "points": 3,
    //                         "goalsDiff": 1,
    //                         "group": "Premier League",
    //                         "form": "WL",
    //                         "status": "same",
    //                         "description": null,
    //                         "all": {
    //                             "played": 2,
    //                             "win": 1,
    //                             "draw": 0,
    //                             "lose": 1,
    //                             "goals": {
    //                                 "for": 3,
    //                                 "against": 2
    //                             }
    //                         },
    //                         "home": {
    //                             "played": 1,
    //                             "win": 0,
    //                             "draw": 0,
    //                             "lose": 1,
    //                             "goals": {
    //                                 "for": 1,
    //                                 "against": 2
    //                             }
    //                         },
    //                         "away": {
    //                             "played": 1,
    //                             "win": 1,
    //                             "draw": 0,
    //                             "lose": 0,
    //                             "goals": {
    //                                 "for": 2,
    //                                 "against": 0
    //                             }
    //                         },
    //                         "update": "2024-08-26T00:00:00+00:00"
    //                     },
    //                     {
    //                         "rank": 10,
    //                         "team": {
    //                             "id": 36,
    //                             "name": "Fulham",
    //                             "logo": "https://media.api-sports.io/football/teams/36.png"
    //                         },
    //                         "points": 3,
    //                         "goalsDiff": 0,
    //                         "group": "Premier League",
    //                         "form": "WL",
    //                         "status": "same",
    //                         "description": null,
    //                         "all": {
    //                             "played": 2,
    //                             "win": 1,
    //                             "draw": 0,
    //                             "lose": 1,
    //                             "goals": {
    //                                 "for": 2,
    //                                 "against": 2
    //                             }
    //                         },
    //                         "home": {
    //                             "played": 1,
    //                             "win": 1,
    //                             "draw": 0,
    //                             "lose": 0,
    //                             "goals": {
    //                                 "for": 2,
    //                                 "against": 1
    //                             }
    //                         },
    //                         "away": {
    //                             "played": 1,
    //                             "win": 0,
    //                             "draw": 0,
    //                             "lose": 1,
    //                             "goals": {
    //                                 "for": 0,
    //                                 "against": 1
    //                             }
    //                         },
    //                         "update": "2024-08-26T00:00:00+00:00"
    //                     },
    //                     {
    //                         "rank": 11,
    //                         "team": {
    //                             "id": 33,
    //                             "name": "Manchester United",
    //                             "logo": "https://media.api-sports.io/football/teams/33.png"
    //                         },
    //                         "points": 3,
    //                         "goalsDiff": 0,
    //                         "group": "Premier League",
    //                         "form": "LW",
    //                         "status": "same",
    //                         "description": null,
    //                         "all": {
    //                             "played": 2,
    //                             "win": 1,
    //                             "draw": 0,
    //                             "lose": 1,
    //                             "goals": {
    //                                 "for": 2,
    //                                 "against": 2
    //                             }
    //                         },
    //                         "home": {
    //                             "played": 1,
    //                             "win": 1,
    //                             "draw": 0,
    //                             "lose": 0,
    //                             "goals": {
    //                                 "for": 1,
    //                                 "against": 0
    //                             }
    //                         },
    //                         "away": {
    //                             "played": 1,
    //                             "win": 0,
    //                             "draw": 0,
    //                             "lose": 1,
    //                             "goals": {
    //                                 "for": 1,
    //                                 "against": 2
    //                             }
    //                         },
    //                         "update": "2024-08-26T00:00:00+00:00"
    //                     },
    //                     {
    //                         "rank": 13,
    //                         "team": {
    //                             "id": 66,
    //                             "name": "Aston Villa",
    //                             "logo": "https://media.api-sports.io/football/teams/66.png"
    //                         },
    //                         "points": 3,
    //                         "goalsDiff": -1,
    //                         "group": "Premier League",
    //                         "form": "LW",
    //                         "status": "same",
    //                         "description": null,
    //                         "all": {
    //                             "played": 2,
    //                             "win": 1,
    //                             "draw": 0,
    //                             "lose": 1,
    //                             "goals": {
    //                                 "for": 2,
    //                                 "against": 3
    //                             }
    //                         },
    //                         "home": {
    //                             "played": 1,
    //                             "win": 0,
    //                             "draw": 0,
    //                             "lose": 1,
    //                             "goals": {
    //                                 "for": 0,
    //                                 "against": 2
    //                             }
    //                         },
    //                         "away": {
    //                             "played": 1,
    //                             "win": 1,
    //                             "draw": 0,
    //                             "lose": 0,
    //                             "goals": {
    //                                 "for": 2,
    //                                 "against": 1
    //                             }
    //                         },
    //                         "update": "2024-08-26T00:00:00+00:00"
    //                     },
    //                     {
    //                         "rank": 13,
    //                         "team": {
    //                             "id": 55,
    //                             "name": "Brentford",
    //                             "logo": "https://media.api-sports.io/football/teams/55.png"
    //                         },
    //                         "points": 3,
    //                         "goalsDiff": -1,
    //                         "group": "Premier League",
    //                         "form": "LW",
    //                         "status": "same",
    //                         "description": null,
    //                         "all": {
    //                             "played": 2,
    //                             "win": 1,
    //                             "draw": 0,
    //                             "lose": 1,
    //                             "goals": {
    //                                 "for": 2,
    //                                 "against": 3
    //                             }
    //                         },
    //                         "home": {
    //                             "played": 1,
    //                             "win": 1,
    //                             "draw": 0,
    //                             "lose": 0,
    //                             "goals": {
    //                                 "for": 2,
    //                                 "against": 1
    //                             }
    //                         },
    //                         "away": {
    //                             "played": 1,
    //                             "win": 0,
    //                             "draw": 0,
    //                             "lose": 1,
    //                             "goals": {
    //                                 "for": 0,
    //                                 "against": 2
    //                             }
    //                         },
    //                         "update": "2024-08-26T00:00:00+00:00"
    //                     },
    //                     {
    //                         "rank": 14,
    //                         "team": {
    //                             "id": 35,
    //                             "name": "Bournemouth",
    //                             "logo": "https://media.api-sports.io/football/teams/35.png"
    //                         },
    //                         "points": 2,
    //                         "goalsDiff": 0,
    //                         "group": "Premier League",
    //                         "form": "DD",
    //                         "status": "same",
    //                         "description": null,
    //                         "all": {
    //                             "played": 2,
    //                             "win": 0,
    //                             "draw": 2,
    //                             "lose": 0,
    //                             "goals": {
    //                                 "for": 2,
    //                                 "against": 2
    //                             }
    //                         },
    //                         "home": {
    //                             "played": 1,
    //                             "win": 0,
    //                             "draw": 1,
    //                             "lose": 0,
    //                             "goals": {
    //                                 "for": 1,
    //                                 "against": 1
    //                             }
    //                         },
    //                         "away": {
    //                             "played": 1,
    //                             "win": 0,
    //                             "draw": 1,
    //                             "lose": 0,
    //                             "goals": {
    //                                 "for": 1,
    //                                 "against": 1
    //                             }
    //                         },
    //                         "update": "2024-08-26T00:00:00+00:00"
    //                     },
    //                     {
    //                         "rank": 15,
    //                         "team": {
    //                             "id": 46,
    //                             "name": "Leicester",
    //                             "logo": "https://media.api-sports.io/football/teams/46.png"
    //                         },
    //                         "points": 1,
    //                         "goalsDiff": -1,
    //                         "group": "Premier League",
    //                         "form": "LD",
    //                         "status": "same",
    //                         "description": null,
    //                         "all": {
    //                             "played": 2,
    //                             "win": 0,
    //                             "draw": 1,
    //                             "lose": 1,
    //                             "goals": {
    //                                 "for": 2,
    //                                 "against": 3
    //                             }
    //                         },
    //                         "home": {
    //                             "played": 1,
    //                             "win": 0,
    //                             "draw": 1,
    //                             "lose": 0,
    //                             "goals": {
    //                                 "for": 1,
    //                                 "against": 1
    //                             }
    //                         },
    //                         "away": {
    //                             "played": 1,
    //                             "win": 0,
    //                             "draw": 0,
    //                             "lose": 1,
    //                             "goals": {
    //                                 "for": 1,
    //                                 "against": 2
    //                             }
    //                         },
    //                         "update": "2024-08-26T00:00:00+00:00"
    //                     },
    //                     {
    //                         "rank": 16,
    //                         "team": {
    //                             "id": 41,
    //                             "name": "Southampton",
    //                             "logo": "https://media.api-sports.io/football/teams/41.png"
    //                         },
    //                         "points": 0,
    //                         "goalsDiff": -2,
    //                         "group": "Premier League",
    //                         "form": "LL",
    //                         "status": "same",
    //                         "description": null,
    //                         "all": {
    //                             "played": 2,
    //                             "win": 0,
    //                             "draw": 0,
    //                             "lose": 2,
    //                             "goals": {
    //                                 "for": 0,
    //                                 "against": 2
    //                             }
    //                         },
    //                         "home": {
    //                             "played": 1,
    //                             "win": 0,
    //                             "draw": 0,
    //                             "lose": 1,
    //                             "goals": {
    //                                 "for": 0,
    //                                 "against": 1
    //                             }
    //                         },
    //                         "away": {
    //                             "played": 1,
    //                             "win": 0,
    //                             "draw": 0,
    //                             "lose": 1,
    //                             "goals": {
    //                                 "for": 0,
    //                                 "against": 1
    //                             }
    //                         },
    //                         "update": "2024-08-26T00:00:00+00:00"
    //                     },
    //                     {
    //                         "rank": 17,
    //                         "team": {
    //                             "id": 52,
    //                             "name": "Crystal Palace",
    //                             "logo": "https://media.api-sports.io/football/teams/52.png"
    //                         },
    //                         "points": 0,
    //                         "goalsDiff": -3,
    //                         "group": "Premier League",
    //                         "form": "LL",
    //                         "status": "same",
    //                         "description": null,
    //                         "all": {
    //                             "played": 2,
    //                             "win": 0,
    //                             "draw": 0,
    //                             "lose": 2,
    //                             "goals": {
    //                                 "for": 1,
    //                                 "against": 4
    //                             }
    //                         },
    //                         "home": {
    //                             "played": 1,
    //                             "win": 0,
    //                             "draw": 0,
    //                             "lose": 1,
    //                             "goals": {
    //                                 "for": 0,
    //                                 "against": 2
    //                             }
    //                         },
    //                         "away": {
    //                             "played": 1,
    //                             "win": 0,
    //                             "draw": 0,
    //                             "lose": 1,
    //                             "goals": {
    //                                 "for": 1,
    //                                 "against": 2
    //                             }
    //                         },
    //                         "update": "2024-08-26T00:00:00+00:00"
    //                     },
    //                     {
    //                         "rank": 18,
    //                         "team": {
    //                             "id": 57,
    //                             "name": "Ipswich",
    //                             "logo": "https://media.api-sports.io/football/teams/57.png"
    //                         },
    //                         "points": 0,
    //                         "goalsDiff": -5,
    //                         "group": "Premier League",
    //                         "form": "LL",
    //                         "status": "same",
    //                         "description": "Relegation",
    //                         "all": {
    //                             "played": 2,
    //                             "win": 0,
    //                             "draw": 0,
    //                             "lose": 2,
    //                             "goals": {
    //                                 "for": 1,
    //                                 "against": 6
    //                             }
    //                         },
    //                         "home": {
    //                             "played": 1,
    //                             "win": 0,
    //                             "draw": 0,
    //                             "lose": 1,
    //                             "goals": {
    //                                 "for": 0,
    //                                 "against": 2
    //                             }
    //                         },
    //                         "away": {
    //                             "played": 1,
    //                             "win": 0,
    //                             "draw": 0,
    //                             "lose": 1,
    //                             "goals": {
    //                                 "for": 1,
    //                                 "against": 4
    //                             }
    //                         },
    //                         "update": "2024-08-26T00:00:00+00:00"
    //                     },
    //                     {
    //                         "rank": 19,
    //                         "team": {
    //                             "id": 39,
    //                             "name": "Wolves",
    //                             "logo": "https://media.api-sports.io/football/teams/39.png"
    //                         },
    //                         "points": 0,
    //                         "goalsDiff": -6,
    //                         "group": "Premier League",
    //                         "form": "LL",
    //                         "status": "same",
    //                         "description": "Relegation",
    //                         "all": {
    //                             "played": 2,
    //                             "win": 0,
    //                             "draw": 0,
    //                             "lose": 2,
    //                             "goals": {
    //                                 "for": 2,
    //                                 "against": 8
    //                             }
    //                         },
    //                         "home": {
    //                             "played": 1,
    //                             "win": 0,
    //                             "draw": 0,
    //                             "lose": 1,
    //                             "goals": {
    //                                 "for": 2,
    //                                 "against": 6
    //                             }
    //                         },
    //                         "away": {
    //                             "played": 1,
    //                             "win": 0,
    //                             "draw": 0,
    //                             "lose": 1,
    //                             "goals": {
    //                                 "for": 0,
    //                                 "against": 2
    //                             }
    //                         },
    //                         "update": "2024-08-26T00:00:00+00:00"
    //                     },
    //                     {
    //                         "rank": 20,
    //                         "team": {
    //                             "id": 45,
    //                             "name": "Everton",
    //                             "logo": "https://media.api-sports.io/football/teams/45.png"
    //                         },
    //                         "points": 0,
    //                         "goalsDiff": -7,
    //                         "group": "Premier League",
    //                         "form": "LL",
    //                         "status": "same",
    //                         "description": "Relegation",
    //                         "all": {
    //                             "played": 2,
    //                             "win": 0,
    //                             "draw": 0,
    //                             "lose": 2,
    //                             "goals": {
    //                                 "for": 0,
    //                                 "against": 7
    //                             }
    //                         },
    //                         "home": {
    //                             "played": 1,
    //                             "win": 0,
    //                             "draw": 0,
    //                             "lose": 1,
    //                             "goals": {
    //                                 "for": 0,
    //                                 "against": 3
    //                             }
    //                         },
    //                         "away": {
    //                             "played": 1,
    //                             "win": 0,
    //                             "draw": 0,
    //                             "lose": 1,
    //                             "goals": {
    //                                 "for": 0,
    //                                 "against": 4
    //                             }
    //                         },
    //                         "update": "2024-08-26T00:00:00+00:00"
    //                     }
    //                 ]
    //             ]
    //         }
    //     }
    // ];



    return (
        <>
            <h1>Clasificación de: </h1>

            {
                data.map(league => (
                    <div key={league.league.id}>
                        <table className="fd-table">
                            <caption className="fd-table__caption">
                                <span className="fd-table__caption-flag"><img src={league.league.flag} alt={league.league.name}/></span>
                                <span>{league.league.name} </span>
                                <span>(ID: {league.league.id})</span>
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
                                            <tr className="fd-table__row" key={index}>
                                                <td className="fd-table__col">
                                                    <div className="fd-table__col-int">
                                                        <span className="fd-table__team-rank">{team.rank} </span> 
                                                        <span className="fd-table__team-logo"><img className="fd-table__logo-team" src={team.team.logo} alt={team.team.name}/></span> 
                                                        <span className="fd-table__team-name">{team.team.name}</span>
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
                            <li className="fd-table__zone-top-1">
                                <span>Europa League</span>
                            </li>
                            <li className="fd-table__zone-top-1">
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
