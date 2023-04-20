const { startGame, resetGames } = require("./game.js");

describe("startGame", () => {
    beforeEach(() => {
        resetGames();
    });
  
    test("Should add a game", () => {
        games = startGame("Mexico", "Argentina")
        expect(games.game).toEqual("Mexico-Argentina")
    })
    test("Should uppercase the first letter only", () => {
        games = startGame("meXiCO", "arGENtINA")
        expect(games.game).toEqual("Mexico-Argentina")
    })
    test("Should have score 0-0", () => {
        games = startGame("Mexico", "Argentina")
        expect(games.home).toEqual(0)
        expect(games.away).toEqual(0)
    })
    test("Should throw error if no homeTeam is specified", () => {
        expect(() => startGame(undefined, "Argentina")).toThrowError("Both home and away teams must be specified")
    })
    test("Should throw error if no awayTeam is specified", () => {
        expect(() => startGame("Mexico", undefined)).toThrowError("Both home and away teams must be specified")
    })
    test("Should throw error if game already exists", () => {
        expect(() => startGame("Mexico", "Argentina")).not.toThrowError()
        expect(() => startGame("Mexico", "Argentina")).toThrowError("Game already exists")
    })
})
