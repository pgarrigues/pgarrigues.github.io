const text = document.getElementById("text");

const textArray = text.textContent.split("");
//const textArray = text.innerHTML.split('');

console.log(textArray);

const newElement = document.createElement("h1");
newElement.innerHTML = `${textArray
  .map((letter) => `<span style="${randomVisibility()}">${letter}<span>`)
  .join("")}`;

newElement.classList.add("letter");

document.body.appendChild(newElement);

function randomVisibility() {
  return Math.random() < 0.5 ? "visibility:hidden" : "visibility:visible";
}

// partie carte

let buttonEarth = document.getElementById("earthMap");
var nav = document.querySelector(".nav");

buttonEarth.onclick = function () {
  nav.classList.toggle("menu_open");
};

// close menu

let buttonCloseMenu = document.getElementById("closeMenu");

buttonCloseMenu.onclick = function () {
  nav.classList.toggle("menu_open");
};
