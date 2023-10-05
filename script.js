
let gameOver = false; 
let playerOneTurn = true; 

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
    tempCol.classList.add("col-3", "ticCol", "makeMark", "text-center", "justify-content-center", "d-flex", "align-items-center");
    tempCol.style.height = "200px"

    tempCol.addEventListener("click", function(){
        tempCol.classList.add("selected");
        playerOneTurn = !playerOneTurn;
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

    // Can check and execute this only if object 
    // Contains class selected 

    if(!object.classList.contains("selected")){
        object.addEventListener("click", function(){
        if(playerOneTurn){
            storeConditions[row][col] = "x";
        } else {
            storeConditions[row][col] = "o";
        }

        console.log(storeConditions);
    })

    }

    

    console.log(storeConditions);

}

// Can have multiple. Test for horizontal win first 
// All win conditions will evaluate true or false 
// Call others after 

function testWin(){

}
 

function horizontalWin(){
    
}

function verticalWin(){

}

function diagonalWin(){

}

// Test if no value in the array evaluates to falsy
function testDraw(){

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


