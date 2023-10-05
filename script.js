
let gameOver = false; 
let playerOneTurn = true; 

let columnTic = makeCol();
let secondTic = makeCol(); 
let thirdTic = makeCol(); 

let containerTic = document.createElement("div");
containerTic.classList.add("container-fluid"); 
containerTic.style.marginTop = "100px";

let holdRow = makeRow();


holdRow.appendChild(columnTic);
holdRow.appendChild(secondTic);
holdRow.appendChild(thirdTic);

containerTic.appendChild(holdRow);

let fourthTic = makeCol();
let fifthTic = makeCol(); 
let sixthTic = makeCol(); 

let holdSecondRow = makeRow(); 

holdSecondRow.append(fourthTic,fifthTic,sixthTic);
containerTic.appendChild(holdSecondRow);

let seventhTic = makeCol(); 
let eigthTic = makeCol(); 
let ninthTic = makeCol(); 

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

function makeRow(){
    let tempRow = document.createElement("div");
    tempRow.classList.add("row", "align-items-center", "flexbox", "justify-content-center");
    return tempRow; 
}


