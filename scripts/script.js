// JavaScript Document
console.log("hi");

let deMenuKnop = document.querySelector("header button:first-of-type");
let deSluitKnop = document.querySelector("header nav:first-of-type button");

deMenuKnop.addEventListener("click", toggleMenu);
deSluitKnop.addEventListener("click", toggleMenu);

function toggleMenu() {
    let deNav = document.querySelector("header nav:first-of-type");
    deNav.classList.toggle("open");
  }