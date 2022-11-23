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
var playerOne = null
var playerTwo = null

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
var parent = document.querySelector('.grid-box')
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

// To be able to change the end game message colour from transparent to opqaue as defined in CSS, let's declare a new variable for the message: 
var endGame = document.querySelector('#end-message')
console.log(endGame)
// => <h2 id="end-message" class="before-game">It is a DRAW. Good Game Well played</h2>
// Now we can change the classList from "before-game" to "after-game"

var turn = 1
parent.addEventListener('click', function (event) {
    var indGrid = event.target
    console.log(turn)
    if (turn % 2 === 0 && indGrid.classList[0] === 'empty') {
        indGrid.classList.replace('empty', 'symTwo')
        indGrid.textContent = 'O'
        turn = turn + 1
    } else if (turn % 2 !== 0 && indGrid.classList[0] === 'empty') {
        indGrid.classList.replace('empty', 'symOne')
        indGrid.textContent = 'X'
        turn = turn + 1
    }
    if (turn === 10) {
        endGame.classList.replace('before-game', 'after-game')
    }
})
// Now that this works, the next step will be to design the winning conditions 