
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
imagePerson.style.borderRadius = "50%";
imagePerson.style.objectFit = "cover";

holdPerson.append(imagePerson); 

holdFirstPersonAndUploadTextRow.append(holdPerson);

let holdUploadText = document.createElement("input"); 
holdUploadText.type = "file"
holdUploadText.textContent = "Upload Photo";
holdUploadText.classList.add("applyColor");

// Sets the image 
holdUploadText.addEventListener("change", function(){
    imagePerson.src = URL.createObjectURL(holdUploadText.files[0]);
})

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

// Need to replicate everything in the first profile 

// Will hold Second profile 

let holdSecondProfile = document.createElement("div");
holdSecondProfile.classList.add("col", "col-5", "holdProfile");


let holdSecondProfileFirstContainer = document.createElement("div"); 
holdSecondProfileFirstContainer.classList.add("container");

let holdSecondPersonAndUploadTextRow = document.createElement("div"); 
holdSecondPersonAndUploadTextRow.classList.add("row", "justify-content-evenly", "applyColor");


let holdSecondPerson = document.createElement("div"); 
holdSecondPerson.classList.add("col", "col-12", "col-lg-3", "applyColor");

holdSecondPerson.style.marginTop = "20px";

let SecondimagePerson = document.createElement("img");
SecondimagePerson.classList.add("applyColor")
SecondimagePerson.src = "img/Profile.png"
SecondimagePerson.style.height = "70px";
SecondimagePerson.style.width = "70px";
SecondimagePerson.style.display = "block";

holdSecondPerson.append(SecondimagePerson); 

holdSecondPersonAndUploadTextRow.append(holdSecondPerson);

let holdSecondUploadText = document.createElement("input"); 
holdSecondUploadText.type = "file";
holdSecondUploadText.textContent = "Upload Photo";
holdSecondUploadText.classList.add("applyColor");

let holdSecondUploadTextDiv = document.createElement("div"); 
holdSecondUploadTextDiv.classList.add("col-12", "col-lg-6", "applyColor", "text-align-center");

if(large){
    holdSecondUploadTextDiv.style.marginTop = "30px";
}

holdSecondUploadTextDiv.append(holdSecondUploadText); 

holdSecondPersonAndUploadTextRow.append(holdSecondUploadTextDiv);

holdSecondProfileFirstContainer.append(holdSecondPersonAndUploadTextRow);

// Need to add row then add column that is full width 
// Then need to add input that allows user to input text 

let holdSecondFirstTextRow = document.createElement("div");
holdSecondFirstTextRow.classList.add("row", "applyColor"); 

let holdSecondFirstNameInputCol = document.createElement("col"); 
holdSecondFirstNameInputCol.classList.add("col", "col-12", "applyColor");

let takeSecondNameInput = document.createElement("input");
takeSecondNameInput.classList.add("applyColor", "col", "col-12", "nameInput")

if(large){
    holdSecondFirstTextRow.style.marginTop = "40px";
}

takeSecondNameInput.placeholder = "Player2";

takeSecondNameInput.style.marginTop = "20px"

holdSecondFirstNameInputCol.append(takeSecondNameInput);

holdSecondFirstTextRow.append(holdSecondFirstNameInputCol);

holdSecondProfileFirstContainer.append(holdSecondFirstTextRow);


holdSecondProfile.append(holdSecondProfileFirstContainer);



// Stops here 

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

    if(takeSecondNameInput.value.trim() !== ""){
        localStorage.setItem("playerTwoName", takeSecondNameInput.value.trim())
    }

    window.location = "tic-tac-toe.html";

})

document.body.appendChild(continueButton); 