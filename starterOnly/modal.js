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
// variable closeBtn
const closeBtn = document.querySelector(".close");
// variables pour implémentation du formulaire



// événement lancement de modal
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// événement de fermeture de modal
closeBtn.addEventListener("click", closeModal);

// lancer le formulaire modal
function launchModal() {
  modalbg.style.display = "block";
}
//fermer le formulaire modal
function closeModal() {
  modalbg.style.display = "none";
}









