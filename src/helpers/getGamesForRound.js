import dayjs from "dayjs";
import minMax from "dayjs/plugin/minMax";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import { getRound } from "./getRound";
dayjs.extend(minMax);
dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);

export const getGamesForRound = (data) => {
    let gamesForRound = [];

    getRound(data).map((round, index) => {
        gamesForRound.push({
            round: round,
            dates: [],
            datesShort: [],
            finalDate: '',
            roundNumber: parseInt(round.split("-")[1]),
            games: []
        });
        data.map((game) => {
            if (game.league.round === round) {
                gamesForRound[index].games.push(game);
                gamesForRound[index].dates.push(dayjs(game.fixture.date));
                gamesForRound[index].datesShort.push(dayjs(game.fixture.date).format('DD/MM/YYYY'));
            }
        });

        let firstDate = dayjs.min(...gamesForRound[index].dates).format('DD');
        let lastDate = dayjs.max(...gamesForRound[index].dates).format('DD');
        let firstMonth = dayjs.min(...gamesForRound[index].dates).format('MMMM');
        let lastMonth = dayjs.max(...gamesForRound[index].dates).format('MMMM');

        gamesForRound[index].finalDate = `${firstDate} ${firstMonth === lastMonth ? '' : firstMonth} - ${lastDate} ${lastMonth} `;
        gamesForRound[index].games = gamesForRound[index].games.sort((a, b) => dayjs(a.fixture.date).isSameOrAfter(dayjs(b.fixture.date)) ? 1 : -1);

    });
    
    return gamesForRound;
}