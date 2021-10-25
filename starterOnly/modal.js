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
//création de la constante closeBtn
const closeBtn = document.getElementsByClassName("close");



// événement lancement de modal
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// lancer le formulaire modal
function launchModal() {
  modalbg.style.display = "block";
}



// fermerture du formulaire // 

//création de la fonction
function closeModal() {
  modalbg.style.display = "none";
}
//écouter l'événement et au click fermer la modale 
closeBtn[0].addEventListener("click", closeModal);







