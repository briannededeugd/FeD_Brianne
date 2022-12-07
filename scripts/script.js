// JavaScript Document
console.log("hi");

// EERSTE MENU [NAV: HAMBURGERMENU]
let deMenuKnop = document.querySelector("header button:first-of-type");
let deSluitKnop = document.querySelector("header nav:first-of-type button");

deMenuKnop.addEventListener("click", toggleMenu);
deSluitKnop.addEventListener("click", toggleMenu);

function toggleMenu() {
    let deNav = document.querySelector("header nav:first-of-type");
    deNav.classList.toggle("open");
  }

// MENU BOVEN DE FOOTER
  let deMenuButtons = document.querySelectorAll("main > section:nth-of-type(4) button");
  let deMenuH3s = document.querySelectorAll("main > section:nth-of-type(4) > section h3");
  
  deMenuButtons.forEach(deMenuButton => {
    deMenuButton.addEventListener("click", toggleOndersteMenu);
  });
  
  deMenuH3s.forEach(deMenuH3 => {
    deMenuH3.addEventListener("click", toggleOndersteMenu);
  });
  
  function toggleOndersteMenu() {
    let deButtonWaaropGekliktIs = this; 
    let deSectionWaarDeButtonInZit = deButtonWaaropGekliktIs.closest("section");
    deSectionWaarDeButtonInZit.classList.toggle("open");
  }

// BOEKPAGINA: BOEK AAN FAVORIETEN TOEVOEGEN
let favorietknop = document.getElementById("favoriet");
let toggle = false;

favorietknop.addEventListener("click", toevoegenAanFavorieten);

function toevoegenAanFavorieten() {
  if (toggle == false) {
    favorietknop.src = "./images/voegtoe-selected.png";
    toggle = true;
  } else {
    favorietknop.src = "./images/voegtoe-unselected.png";
    toggle = false;
  }
  
}