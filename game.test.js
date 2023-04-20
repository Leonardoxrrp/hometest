const { startGame, removeGame, updateScore, resetGames } = require("./game.js");

beforeEach(() => {
    resetGames();
});

describe("startGame", () => {
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

describe("updateScore", () => {
    test("Should update a game", () => {
        startGame("Canada", "Peru")
        const updated = updateScore("Canada", "Peru", 10, 20)
        expect(updated.home).toEqual(10)
        expect(updated.away).toEqual(20)
    })
    test("Should not update an unexisting game", () => {
        startGame("Mexico", "Argentina")
        expect(() => updateScore("Peru", "Venezuela")).toThrowError("Cannot update an unexisting game")
    })
    test("Should uppercase the first letter only", () => {
        startGame("meXiCO", "arGENtINA")
        games = updateScore("meXiCO", "arGENtINA")
        expect(games.game).toEqual("Mexico-Argentina")
    })
    test("Should remove trailing whitespace", () => {
        startGame("  Mexico   ", "  Argentina  ")
        games = updateScore("  Mexico   ", "  Argentina  ")
        expect(games.game).toEqual("Mexico-Argentina")
    })
    test("Should remove whitespace in between words", () => {
        startGame("M ex ic o", "A r   gen tina")
        games = updateScore("M ex ic o", "A r   gen tina")
        expect(games.game).toEqual("Mexico-Argentina")
    })
    test("Should throw error if no homeTeam is specified", () => {
        startGame("Canada", "Peru")
        expect(() => updateScore(undefined, "Peru")).toThrowError("Both home and away teams must be specified")
    })
    test("Should throw error if no awayTeam is specified", () => {
        startGame("Canada", "Peru")
        expect(() => updateScore("Peru", undefined)).toThrowError("Both home and away teams must be specified")
    })
})