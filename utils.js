const UpperCaseFirstWord = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  }
  
const onError = ({homeTeam, awayTeam, games, newGame }) => {
    if (!homeTeam || !awayTeam) {
      throw new Error("Both home and away teams must be specified");
    }
    if (homeTeam === awayTeam) {
      throw new Error("Home and away teams cannot be the same");
    }
     if (newGame && `${homeTeam}-${awayTeam}` in games) {
      throw new Error("Game already exists");
    }
}

module.exports = {
    onError,
    UpperCaseFirstWord,
}