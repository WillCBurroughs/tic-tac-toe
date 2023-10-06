
let large = true; 

if(window.innerWidth < 768){
    large = false;
}

let holdBothProfiles = document.createElement("div");
holdBothProfiles.classList.add("container", "holdProfiles");

let holdBothProfilesRow = document.createElement("div");
holdBothProfilesRow.classList.add("row", "gx-3", "justify-content-evenly", "holdProfiles");

let holdProfileFirst = document.createElement("div");
holdProfileFirst.classList.add("col", "col-5", "holdProfile");

// Will hold first profile 
let holdProfileFirstContainer = document.createElement("div"); 
holdProfileFirstContainer.classList.add("container");

let holdFirstPersonAndUploadTextRow = document.createElement("div"); 
holdFirstPersonAndUploadTextRow.classList.add("row", "justify-content-evenly", "applyColor");


let holdPerson = document.createElement("div"); 
holdPerson.classList.add("col", "col-12", "col-lg-3", "applyColor");

holdPerson.style.marginTop = "20px";

let imagePerson = document.createElement("img");
imagePerson.classList.add("applyColor")
imagePerson.src = "img/Profile.png"
imagePerson.style.height = "70px";
imagePerson.style.width = "70px";
imagePerson.style.display = "block";

holdPerson.append(imagePerson); 

holdFirstPersonAndUploadTextRow.append(holdPerson);

let holdUploadText = document.createElement("h3"); 
holdUploadText.textContent = "Upload Photo";
holdUploadText.classList.add("applyColor");

let holdUploadTextDiv = document.createElement("div"); 
holdUploadTextDiv.classList.add("col-12", "col-lg-6", "applyColor", "text-align-center");

if(large){
    holdUploadTextDiv.style.marginTop = "30px";
}

holdUploadTextDiv.append(holdUploadText); 

holdFirstPersonAndUploadTextRow.append(holdUploadTextDiv);

holdProfileFirstContainer.append(holdFirstPersonAndUploadTextRow);

// Need to add row then add column that is full width 
// Then need to add input that allows user to input text 

let holdFirstTextRow = document.createElement("div");
holdFirstTextRow.classList.add("row", "applyColor"); 

let holdFirstNameInputCol = document.createElement("col"); 
holdFirstNameInputCol.classList.add("col", "col-12", "applyColor");

let takeNameInput = document.createElement("input");
takeNameInput.classList.add("applyColor", "col", "col-12", "nameInput")

if(large){
    holdFirstTextRow.style.marginTop = "40px";
}

takeNameInput.placeholder = "Player1";

takeNameInput.style.marginTop = "20px"

holdFirstNameInputCol.append(takeNameInput);

holdFirstTextRow.append(holdFirstNameInputCol);

holdProfileFirstContainer.append(holdFirstTextRow);


holdProfileFirst.append(holdProfileFirstContainer);


let holdSecondProfile = document.createElement("div");
holdSecondProfile.classList.add("col", "col-5", "holdProfile");

holdBothProfilesRow.append(holdProfileFirst, holdSecondProfile);

holdBothProfiles.append(holdBothProfilesRow);

document.body.append(holdBothProfiles);


let continueButton = document.createElement("button"); 

continueButton.textContent = "Continue →"
continueButton.style.height = "70px"; 
continueButton.style.position = "absolute";
continueButton.style.right = "40px"
continueButton.style.width = "300px"
continueButton.style.bottom = "60px";
continueButton.style.borderRadius = "40px";
continueButton.style.border = "3px solid #76726F";
continueButton.style.boxShadow = "0px 4px 4px 0px rgba(0, 0, 0, 0.25)";
continueButton.style.backgroundColor = "rgba(118, 114, 111, 1)";
continueButton.style.color = "#FFF";
continueButton.style.fontSize = "45px";
continueButton.style.fontStyle = "normal";
continueButton.style.fontWeight = "700";

continueButton.addEventListener("click", function(){
    // This will only be true when not black space
    if(takeNameInput.value.trim() !== ""){
        localStorage.setItem("playerOneName", takeNameInput.value.trim());
    }

    window.location = "tic-tac-toe.html";

})

document.body.appendChild(continueButton); 