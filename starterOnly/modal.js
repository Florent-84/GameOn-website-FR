function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
// création variable closeBtn
const closeBtn = document.querySelector(".close"); 

// événement lancement de modal
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// lancer le formulaire modal
function launchModal() {
  modalbg.style.display = "block";
}

// FERMETURE FORMULAIRE // 

//création de la fonction closeModal
function closeModal() {
  modalbg.style.display = "none";
}
//écouter l'événement et au click fermer la modale 
closeBtn.addEventListener("click", closeModal);







