const UpperCaseFirstWord = (word) => {
      return word
        .trim().charAt(0).toUpperCase() + word.trim().slice(1).toLowerCase()
        .replace(/\s+/g, "")
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