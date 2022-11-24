// Part ONE
// Declaring each variable using the id of each of the boxes in the TicTacToe(TTT) grid
var one = document.querySelector('#one')
var two = document.querySelector('#two')
var three = document.querySelector('#three')
var four = document.querySelector('#four')
var five = document.querySelector('#five')
var six = document.querySelector('#six')
var seven = document.querySelector('#seven')
var eight = document.querySelector('#eight')
var nine = document.querySelector('#nine')

// Test if each one is being queried properly by console.logging
// console.log(one)
// => <div id="one">1</div>
// It's communicating properly and returning the correct grid.


// Part TWO
// The game is running based on a for loop where the maximum number of turns is 9. 
// The first turn also starts at 1
// PlayerOne turn will always be odd, PlayerTwo always even. We will use the modulus operator and 'if' statements to establish this
// Player variables will need to be declared first. Their values will initially be null as game has not started. 
// To see if the code is working, we will just print the turn number for now.

// for (var turn = 1; turn < 10; turn++) {
//     if (turn % 2 === 0) {
//         console.log(turn)
//     } else {
//         console.log(turn)
//     }
// }
// The console has printed the turn numbers from 1 to 9 in order. So we know this is working fine. Now we can replace the turns with "X" and "O"

// for (var turn = 1; turn < 10; turn++) {
//     if (turn % 2 === 0) {
//         console.log("O")
//     } else {
//         console.log("X")
//     }
// }


// Part THREE
// Now we need to create the event listener that will listen for a click by the user. For now, there will not be two players and we will just test that the click works first.
// Event.target will be used as we won't know what exactly the user will click on.
// First, the parent of the grid will be declared
// var parent = document.querySelector('.grid-box')
// Now to add the event listener to the parent and delcare a new individual grid variable as event target. 

// parent.addEventListener('click', function (event) {
//     var indGrid = event.target
//     indGrid.style.background = 'red'
// })

// I have put the background to change to red as a test. What I have found was since I have restricted the width of the entire gridbox in the CSS, there is not extra space around teh gridbox that the user could mistakenly click on which would in turn colour the whole gridbox at once. 
// The numbers in the grid will be removed. What we want is to replace the empty "" with "X". 
// print a grid in the console to see if it recognises the box content as "". 
// one.textContent
// => ''
// Now instead of changing the box background to red, we will replace the empty textContent from '' to 'X'. 

// parent.addEventListener('click', function (event) {
//     var indGrid = event.target
//     indGrid.textContent = 'X'
// })

// It actually does not require it to be replaced, it can be added immediately.


// Part FOUR
// We will now wrap the 'for' loop (from part TWO) with the event listener. 
// If it is playerOne's turn, it should change the textContent to "X", and "O" for playerTwo

// parent.addEventListener('click', function (event) {
//     var indGrid = event.target
//     for (let turn = 1; turn < 10; turn++) {
//         if (turn % 2 === 0) {
//             indGrid.textContent = 'O'
//         } else {
//             indGrid.textContent = 'X'
//         }
//     }
// })

// This is not working. It is just changing the content to "X". Let's try simplifying it and let it consolelog "one" and "two" on the click

// parent.addEventListener('click', function (event) {
//     var indGrid = event.target
//     for (let turn = 1; turn < 10; turn++) {
//         if (turn % 2 === 0) {
//             console.log('two')
//         } else {
//             console.log('one')
//         }
//     }
// })

// The browser console is logging correctly. However, I realised that based on what I have programmed, there is only one click and the loop is running 9 times. The console.log is returning one,two,one,two etc
// I will need to test this without the loop. 
// The turn variable will need to be declared at the start
// console log each turn to make sure it is running in order
// The turn should increase by 1 at the end of each click

// var turn = 1
// parent.addEventListener('click', function (event) {
//     var indGrid = event.target
//     console.log(turn)
//     if (turn % 2 === 0) {
//         indGrid.textContent = 'O'
//     } else {
//         indGrid.textContent = 'X'
//     }
//     turn = turn + 1
// })

// The code works in alternating the "X" and "O". However there are a few evident problems:
// 1. The user can click on the same grid twice, and it will change the symbol. We will need to prevent it from changing once it's been changed already.
//      - Can try changing the classList instead of textContent. 
//      - Initial classList will be "empty". 
//      - Once the user has clicked on a specific grid, the classList should replace to either "SymOne" or "SymTwo"
//      - New CSS style will need to be created. Let's put a simple background color change first to make any changes obvious
//      - The 'if' statement should have an && to specify to only change only if even/odd AND the classList is "empty"
// 2. The game still needs to stop after the 9 turns have been completed. 

// Check browser console:
// one.classList
// => DOMTokenList [value: 'empty']

// var turn = 1
// parent.addEventListener('click', function (event) {
//     var indGrid = event.target
//     console.log(turn)
//     if (turn % 2 === 0 && indGrid.classList[0] === 'empty') {
//         indGrid.classList.replace('empty', 'symTwo')
//         indGrid.textContent = 'O'
//     } else if (turn % 2 !== 0 && indGrid.classList[0] === 'empty') {
//         indGrid.classList.replace('empty', 'symOne')
//         indGrid.textContent = 'X'
//     }
//     turn = turn + 1
// })

// This fixes the problem where the textContent is replaced each time it is clicked. The classList is also replaced as seen in the browser console. 
// The next problem is the turn counter increases even if the user clicks on the same grid multiple times. To fix this, we will need to put the (turn = turn + 1) at the end of the if/else if statements

// var turn = 1
// parent.addEventListener('click', function (event) {
//     var indGrid = event.target
//     console.log(turn)
//     if (turn % 2 === 0 && indGrid.classList[0] === 'empty') {
//         indGrid.classList.replace('empty', 'symTwo')
//         indGrid.textContent = 'O'
//         turn = turn + 1
//     } else if (turn % 2 !== 0 && indGrid.classList[0] === 'empty') {
//         indGrid.classList.replace('empty', 'symOne')
//         indGrid.textContent = 'X'
//         turn = turn + 1
//     }
// })

// This solves the doubling up effect problem. The only outstanding problem thus far is to end the game as soon as all the grids are NOT empty.
// The turn number will not go above 10, as our defined "if" statement prevents any additional clicks after all boxes are filled to run the code and thereby increasing the turn number by 1. 
// During the very last turn, the turn will increase to 10 as that is part of the actions of the "if" statement. Once it reaches 10, there should be a message that says game over. When TTT games reach the last turn, it is a draw so the message will reflect this.

// var turn = 1
// parent.addEventListener('click', function (event) {
//     var indGrid = event.target
//     console.log(turn)
//     if (turn % 2 === 0 && indGrid.classList[0] === 'empty') {
//         indGrid.classList.replace('empty', 'symTwo')
//         indGrid.textContent = 'O'
//         turn = turn + 1
//     } else if (turn % 2 !== 0 && indGrid.classList[0] === 'empty') {
//         indGrid.classList.replace('empty', 'symOne')
//         indGrid.textContent = 'X'
//         turn = turn + 1
//     }
//     if (turn === 10) {
//         console.log('gameover')
//     }
// })

// Let's declare a new variable for the message: 
// var endGame = document.querySelector('#end-message')
// console.log(endGame)


// var turn = 1
// parent.addEventListener('click', function (event) {
//     var indGrid = event.target
//     console.log(turn)
//     if (turn % 2 === 0 && indGrid.classList[0] === 'empty') {
//         indGrid.classList.replace('empty', 'symTwo')
//         indGrid.textContent = 'O'
//         turn = turn + 1
//     } else if (turn % 2 !== 0 && indGrid.classList[0] === 'empty') {
//         indGrid.classList.replace('empty', 'symOne')
//         indGrid.textContent = 'X'
//         turn = turn + 1
//     }
//     if (turn === 10) {
//         endGame.textContent = "It's a Draw. Good Game, Well Played!"
//     }
// })
// Now that this works, the next step will be to design the winning conditions


// Part FIVE
// The winning scenarios are when there are 3 of the same symbol in a line:
// 1. (1,2,3)
// 2. (4,5,6)
// 3. (7,8,9)
// 4. (1,4,7)
// 5. (2,5,8)
// 6. (3,6,9)
// 7. (1,5,9)
// 8. (3,5,7) 

// Creating 'if' statement to check for the winning condition and adding it to the event listener:
// var turn = 1
// parent.addEventListener('click', function (event) {
//     var indGrid = event.target
//     console.log(turn)
//     if (turn % 2 === 0 && indGrid.classList[0] === 'empty') {
//         indGrid.classList.replace('empty', 'symTwo')
//         indGrid.textContent = 'O'
//         turn = turn + 1
//     } else if (turn % 2 !== 0 && indGrid.classList[0] === 'empty') {
//         indGrid.classList.replace('empty', 'symOne')
//         indGrid.textContent = 'X'
//         turn = turn + 1
//     }
//     if (turn === 10) {
//         endGame.classList.replace('before-game', 'after-game')
//         endGame.textContent = "It's a Draw. Good Game, Well Played!"
//     }
//     if (one.classList[0] === 'symOne' && two.classList[0] === 'symOne' && three.classList[0] === 'symOne') {
//         endGame.classList.replace('before-game', 'after-game')
//         endGame.textContent = "Player One won!"
//     } else if (four.classList[0] === 'symOne' && five.classList[0] === 'symOne' && six.classList[0] === 'symOne') {
//         endGame.classList.replace('before-game', 'after-game')
//         endGame.textContent = "Player One won!"
//     } else if (seven.classList[0] === 'symOne' && eight.classList[0] === 'symOne' && nine.classList[0] === 'symOne') {
//         endGame.classList.replace('before-game', 'after-game')
//         endGame.textContent = "Player One won!"
//     } else if (one.classList[0] === 'symOne' && four.classList[0] === 'symOne' && seven.classList[0] === 'symOne') {
//         endGame.classList.replace('before-game', 'after-game')
//         endGame.textContent = "Player One won!"
//     } else if (two.classList[0] === 'symOne' && five.classList[0] === 'symOne' && eight.classList[0] === 'symOne') {
//         endGame.classList.replace('before-game', 'after-game')
//         endGame.textContent = "Player One won!"
//     } else if (three.classList[0] === 'symOne' && six.classList[0] === 'symOne' && nine.classList[0] === 'symOne') {
//         endGame.classList.replace('before-game', 'after-game')
//         endGame.textContent = "Player One won!"
//     } else if (one.classList[0] === 'symOne' && five.classList[0] === 'symOne' && nine.classList[0] === 'symOne') {
//         endGame.classList.replace('before-game', 'after-game')
//         endGame.textContent = "Player One won!"
//     } else if (three.classList[0] === 'symOne' && five.classList[0] === 'symOne' && seven.classList[0] === 'symOne') {
//         endGame.classList.replace('before-game', 'after-game')
//         endGame.textContent = "Player One won!"
//     }
//     if (one.classList[0] === 'symTwo' && two.classList[0] === 'symTwo' && three.classList[0] === 'symTwo') {
//         endGame.classList.replace('before-game', 'after-game')
//         endGame.textContent = "Player Two won!"
//     } else if (four.classList[0] === 'symTwo' && five.classList[0] === 'symTwo' && six.classList[0] === 'symTwo') {
//         endGame.classList.replace('before-game', 'after-game')
//         endGame.textContent = "Player Two won!"
//     } else if (seven.classList[0] === 'symTwo' && eight.classList[0] === 'symTwo' && nine.classList[0] === 'symTwo') {
//         endGame.classList.replace('before-game', 'after-game')
//         endGame.textContent = "Player Two won!"
//     } else if (one.classList[0] === 'symTwo' && four.classList[0] === 'symTwo' && seven.classList[0] === 'symTwo') {
//         endGame.classList.replace('before-game', 'after-game')
//         endGame.textContent = "Player Two won!"
//     } else if (two.classList[0] === 'symTwo' && five.classList[0] === 'symTwo' && eight.classList[0] === 'symTwo') {
//         endGame.classList.replace('before-game', 'after-game')
//         endGame.textContent = "Player Two won!"
//     } else if (three.classList[0] === 'symTwo' && six.classList[0] === 'symTwo' && nine.classList[0] === 'symTwo') {
//         endGame.classList.replace('before-game', 'after-game')
//         endGame.textContent = "Player Two won!"
//     } else if (one.classList[0] === 'symTwo' && five.classList[0] === 'symTwo' && nine.classList[0] === 'symTwo') {
//         endGame.classList.replace('before-game', 'after-game')
//         endGame.textContent = "Player Two won!"
//     } else if (three.classList[0] === 'symTwo' && five.classList[0] === 'symTwo' && seven.classList[0] === 'symTwo') {
//         endGame.classList.replace('before-game', 'after-game')
//         endGame.textContent = "Player Two won!"
//     }
// })

//  Winning condition is working. However there are a few problems:
//  1. There is major repetition and a function would be best to decrease the size of code required.
//  2. Users are able to click on grids and activate them after the winner has been announced. 
//  3. Message to users the game has finished if they keep clicking on the grids after the game finished. 
//  4. Add New Game button. The grid and messages need to reset. Only reveal new game button after a winner has been declared. No cheating by resetting before game finish
//  5. Add a tally win score for both players. These will not be reset upon clicking new game. 

var turn = 1
var gameFinish = 0
var parent = document.querySelector('.grid-box')
var endGame = document.querySelector('#end-message')
var stopClicking = document.querySelector('#stop-clicking')
var playOneWins = document.querySelector('.play-one-wins')
var playTwoWins = document.querySelector('.play-two-wins')
var newGameButton = document.querySelector('.button')
var oneTurn = document.querySelector('#oneTurn')
newGameButton.style.display = 'none'
oneTurn.style.fontSize = '8rem'
oneTurn.style.color = '#002D69'

parent.addEventListener('click', function (event) {
    var indGrid = event.target
    console.log(turn)
    if (turn % 2 === 0 && indGrid.classList[0] === 'empty' && gameFinish === 0) {
        oneTurn.style.fontSize = '8rem'
        oneTurn.style.color = '#002D69'
        twoTurn.style.fontSize = '5rem'
        twoTurn.style.color = 'black'
        indGrid.classList.replace('empty', 'symTwo')
        indGrid.textContent = 'O'
        turn = turn + 1
    } else if (turn % 2 !== 0 && indGrid.classList[0] === 'empty' && gameFinish === 0) {
        oneTurn.style.fontSize = '5rem'
        oneTurn.style.color = 'black'
        twoTurn.style.fontSize = '8rem'
        twoTurn.style.color = '#002D69'
        indGrid.classList.replace('empty', 'symOne')
        indGrid.textContent = 'X'
        turn = turn + 1
    }
    if (turn === 10) {
        endGame.classList.replace('before-game', 'after-game')
        endGame.textContent = "It's a Draw. Good Game, Well Played!"
        newGameButton.style.display = 'block'
        oneTurn.style.fontSize = '5rem'
        oneTurn.style.color = 'black'
        twoTurn.style.fontSize = '5rem'
        twoTurn.style.color = 'black'
    }
    if (gameFinish === 1) {
        stopClicking.classList.add('animate__animated', 'animate__shakeX')
        stopClicking.textContent = "Stop Clicking! The game is over."
    }
    function checkWin(id1, id2, id3, class1, class2) {
        if (id1.classList[0] === class1 && id2.classList[0] === class1 && id3.classList[0] === class1) {
            twoTurn.style.fontSize = '5rem'
            twoTurn.style.color = 'black'
            oneTurn.style.fontSize = '8rem'
            oneTurn.style.color = 'rgb(10, 119, 10)'
            endGame.textContent = "Player One won!"
            gameFinish = 1
            playOneWins.textContent = Number(playOneWins.textContent) + 1
            newGameButton.style.display = 'block'
        } else if (id1.classList[0] === class2 && id2.classList[0] === class2 && id3.classList[0] === class2) {
            oneTurn.style.fontSize = '5rem'
            oneTurn.style.color = 'black'
            twoTurn.style.fontSize = '8rem'
            twoTurn.style.color = 'rgb(10, 119, 10)'
            endGame.textContent = "Player Two won!"
            gameFinish = 1
            playTwoWins.textContent = Number(playTwoWins.textContent) + 1
            newGameButton.style.display = 'block'
        }
    }
    if (gameFinish === 0) {
        checkWin(one, two, three, 'symOne', 'symTwo')
        checkWin(four, five, six, 'symOne', 'symTwo')
        checkWin(seven, eight, nine, 'symOne', 'symTwo')
        checkWin(one, four, seven, 'symOne', 'symTwo')
        checkWin(two, five, eight, 'symOne', 'symTwo')
        checkWin(three, six, nine, 'symOne', 'symTwo')
        checkWin(one, five, nine, 'symOne', 'symTwo')
        checkWin(three, five, seven, 'symOne', 'symTwo')
    }
})

function newGame() {
    turn = 1
    gameFinish = 0
    one.className = 'empty'
    two.className = 'empty'
    three.className = 'empty'
    four.className = 'empty'
    five.className = 'empty'
    six.className = 'empty'
    seven.className = 'empty'
    eight.className = 'empty'
    nine.className = 'empty'
    one.textContent = ''
    two.textContent = ''
    three.textContent = ''
    four.textContent = ''
    five.textContent = ''
    six.textContent = ''
    seven.textContent = ''
    eight.textContent = ''
    nine.textContent = ''
    endGame.textContent = ''
    stopClicking.textContent = ''
    stopClicking.className = ''
    newGameButton.style.display = 'none'
    oneTurn.style.fontSize = '8rem'
    oneTurn.style.color = '#002D69'
    twoTurn.style.fontSize = '5rem'
    twoTurn.style.color = 'black'

}