const { onError, UpperCaseFirstWord } = require("./utils");

let games = {}

// Empty games object
const resetGames = () => {
  games = {}
}

// Define a function to start a game
const startGame = (homeTeam, awayTeam) => {
  onError({homeTeam, awayTeam, games, newGame: true })
  const game = `${UpperCaseFirstWord(homeTeam)}-${UpperCaseFirstWord(awayTeam)}`
  return games[game] = {
    game,
    home: 0,
    away: 0,
    index: Object.keys(games).length
  }
}

// Define a function to remove a game
const removeGame = (homeTeam, awayTeam) => {
  onError({ homeTeam, awayTeam })
  return delete games[`${UpperCaseFirstWord(homeTeam)}-${UpperCaseFirstWord(awayTeam)}`]
}

module.exports = {
  startGame,
  resetGames,
  removeGame,
}