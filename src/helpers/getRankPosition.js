export const getRankPosition = (team) => {
    switch (team.description) {
        case 'Champions League':
            return 'champions'
        case 'UEFA Europa League':
            return 'uefa'
        case 'Conference League Qualification':
            return 'conference'
        case 'Relegation':
            return 'relegation'
        default:
            return ''
    }
}
