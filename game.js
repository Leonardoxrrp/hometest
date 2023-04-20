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

// Define a function to update a game
const updateScore = (homeTeam, awayTeam, homeScore, awayScore) => {
  onError({ homeTeam, awayTeam });
  const game = `${UpperCaseFirstWord(homeTeam)}-${UpperCaseFirstWord(awayTeam)}`
  if(games[game]) {
    games[game] = {
      ...games[game],
      home: homeScore,
      away: awayScore,
    }
    return games[game]
  } else {
    throw new Error("Cannot update an unexisting game");
  }
}

module.exports = {
  startGame,
  resetGames,
  removeGame,
  updateScore,
}