// JavaScript Document
console.log("hi");

let deMenuKnop = document.querySelector("header button:first-of-type");

// EERSTE MENU [NAV: HAMBURGERMENU]
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


// MENU IN DE FOOTER (UITKLAPS)
let footerMenuButtons = document.querySelectorAll("footer > section:nth-of-type(2) button");
let footerMenuH3s = document.querySelectorAll("footer > section:nth-of-type(2) > section h3");

footerMenuButtons.forEach(footerMenuButton => {
  footerMenuButton.addEventListener("click", toggleFooterMenu);
});

footerMenuH3s.forEach(footerMenuH3 => {
  footerMenuH3.addEventListener("click", toggleFooterMenu);
});

function toggleFooterMenu() {
  let footerButtonWaaropGekliktIs = this;
  let footerSectionWaarDeButtonInZit = footerButtonWaaropGekliktIs.closest("section");
  footerSectionWaarDeButtonInZit.classList.toggle("open");
}





// BOEKPAGINA: BOEK AAN FAVORIETEN TOEVOEGEN
let favorietKnop = document.getElementById("favoriet");
let toggle = false;

favorietKnop.addEventListener("click", toevoegenAanFavorieten);

function toevoegenAanFavorieten() {
  if (toggle == false) {
    favorietKnop.src = "./images/voegtoe-selected.png";
    toggle = true;
  } else {
    favorietKnop.src = "./images/voegtoe-unselected.png";
    toggle = false;
  }

}