export const getLeague = async(leagueID) => {
    const apiKey = import.meta.env.VITE_FOOTBALL_API_KEY;

    const requestOptions = {
        method: 'GET',
        headers: {
            "x-rapidapi-host": "v3.football.api-sports.io",
            "x-rapidapi-key": apiKey
        },
        redirect: 'follow'
    };
    const url = `https://v3.football.api-sports.io/standings?league=${leagueID}&season=2024`;
    // const url = `https://v3.football.api-sports.io/standings?league=39&season=2024`;
 await fetch(url, requestOptions)
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        return data;
    })
    .catch(console.error);
 
}