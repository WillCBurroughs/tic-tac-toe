## What processes will I follow to complete this project 

- I will use MoSCoW to decide what I must, should, could and will not have (Done) 
- I will decide the features that I want to have in this project (Done)
- I will design what the finished project as I envision it would look like (Done)
- I will write out all the functionality of what I would to add would entail (Done)
- I will Write out the versions that this will consist based off of milestones 
- I will begin and iterate over the project versions until I am finished with the project 
- Go back to design once finished with Must and Should versions 
- Go back to all functionality for could have after getting to this point 

### Table of Contents 
- [What processes will I follow to complete this project](#what-processes-will-i-follow-to-complete-this-project)
  - [Table of Contents](#table-of-contents)
  - [MoSCoW](#moscow)
    - [Must have](#must-have)
    - [Should have](#should-have)
    - [Could have](#could-have)
    - [Won't have](#wont-have)
  - [Design of project](#design-of-project)
  - [Functionality I will need](#functionality-i-will-need)
    - [Need to keep track of whose turn it is](#need-to-keep-track-of-whose-turn-it-is)
    - [Need to Have tiles clickable only once](#need-to-have-tiles-clickable-only-once)
    - [Need to keep track of which blocks have been clicked](#need-to-keep-track-of-which-blocks-have-been-clicked)
    - [Need to make reset block](#need-to-make-reset-block)
  - [Functionality I Should Need](#functionality-i-should-need)
    - [Check hover and when hovering on a block](#check-hover-and-when-hovering-on-a-block)
    - [Saving player scores](#saving-player-scores)
    - [Saving Images, optionally between screens](#saving-images-optionally-between-screens)


### MoSCoW 

#### Must have 

- Let Players know whose move it is 

- Have tiles be only clickable once (This and the next two can be grouped in functionality)
- Have tiles with already filled boxes be unclickable 
- Have tiles be unclickable when game is over (One player wins, draw game)

- Needs to be a restart button that resets board 
- Have tiles fill up with players mark (X or O depending on player and turn)
- Switch mark and player after every turn 

- Only user one div for project 


#### Should have 

- Way of showing players where cursor is floating and putting placeholder mark on hover 
- Allow players to enter their names 
- Have pages be mobile first and look good on different device sizes 
- Allow player histories to be saved so we can see players scores and histories against one another 
- Have player signup area where they can upload a name and image as well as view the rules of Tic-Tac-Toe 
- Have Session score so we can see how players are doing against each other this session 


#### Could have 

- Could have version of tic-tac-toe where users play against computer (tic-tac-toe)
- Could add screen where users choose what game they want to play with signup screen 
- Could have leaderboards that save scores of players and sorts by total amount of games won 
- Could have version that allows users to play connect-4 
- Could have multiplayer aspects incorporated into the game 
  
#### Won't have 

- Will not add any games other than tic-tac-toe and connect-4 
- Will not add any AI elements into the game 
- Will not have different sizes of board available for connect-4 or tic tac toe 
- Will not allow more than 2 players at a time for tic-tac-toe or connect-4 
- Will not have settings where users can alter or change aspects of the game 


### Design of project 

- I believe that there are five main compenents in the first version of the project that contains the must haves of the project. Reset button, Player turn label, board, Marks (X or O by player) First version (Done) (This has basic project with all requirements designed)

- For should haves, we need an area where players could input names, so need to have area to check player histories, need to have way for player to input name and upload photo (Done) 

### Functionality I will need 

#### Need to keep track of whose turn it is 
- Can use a boolean to say it is player 1s turn and set that to false when that is not the case 

#### Need to Have tiles clickable only once 
- Can have the tiles with a property that is clickable and gameIsStillOn == true 
- Set property to false after this is clicked 
- If game is over set gameIsStillOn = false 
- When gameIsStillOn = false we can have the reset button appear 

#### Need to keep track of which blocks have been clicked 
- We can have an array of values and if player1S turn we can add the value that matches the index of the column to the array 
- We can call a function every time this comes up to test if there is a vertical match, horizontal and diagonal with this new selection 
- If there is a match in any direction, we set gameIsStillOn = false 
- Check if false every time and if so resetBlock is false 

#### Need to make reset block 
- If clicked all columns are reset and set to blank 
- gameIsStillOn = true 
- resetBlock.display = hidden 

### Functionality I Should Need 

#### Check hover and when hovering on a block 
- have a placeholder X or O depending on player1turn being true or false and blockIsSelected == false 

#### Saving player scores 
- Can save players into localStorage 
- Check if null, if null set that equal to 0,0 
- Save values based on combination of user's names and always sort by players names so if either player is player 1 we save same value
- Can have session score that is not saved or brought in between games 

#### Saving Images, optionally between screens 

- Can test if image.src == null. If image value is null we just won't display an image 
- Need to add a new screen or popup to view the rules of tic-tac-toe


  
  