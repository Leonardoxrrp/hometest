# Home test

- This a CRUD implementation of a sports game
- The different functions are exported as modules and can be imported and re-used.
- There is no UI implementation for this code

## How to test
- Make sure to install dependencies by executing on the terminal ```npm install```
- You can then run the script ```npm test```


## In game.js you can find:
### ```startGame()```
### ```removeGame()```
### ```updateScore()```
### ```getSummary()```

- Every function has its own unit tests in ```game.test.js```
- Functions may have helper functions coming from ```utils.js```
- Error handling is taking into account on different cases
- There is no async calls in this CRUD implementation

## Helper functions
### ```UpperCaseFirstWord()```
### ```onError()```

- ```UpperCaseFirstWord()``` takes care of the uppercase format but also removes white spaces
- ```onError()``` takes care of the different errors than can occur due to invalid props or existing games in the games object

## In-memory solution
### ```let games = {}```

- All games are stored in the variable ```games```
- All CRUD operations use the ```games``` object
