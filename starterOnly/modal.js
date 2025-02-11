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
// variable fermeture modal inscription
const closeBtn = document.querySelector(".close");
// variable bouton croix fermeture modal apres validation
const closeBtn2 = document.querySelector(".closeSecond");
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
const msgValid = document.getElementsByClassName("confirmationMsg");
const pgeContent = document.getElementsByClassName("content");
// variable bouton de fermeture quand formulaire valider
const closeBtnRed = document.getElementById("closeBtnRed");
// variables messages erreur balise small
const errorFirst = document.getElementById("error-first");
const errorLast = document.getElementById("error-last");
const errorMail = document.getElementById("error-email");
const errorBirthdate = document.getElementById("error-birthdate");
const errorQuantity = document.getElementById("error-quantity");
const errorOptions = document.getElementById("error-options");
const errorConditions = document.getElementById("error-conditions");
// variables hero section
const heroSection = document.getElementsByClassName("hero-section");


/* LES REGEXS */

// regex prénom et nom
const regexFirstLast = /^[A-Za-z]{2,30}$/;
// regex email
const regexEmail = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
// regex date de naissance avec age minimum requis de 14 ans (non spécifié)
const regexBirthdate = /^(19[3-9]+[0-9]|200[0-6])-\d{2}\-\d{2}$/;
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

// événement de fermeture de modal
closeBtn.addEventListener("click", closeModal);
//fermer le formulaire modal
function closeModal() {
  modalbg.style.display = "none";
  resetForm(); 
}

/* FONCTION DE REINITIALISATION DU FORMULAIRE */

function resetForm() {
  //remise a zero des champs formulaire et des bordures blanches
  firstNameInput.value = "" ;
  firstNameInput.style.borderColor = "#fff";
  lastNameInput.value = "";
  lastNameInput.style.borderColor ="#fff";
  emailInput.value = "",
  emailInput.style.borderColor ="#fff";
  birthdateInput.value = "";
  birthdateInput.style.borderColor ="#fff";
  quantityInput.value = "";
  quantityInput.style.borderColor ="#fff";
  checkboxCity1.checked = false;
  checkboxCity2.checked = false;
  checkboxCity3.checked = false;
  checkboxCity4.checked = false;
  checkboxCity5.checked = false;
  checkboxCity6.checked = false;
  checkboxInput.checked = false;
  errorFirst.style.display ="none";
  errorLast.style.display ="none";
  errorMail.style.display ="none";
  errorBirthdate.style.display ="none";
  errorQuantity.style.display ="none";
  errorOptions.style.display ="none"; 
  errorConditions.style.display = "none";
}

/* LES EVENEMENTS DES INPUTS INDIVIDUEL */

// événement input pour le prénom 
firstNameInput.addEventListener ("focusout", validateFirstNameWithRegex);

function validateFirstNameWithRegex(e){

 if (regexFirstLast.test(e.target.value)){
   errorFirst.style.display ="none";
   firstNameInput.style.borderColor = "green";
   firstNameInput.style.borderWidth = "3px";
   valideInput = true;
 } else {
   errorFirst.style.display ="block";
   firstNameInput.style.borderColor = "#e54858";
   firstNameInput.style.borderWidth = "3px";
   valideInput = false;
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
 } else {
   errorLast.style.display ="block";
   lastNameInput.style.borderColor = "#e54858";
   lastNameInput.style.borderWidth = "3px";
   valideInput = false;
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
 } else {
  errorMail.style.display ="block";
  emailInput.style.borderColor = "#e54858";
   emailInput.style.borderWidth = "3px";
   valideInput = false;
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
 } else {
  errorBirthdate.style.display ="block";
  birthdateInput.style.borderColor = "#e54858";
  birthdateInput.style.borderWidth = "3px";
  valideInput = false;
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
 } else {
  errorQuantity.style.display ="block";
  quantityInput.style.borderColor = "#e54858";
  quantityInput.style.borderWidth = "3px";
  valideInput = false;
 }
}

// événement choix de villes 
checkboxCity1.addEventListener("click",validCity1);

function validCity1(){
  if (checkboxCity1.checked){
errorOptions.style.display = "none";
valideInput = true;
  }
}

checkboxCity2.addEventListener("click",validCity2);

function validCity2(){
  if (checkboxCity2.checked){
errorOptions.style.display = "none";
valideInput = true;
  }
}

checkboxCity3.addEventListener("click",validCity3);

function validCity3(){
  if (checkboxCity3.checked){
errorOptions.style.display = "none";
valideInput = true;
  }
}

checkboxCity4.addEventListener("click",validCity4);

function validCity4(){
  if (checkboxCity4.checked){
errorOptions.style.display = "none";
valideInput = true;
  }
}

checkboxCity5.addEventListener("click",validCity5);

function validCity5(){
  if (checkboxCity5.checked){
errorOptions.style.display = "none";
valideInput = true;
  }
}

checkboxCity6.addEventListener("click",validCity6);

function validCity6(){
  if (checkboxCity6.checked){
errorOptions.style.display = "none";
valideInput = true;
  }
}

// événement input conditions d'utilisation
checkboxInput.addEventListener("change",validateForCheckbox);

function validateForCheckbox() {
  
 if (!checkboxInput.checked){
  errorConditions.style.display = "block";
  valideInput = false;
 } else {
  errorConditions.style.display ="none";
  valideInput = true;
 }
}

//EVENEMENT POUR LA VALIDATION DU FORMULAIRE SI TOUT LES CHAMPS SONT BIEN REMPLIS AU CLICK

btnSubmit.addEventListener('click',validateForm);

function validateForm(e){
    
  //prénom   
if (!regexFirstLast.test(firstNameInput.value)){
  e.preventDefault();
  valideInput = false;
  errorFirst.style.display ="block";
  firstNameInput.style.borderColor = "#e54858";
  firstNameInput.style.borderWidth = "3px";
  }
//nom   
if (!regexFirstLast.test(lastNameInput.value)){ 
  e.preventDefault();
  valideInput = false;  
  errorLast.style.display ="block";
  lastNameInput.style.borderColor = "#e54858";
  lastNameInput.style.borderWidth = "3px";
  }
//email 
if (!regexEmail.test(emailInput.value)){
  e.preventDefault();
  valideInput = false;  
  errorMail.style.display ="block";
  emailInput.style.borderColor = "#e54858";
  emailInput.style.borderWidth = "3px";
  }
//date de naissance  
if (!regexBirthdate.test(birthdateInput.value)){
  e.preventDefault();
  valideInput = false; 
  errorBirthdate.style.display ="block";
  birthdateInput.style.borderColor = "#e54858";
  birthdateInput.style.borderWidth = "3px";
  }
//combien de tournoi    
if (!regexQuantity.test(quantityInput.value)){
   e.preventDefault();
   valideInput = false;
  errorQuantity.style.display ="block";
  quantityInput.style.borderColor = "#e54858";
  quantityInput.style.borderWidth = "3px";
  }
//choix des villes
if (checkboxCity1.checked || checkboxCity2.checked || checkboxCity3.checked || checkboxCity4.checked || checkboxCity5.checked || checkboxCity6.checked){ 
  valideInput = true; 
  errorOptions.style.display ="none";
  } else {
  e.preventDefault();
  valideInput = false;
  errorOptions.style.display ="block";  
  }
//condition d'utilisation   
if (!checkboxInput.checked){ 
  e.preventDefault();
  valideInput = false;
   errorConditions.style.display ="block"; 
  } else {
  valideInput = true;
  errorConditions.style.display = "none"; 
  }

  //controle global du formulaire et validation  si tout est ok
  e.preventDefault();
if (regexFirstLast.test(firstNameInput.value) && (regexFirstLast.test(lastNameInput.value) && (regexEmail.test(emailInput.value) && (regexBirthdate.test(birthdateInput.value)
  && (regexQuantity.test(quantityInput.value) && (checkboxCity1.checked || checkboxCity2.checked || checkboxCity3.checked || checkboxCity4.checked || checkboxCity5.checked ||
  checkboxCity6.checked) && (checkboxInput.checked) ))))) {
    //affichage message de validation 
      msgValid[0].style.display ="block"; 
      pgeContent[0].style.display ="none";
   //remise a zero des champs formulaire et des bordures blanches avec fonction réinitialisation
      resetForm();
   } 
}

/* BOUTON FERMER ET CROIX FERMETURE DE MESSAGE QUAND VALIDATION REUSSIE */

// événement sur le bouton fermer
closeBtnRed.addEventListener("click",closeValid);
// événement sur fermeture de la croix
closeBtn2.addEventListener("click",closeValid);
function closeValid() {
  msgValid[0].style.display = "none";
  pgeContent[0].style.display ="block";
  heroSection[0].style.display ="block";
  modalbg.style.display ="none";
}
