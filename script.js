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
for (var turn = 1; turn < 10; turn++) {
    if (turn % 2 === 0) {
        console.log("O")
    } else {
        console.log("X")
    }
}


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
one.textContent
// => ''
// Now instead of changing the box background to red, we will replace the empty textContent from '' to 'X'. 
parent.addEventListener('click', function (event) {
    var indGrid = event.target
    indGrid.textContent = 'X'
})
// It actually does not require it to be replaced, it can be changed immediately.

