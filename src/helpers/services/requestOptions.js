export const requestOptions = {
    method: 'GET',
    headers: {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": import.meta.env.VITE_FOOTBALL_API_KEY
    },
    redirect: 'follow'
};