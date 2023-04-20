const { onError, UpperCaseFirstWord } = require("./utils");

let games = {}

// Empty games object
const resetGames = () => {
  games = {}
}

// Define a function to start a game
const startGame = (homeTeam, awayTeam) => {
  onError({homeTeam, awayTeam, games, newGame: true })
  return games[`${UpperCaseFirstWord(homeTeam)}${UpperCaseFirstWord(awayTeam)}`] = {
    game: `${UpperCaseFirstWord(homeTeam)}-${UpperCaseFirstWord(awayTeam)}`,
    home: 0,
    away: 0,
    index: Object.keys(games).length
  }
}

// Define a function to remove a game
const removeGame = (homeTeam, awayTeam) => {
  onError({ homeTeam, awayTeam })
  return delete games[`${UpperCaseFirstWord(homeTeam)}${UpperCaseFirstWord(awayTeam)}`]
}

// Define a function to update a game
const updateScore = (homeTeam, awayTeam, homeScore, awayScore) => {
  onError({ homeTeam, awayTeam });
  const game = `${UpperCaseFirstWord(homeTeam)}${UpperCaseFirstWord(awayTeam)}`
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

// Define a function to get the summary of games by most recently added
const getSummary = () => {
  if (Object.keys(games).length === 0) {
    return null;
  }
  const sortedKeys = Object.keys(games).sort((a, b) => {
     return games[a].index - games[b].index;
});
const sortedGames = [];
  sortedKeys.forEach(key => {
    const [homeTeam, awayTeam] = games[key].game.split('-')
    const homeScore = games[key].home
    const awayScore = games[key].away
    sortedGames.push(`${homeTeam} ${homeScore} - ${awayTeam} ${awayScore}`)
});
return sortedGames;
}

module.exports = {
  startGame,
  resetGames,
  removeGame,
  updateScore,
  getSummary,
}