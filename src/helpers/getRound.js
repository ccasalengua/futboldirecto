export const getRound = (data) => {
    let roundsArray = [];
    data.map((round) => {
        
        if (!roundsArray.includes(round.league.round)) {
            roundsArray = [...roundsArray, round.league.round];
        }
    });
    return roundsArray;
}