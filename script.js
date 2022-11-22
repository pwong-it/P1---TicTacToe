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
for (var turn = 1; turn < 10; turn++) {
    if (turn % 2 === 0) {
        console.log("O")
    } else {
        console.log("X")
    }
}