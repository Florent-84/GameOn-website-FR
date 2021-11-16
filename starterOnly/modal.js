function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM ELEMENTS / VARIABLES

const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const btnSubmit = document.getElementById("button");
// variable fermeture modal
const closeBtn = document.querySelector(".close");
// variables pour implémentation du formulaire
const firstNameInput = document.getElementById("first");
const lastNameInput = document.getElementById("last");
const emailInput = document.getElementById("email");
const birthdateInput = document.getElementById("birthdate");
const quantityInput = document.getElementById("quantity");

// variables choix des villes
const checkboxCity1 = document.getElementById("location1");
const checkboxCity2 = document.getElementById("location2");
const checkboxCity3 = document.getElementById("location3");
const checkboxCity4 = document.getElementById("location4");
const checkboxCity5 = document.getElementById("location5");
const checkboxCity6 = document.getElementById("location6");
// variable cgv
const checkboxInput = document.getElementById("checkbox1");
// variable message de validation formulaire
const msgValid = document.getElementsByClassName("content confirmationMsg");
// variable bouton de fermeture quand formulaire valider
const closeBtnRed = document.getElementById("closeBtnRed");
// variable pour enlever formulaire 
const removeModal = document.getElementsByClassName("modal-body")
// variables messages erreur balise small
const errorFirst = document.getElementById("error-first");
const errorLast = document.getElementById("error-last");
const errorMail = document.getElementById("error-email");
const errorBirthdate = document.getElementById("error-birthdate");
const errorQuantity = document.getElementById("error-quantity");
const errorOptions = document.getElementById("error-options");
const errorConditions = document.getElementById("error-conditions");


/* LES REGEXS */

// regex prénom et nom
const regexFirstLast = /^[A-Za-z]{2,30}$/;
// regex email
const regexEmail = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
// regex date de naissance
const regexBirthdate = /^\d{4}\-\d{2}\-\d{2}$/;
// regex combien de tournoi
const regexQuantity = /^\d{1,2}$/;
// variable de controle
let valideInput = false;


/* OUVERTURE ET FERMETURE DU FORMULAIRE */

// événement lancement de modal
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// lancer le formulaire modal
function launchModal() {
  modalbg.style.display = "block";
}

// événement lancement de modal
modalBtn.forEach((btn) => btn.addEventListener("click", blockMsg));
// bloquer le message reponse validation formulaire
function blockMsg() {
  msgValid[0].style.display = "none";
}


// événement de fermeture de modal
closeBtn.addEventListener("click", closeModal);
//fermer le formulaire modal
function closeModal() {
  modalbg.style.display = "none";
}

/* LES EVENEMENTS DES INPUTS */

// événement input pour le prénom 
firstNameInput.addEventListener ("focusout", validateFirstNameWithRegex);

function validateFirstNameWithRegex(e){

 if (regexFirstLast.test(e.target.value)){
   errorFirst.style.display ="none";
   firstNameInput.style.borderColor = "green";
   firstNameInput.style.borderWidth = "3px";
   valideInput = true;
   console.log(valideInput)
 } else {
   errorFirst.style.display ="block";
   firstNameInput.style.borderColor = "#e54858";
   firstNameInput.style.borderWidth = "3px";
   valideInput = false;
   console.log(valideInput)
 }
}

// événement input pour le nom 
lastNameInput.addEventListener ("focusout", validateLastNameWithRegex);

function validateLastNameWithRegex(e){

 if (regexFirstLast.test(e.target.value)){
   errorLast.style.display ="none";
   lastNameInput.style.borderColor = "green";
   lastNameInput.style.borderWidth = "3px";
   valideInput = true;
   console.log(valideInput)
 } else {
   errorLast.style.display ="block";
   lastNameInput.style.borderColor = "#e54858";
   lastNameInput.style.borderWidth = "3px";
   valideInput = false;
   console.log(valideInput)
 }
}

// événement input de l'Email 
emailInput.addEventListener ("focusout", validateEmailWithRegex);

function validateEmailWithRegex(e){

 if (regexEmail.test(e.target.value)){
  errorMail.style.display ="none";
  emailInput.style.borderColor = "green";
  emailInput.style.borderWidth = "3px";
  valideInput = true;
   console.log(valideInput)
 } else {
  errorMail.style.display ="block";
  emailInput.style.borderColor = "#e54858";
   emailInput.style.borderWidth = "3px";
   valideInput = false;
   console.log(valideInput)
 }
}

// événement input pour la date de naissance 
birthdateInput.addEventListener ("focusout", validateBirthdateWithRegex);

function validateBirthdateWithRegex(e){

 if (regexBirthdate.test(e.target.value)){
  errorBirthdate.style.display ="none";
  birthdateInput.style.borderColor = "green";
  birthdateInput.style.borderWidth = "3px";
  valideInput = true;
   console.log(valideInput)
 } else {
  errorBirthdate.style.display ="block";
  birthdateInput.style.borderColor = "#e54858";
  birthdateInput.style.borderWidth = "3px";
  valideInput = false;
   console.log(valideInput)
 }
}


// événement input du nombre de participation aux concours 
quantityInput.addEventListener ("focusout", validateQuantityWithRegex);

function validateQuantityWithRegex(e){
  
 if (regexQuantity.test(e.target.value)){
  errorQuantity.style.display ="none";
  quantityInput.style.borderColor = "green";
  quantityInput.style.borderWidth = "3px";
  valideInput = true;
   console.log(valideInput)
 } else {
  errorQuantity.style.display ="block";
  quantityInput.style.borderColor = "#e54858";
  quantityInput.style.borderWidth = "3px";
  valideInput = false;
   console.log(valideInput)
 }
}

// événement choix de villes 
checkboxCity1.addEventListener("click",validCity1);

function validCity1(){
  if (checkboxCity1.checked){
errorOptions.style.display = "none";
valideInput = true;
console.log(valideInput);
  }
}

checkboxCity2.addEventListener("click",validCity2);

function validCity2(){
  if (checkboxCity2.checked){
errorOptions.style.display = "none";
valideInput = true;
console.log(valideInput);
  }
}

checkboxCity3.addEventListener("click",validCity3);

function validCity3(){
  if (checkboxCity3.checked){
errorOptions.style.display = "none";
valideInput = true;
console.log(valideInput);
  }
}

checkboxCity4.addEventListener("click",validCity4);

function validCity4(){
  if (checkboxCity4.checked){
errorOptions.style.display = "none";
valideInput = true;
console.log(valideInput);
  }
}

checkboxCity5.addEventListener("click",validCity5);

function validCity5(){
  if (checkboxCity5.checked){
errorOptions.style.display = "none";
valideInput = true;
console.log(valideInput);
  }
}

checkboxCity6.addEventListener("click",validCity6);

function validCity6(){
  if (checkboxCity6.checked){
errorOptions.style.display = "none";
valideInput = true;
console.log(valideInput);
  }
}


// événement input conditions d'utilisation
checkboxInput.addEventListener("change",validateForCheckbox);

function validateForCheckbox() {
  
if (!checkboxInput.checked){
  errorConditions.style.display = "block";
  valideInput = false;
  console.log(valideInput)
  return false; 
 } else {
  errorConditions.style.display ="none";
  valideInput = true;
  console.log(valideInput)
  return true;
 }
}

// événement validation du formulaire si tout les champs sont bien remplis
btnSubmit.addEventListener('click',validateForm);

function validateForm(e){
  
//prénom   
  if (firstNameInput.value == ""){
  e.preventDefault();
  errorFirst.style.display ="block";
  firstNameInput.style.borderColor = "#e54858";
  firstNameInput.style.borderWidth = "3px";

   }
//nom   
   if (lastNameInput.value == ""){ 
  e.preventDefault();  
  errorLast.style.display ="block";
  lastNameInput.style.borderColor = "#e54858";
  lastNameInput.style.borderWidth = "3px";
   }
//email 
   if (emailInput.value == ""){
  e.preventDefault();  
  errorMail.style.display ="block";
  emailInput.style.borderColor = "#e54858";
  emailInput.style.borderWidth = "3px";
   }
//date de naissance  
   if (birthdateInput.value == ""){
  e.preventDefault(); 
  errorBirthdate.style.display ="block";
  birthdateInput.style.borderColor = "#e54858";
  birthdateInput.style.borderWidth = "3px";
   }
//combien de tournoi    
   if (quantityInput.value == ""){
   e.preventDefault();
  errorQuantity.style.display ="block";
  quantityInput.style.borderColor = "#e54858";
  quantityInput.style.borderWidth = "3px";
   }
//choix des villes
  if (checkboxCity1.checked || checkboxCity2.checked || checkboxCity3.checked || checkboxCity4.checked || checkboxCity5.checked || checkboxCity6.checked){  
  errorOptions.style.display ="none";
  } else {
  e.preventDefault();
  errorOptions.style.display ="block";  
  }
//condition d'utilisation   
   if (!checkboxInput.checked){ 
  e.preventDefault();
   errorConditions.style.display ="block";
   } else {
  errorConditions.style.display = "none"; 
   } 
} 



/*btnSubmit.addEventListener('click',validateMsg);

function validateMsg() {
  e.preventDefault();  
 if (firstNameInput && lastNameInput && emailInput && birthdateInput && quantityInput && checkboxInput){
  msgValid[0].style.display ="block";
   }
}*/


/* BOUTON  DE FERMETURE DE MESSAGE QUAND VALIDATION REUSSIE*/

// événement sur le bouton fermer
closeBtnRed.addEventListener("click",closeMsg);
function closeMsg() {
  msgValid[0].style.display = "none";
}



