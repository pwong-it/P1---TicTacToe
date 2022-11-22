# Tic Tac Toe :x::o::x:
The first project of my Software Engineering Immersive Course.<br/> 
Date Received: 22/11/22<br/>
Date Due: 25/11/22

## :computer: [Click here](#) to see my live project!

## :page_facing_up: About
The below are the criteria set out by the course that I will need to meet:
### Technical Requirements
The app that I am building must:
- Render a game in the browser
- Switch turns between more than one player
- Design logic for winning & visually display which player won
- Include separate HTML / CSS / JavaScript files
- Stick with KISS (Keep It Simple Stupid) principles
- Use Javascript for DOM manipulation
- Deploy your game online, where the rest of the world can access it
- Use semantic markup for HTML and CSS (adhere to best practices)

### Necessary Deliverables (Minimum Viable Product)
- At least one artefact of either pseudocode, flow diagram, wireframe demonstrating planning 
- A working game, built by you, hosted somewhere on the internet
- A link to your hosted working game in the URL section of your GitHub repo
- A git repository hosted on GitHub, with a link to your hosted game, and frequent commits dating back to the very beginning of the project
- A readme.md file with explanations of the technologies used, the approach taken, installation instructions, unsolved problems, etc.

### Bonus extensions - Optional
- Keep track of multiple game rounds with a win counter
- Allow game customizable options, time limits, board size, game rounds, name & profiles etc
- Allow players to customize their token (X, O, name, picture, avatar etc)
- Get inventive with your styling - research CSS effects, animations to spiff things up
- Research LocalStorage or SessionStorage to persist data locally to allow games to continue after page refresh or loss of internet connectivity
- Use timers to display "waiting..." messages while users are waiting to be matched
- Research web audio API and add sound effects to your game
- Be creative! Bend the rules and give it a twist!

***I will be thinking of my own extras once I am at that stage. 

## :pencil2: Planning & Problem Solving
### General Plan
![Planning Photo](./images/photo-sketch.jpg)
Use the Problem Solving Process framework to break down the project into manageable components. From Technical Requirements & Necessary Deliverables
1.  Keywords 
    - Game will be on browser
    - Switch Turns for players
    - Logic for Winning
    - Displaying which player won
    - Separate HTML/CSS/JS files :white_check_mark:
    - JS for DOM manipulation :white_check_mark:
    - Deploy 
    - Use semantic Markup
2.  Requirements
    - Two players. Player turns will alternate until game over.
    - Grid columns and rows (via CSS)
        - Each grid box will have individually declared ID
    - Event Listeners to listen to user clicks
        - After being clicked, the grid should have a new classList "X" or "O" depending on which player clicked. The changes will be linked to CSS styles
    - Win condition is if 3 of the same symbol in a row
        - Figure out all different scenarios of winning
        - Will need an "if" statement to check if grids in a line (eg 1, 2, 3) have been changed to the same classList. If so, then game is won by that player.
        - If there are no 3 grids in a row that have changed to the same classList after all the grids have been activated, then there is a DRAW.
    - Display who wins at the end
    - Stop any more clicks after the game is over. 
        - Once game has stopped. Any further clicks in the grid will result in a message appearing on webpage. 
        - Clicks will won't have any effect besides activating the message
3.  Tasks (pseudo code in order)
    Part ONE
    - Create html, css, js files and link them together
    - Set out basic HTML page. Have all elements ready for DOM manipulation. Heading and Grid at this stage. CSS will be needed for the grid. 
    ![Progress-1](./images/progress_1.png)
    - Declare each of the grids into variables using query selector
    - Test each one to make sure the elements are able to "listen" to the click. 

    Part TWO
    - There are two players. And the turns alternate between the two players. The game will run on a for loop until someone wins, or there is a draw
    - The maximum number of turns in this game is 9 turns. (in the for loop, i = 1; i < 10; i++)
    - Since it is alternating turns, playerOne will start first. (i) will represent the turn. 
    - We will need the modulus operator where even number (i) will be playerTwo's turn. i % 2 === 0
    - We will hard code playerOne as "X", playerTwo as "O" for now. 
    - An "if" statement is required to put this together. If (i) is odd, it is playerOne's turn, and whichever grid is clicked, it will turn "X". If (i) is even, it will be playerTwo's turn and the grid clicked will turn "O".
4.  Implement 
  



## :rocket: Cool tech
- Programming languages
- Libraries
- Animations
- Anything else you'd be proud to show your parents

## :scream: Bugs to fix :bug:
- Anything a little broken
- Anything a LOT broken
- Buttons to not click too many times (cause its broken :unamused:)

## :sunglasses: Lessons learnt
What I would do differently if I could wind back the clock...

## :white_check_mark: Future features
Cool things I would add if I can keep working on this


