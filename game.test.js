const { startGame, removeGame, resetGames } = require("./game.js");

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
    test("Should remove trailing whitespace", () => {
        games = startGame("  Mexico   ", "  Argentina  ")
        expect(games.game).toEqual("Mexico-Argentina")
    })
    test("Should remove whitespace in between words", () => {
        games = startGame("M ex ic o", "A r   gen tina")
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

describe("removeGame", () => {
    beforeEach(() => {
        resetGames();
    });
    test("Should remove a game", () => {
        games = startGame("Canada", "Peru")
        expect(games.game).toEqual("Canada-Peru")
        expect(() => removeGame("Canada", "Peru")).toBeTruthy()
    })
    test("Should uppercase the first letter only", () => {
        startGame("Canada", "Peru")
        expect(() => removeGame("CANADA", "PERU")).toBeTruthy()
    })
    test("Should remove trailing whitespace", () => {
        startGame("  Canada   ", "  Peru  ")
        expect(() => removeGame("Canada", "Peru")).toBeTruthy()
    })
    test("Should remove whitespace in between words", () => {
        startGame("Ca na d a", "Per u")
        expect(() => removeGame("Canada", "Peru")).toBeTruthy()
    })
    test("Should throw error if no homeTeam is specified", () => {
        startGame("Canada", "Peru")
        expect(() => removeGame(undefined, "Peru")).toThrowError("Both home and away teams must be specified")
    })
    test("Should throw error if no awayTeam is specified", () => {
        startGame("Canada", "Peru")
        expect(() => removeGame("Peru", undefined)).toThrowError("Both home and away teams must be specified")
    })
})
