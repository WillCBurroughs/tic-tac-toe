
let gameOver = false; 
let playerOneTurn = true; 

let makeTurn = document.createElement("h3"); 
makeTurn.classList.add("topText");
makeTurn.textContent = "It's Player One's turn";

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
containerTic.style.marginTop = "100px";

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

// How to makeCol so that we can add and remove 
// Classes easily 
function makeCol(){
    let tempCol = document.createElement("div");
    tempCol.classList.add("col-4","col-md-3", "ticCol", "makeMark", "text-center", "justify-content-center", "d-flex", "align-items-center");
    tempCol.style.height = "200px"

    tempCol.addEventListener("click", function(){
        tempCol.classList.add("selected");
        playerOneTurn = !playerOneTurn;
        if(playerOneTurn && gameOver == false){
            makeTurn.textContent = "Player One's turn";
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
                tempCol.textContent = "x"
            } else {
                // Need to add class MakeO if player2 turn
                tempCol.classList.add("makeO") 
                tempCol.textContent = "o"
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
            makeTurn.textContent = "Player 1 won"
        } else if(gameOver == true && mark == "o"){
            makeTurn.textContent = "Player 2 won"
        }
        
        if(testDraw() && gameOver == false){
            gameOver = true; 
            makeTurn.textContent = "Game is tie";
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

}


function makeRow(){
    let tempRow = document.createElement("div");
    tempRow.classList.add("row", "align-items-center", "flexbox", "justify-content-center");
    return tempRow; 
}


