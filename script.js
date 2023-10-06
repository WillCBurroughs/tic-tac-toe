
let gameOver = false; 
let playerOneTurn = true; 

let player1Wins = 0; 
let player2Wins = 0; 

let makeTurn = document.createElement("h3"); 
makeTurn.classList.add("topText");

let holdPlayerOneName = "Player One"



if(localStorage.getItem("playerOneName")){
    holdPlayerOneName = localStorage.getItem("playerOneName");
}

makeTurn.textContent = `It's ${holdPlayerOneName}'s turn`;

let holdMakeTurn = document.createElement("div");
holdMakeTurn.classList.add("container");
holdMakeTurn.appendChild(makeTurn);

document.body.appendChild(holdMakeTurn);

// Will be changed and evaluate for win conditions
let storeConditions = [["","",""],["","",""],["","",""]];

let columnTic = makeCol();
addMarkforArray(columnTic,0,0);
let secondTic = makeCol(); 
addMarkforArray(secondTic,0,1);
let thirdTic = makeCol(); 
addMarkforArray(thirdTic,0,2);

let containerTic = document.createElement("div");
containerTic.classList.add("container-fluid"); 
containerTic.style.marginTop = "30px";

let holdRow = makeRow();


holdRow.appendChild(columnTic);
holdRow.appendChild(secondTic);
holdRow.appendChild(thirdTic);

containerTic.appendChild(holdRow);

let fourthTic = makeCol();
addMarkforArray(fourthTic, 1, 0);
let fifthTic = makeCol(); 
addMarkforArray(fifthTic, 1, 1);
let sixthTic = makeCol(); 
addMarkforArray(sixthTic, 1, 2);

let holdSecondRow = makeRow(); 

holdSecondRow.append(fourthTic,fifthTic,sixthTic);
containerTic.appendChild(holdSecondRow);

let seventhTic = makeCol(); 
addMarkforArray(seventhTic, 2, 0);
let eigthTic = makeCol(); 
addMarkforArray(eigthTic, 2, 1);
let ninthTic = makeCol(); 
addMarkforArray(ninthTic, 2, 2);

let bottomRow = makeRow(); 
bottomRow.append(seventhTic, eigthTic, ninthTic);

containerTic.appendChild(bottomRow);

document.body.appendChild(containerTic);

let resetButton = document.createElement("div");
resetButton.classList.add("reset", "d-none");
resetButton.textContent = "Reset Game";

resetButton.addEventListener("click", resetGame);

document.body.appendChild(resetButton);

let firstPlayerWinCounts = document.createElement("h3"); 
firstPlayerWinCounts.classList.add("session")
let holdFirstPlayerWinCountsCol = document.createElement("div");
holdFirstPlayerWinCountsCol.classList.add("col-12", "col-md-6", "col-lg-3"); 

firstPlayerWinCounts.textContent = `Session wins: ${player1Wins}`; 

holdFirstPlayerWinCountsCol.appendChild(firstPlayerWinCounts); 

let secondPlayerWinCounts = document.createElement("h3"); 
let holdSecondPlayerWinCounts = document.createElement("div");
holdSecondPlayerWinCounts.classList.add("col-12", "col-md-6", "col-lg-3");

secondPlayerWinCounts.textContent = `Session wins: ${player2Wins}`
secondPlayerWinCounts.classList.add("session")

holdSecondPlayerWinCounts.appendChild(secondPlayerWinCounts); 

let holdScoresRow = document.createElement("div");
holdScoresRow.classList.add("row", "d-flex", "justify-content-between"); 
holdScoresRow.append(holdFirstPlayerWinCountsCol, holdSecondPlayerWinCounts);

let holdScoresPhotos = document.createElement("div")
holdScoresPhotos.classList.add("container")
holdScoresPhotos.style.marginTop = "20px"

let holdNameFirst = document.createElement("h3"); 
holdNameFirst.classList.add("names")

// Later will test if saved name applies and apply name 
holdNameFirst.textContent = `${holdPlayerOneName}`;

let holdNamesSecond = document.createElement("h3"); 
holdNamesSecond.classList.add("names")

// Later will set equal to second saved name if applies 
holdNamesSecond.textContent = "Player 2"

let holdNamesDiv = document.createElement("div");
holdNamesDiv.classList.add("col", "col-3"); 
holdNamesDiv.appendChild(holdNameFirst); 

let holdNamesSecondDiv = document.createElement("div");
holdNamesSecondDiv.classList.add("col", "col-3");
holdNamesSecondDiv.appendChild(holdNamesSecond);

let holdNamesRow = document.createElement("div"); 
holdNamesRow.classList.add("row", "d-flex", "justify-content-between"); 
holdNamesRow.append(holdNamesDiv, holdNamesSecondDiv);

holdScoresPhotos.append(holdNamesRow, holdScoresRow);

document.body.append(holdScoresPhotos); 


// How to makeCol so that we can add and remove 
// Classes easily 
function makeCol(){
    let tempCol = document.createElement("div");
    tempCol.classList.add("col-4","col-md-3", "col-lg-2", "ticCol", "makeMark", "text-center", "justify-content-center", "d-flex", "align-items-center");
    tempCol.style.height = "180px"

    tempCol.addEventListener("click", function(){
        tempCol.classList.add("selected");
        playerOneTurn = !playerOneTurn;
        if(playerOneTurn && gameOver == false){
            makeTurn.textContent = `${holdPlayerOneName}'s turn`;
        } else if(playerOneTurn == false && gameOver == false){
            makeTurn.textContent = "Player Two's turn";
        }
    })

    // Can check if classList includes gameOver and if has clicked class.
    //  If so don't allow hover. Can then remove this from the property
    tempCol.addEventListener("mouseover", function(){
        if(gameOver == false && tempCol.classList.contains("selected") == false){
            if(playerOneTurn){
                // Need to add class MakeX if player1 turn 
                tempCol.classList.add("makeX")
                tempCol.textContent = "X"
            } else {
                // Need to add class MakeO if player2 turn
                tempCol.classList.add("makeO") 
                tempCol.textContent = "O"
            }
            
        }
    })
    tempCol.addEventListener("mouseout", function(){
        if(gameOver == false && tempCol.classList.contains("selected") == false){
            // Need to remove MakeO and MakeX from property

            if(tempCol.classList.contains("makeX")){
                tempCol.classList.remove("makeX");
            }

            if(tempCol.classList.contains("makeO")){
                tempCol.classList.remove("makeO");
            }

            tempCol.textContent = ""
        }
        
    })

    return tempCol;
}

// Only allow for this function to be called if column 
// Not selected, can remove if selected 
function addMarkforArray(object, row, col){

    let mark = ""; 

    // Can check and execute this only if object 
    // Contains class selected 

    if(!object.classList.contains("selected")){
        object.addEventListener("click", function(){
       
        if(gameOver == false){
        if(playerOneTurn){
            storeConditions[row][col] = "o";
        } else {
            storeConditions[row][col] = "x";
        }

        if(playerOneTurn){
            mark = "o";
        } else {
            mark = "x";
        }


        console.log(mark);
        testWin(row,col,mark);

        if(gameOver == true && mark == "x"){
            makeTurn.textContent = `${holdPlayerOneName} Won`
            player1Wins++; 
            firstPlayerWinCounts.textContent = `Session wins: ${player1Wins}`; 
        } else if(gameOver == true && mark == "o"){
            makeTurn.textContent = "Player 2 won"
            player2Wins++;
            secondPlayerWinCounts.textContent = `Session wins: ${player2Wins}`; 
        }
        
        if(testDraw() && gameOver == false){
            gameOver = true; 
            makeTurn.textContent = "Game is tie";
        }

        if(gameOver){
            resetButton.classList = "reset d-block";
        }
     }
        console.log(storeConditions);
    })

    }



    // Need to see if game is over
    //testWin(row, col, mark)

    console.log(storeConditions);

}

// Can have multiple. Test for horizontal win first 
// All win conditions will evaluate true or false 
// Call others after 

function testWin(row, col, mark){


    // If any evaluate to true gameOver = true 
    if(verticalWin(col, mark) || horizontalWin(row, mark) || diagonalWin(col,row, mark)){
        gameOver = true;
    } else {
        gameOver = false; 
    }

    // If game is over reset button should appear

}
 
// Needs to test if all values in a row are equal 
// To the selected mark
function horizontalWin(row, mark){

    // If even once this is not true not game over
    for(let i = 0; i < 3; i++){
        if(storeConditions[row][i] != mark){
            return false; 
        }
    }

    console.log("Win Horizontal");
    return true;
}

function verticalWin(col, mark){

    // If even once this is not true not game over
    for(let i = 0; i < 3; i++){
        if(storeConditions[i][col] != mark){
            return false; 
        }
    }

    console.log("Win vertical");
    return true;

}

//
function diagonalWin(col,row, mark){

    // Need to test for diagonal win both ways
    
    if(col == row){
        for(let i = 0; i < 3; i++){
            if(storeConditions[i][i] != mark){
                return false;
            }
        }
        return true;
    }

    if(col + row == 2){
        for(let i = 0; i < 3; i++){
            if(storeConditions[i][2 - i] != mark){
                return false;
            }
        }
        return true;
    }
    
    return false;

}

// Test if no value in the array evaluates to falsy. If so, then game is not a draw
function testDraw(){
    let gameIsDraw = false; 

    // When all values are 
    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
            if(!storeConditions[i][j]){
                return false; 
            }
        }
    }

    return true;
}

// Needs to set array to empty 
// Needs to set gameOver to false 

function resetGame(){

    resetButton.classList = "reset d-none"
    
    playerOneTurn = true;
    gameOver = false; 
    storeConditions = [["","",""],["","",""],["","",""]];
    
    columnTic.textContent = ""
    columnTic.classList.remove("selected")

    secondTic.textContent = ""
    secondTic.classList.remove("selected")

    thirdTic.textContent = ""
    thirdTic.classList.remove("selected")

    fourthTic.textContent = ""
    fourthTic.classList.remove("selected")

    fifthTic.textContent = ""
    fifthTic.classList.remove("selected")

    sixthTic.textContent = ""
    sixthTic.classList.remove("selected")

    seventhTic.textContent = ""
    seventhTic.classList.remove("selected")

    eigthTic.textContent = ""
    eigthTic.classList.remove("selected")

    ninthTic.textContent = ""
    ninthTic.classList.remove("selected")

    // Need to remove value of each class makeX and makeO from all values 

    let holdX = document.querySelectorAll(".makeX");
    console.log(holdX);

    holdX.forEach(holdVal => {
        holdVal.classList.remove("makeX");
    })

    let holdO = document.querySelectorAll(".makeO"); 

    holdO.forEach(holdVal => {
        holdVal.classList.remove("makeO"); 
    })

    console.log(holdO);

    makeTurn.textContent = `${holdPlayerOneName} turn`

}

function makeRow(){
    let tempRow = document.createElement("div");
    tempRow.classList.add("row", "align-items-center", "flexbox", "justify-content-center");
    return tempRow; 
}


