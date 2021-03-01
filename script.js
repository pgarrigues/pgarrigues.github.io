///////////////
// Effet sur H1
///////////////

const text = document.getElementById("text");

const textArray = text.textContent.split("");

const newElement = document.createElement("h1");
newElement.innerHTML = `${textArray
  .map((letter) => `<span style="${randomVisibility()}">${letter}<span>`)
  .join("")}`;

newElement.classList.add("letter");

document.body.appendChild(newElement);

function randomVisibility() {
  return Math.random() < 0.5 ? "visibility:hidden" : "visibility:visible";
}

////////////////////
// Ouverture du menu
////////////////////

let buttonEarth = document.getElementById("earthMap");
let nav = document.querySelector(".nav");

buttonEarth.onclick = function () {
  nav.classList.toggle("menu_open");
  premierPlan.classList.toggle("blur");
  newElement.classList.toggle("blur");
};

////////////////////
// Fermeture du menu
////////////////////

let buttonCloseMenu = document.getElementById("closeMenu");

buttonCloseMenu.onclick = function () {
  nav.classList.toggle("menu_open");
  premierPlan.classList.toggle("blur");
  newElement.classList.toggle("blur");
};

//////////////////////////
// Gestion des popups info
//////////////////////////

///// popup cluster potagers :

let popUpClusterPotagers = document.getElementById("popUpclusterPotagers");

let buttonClusterPotagers = document.getElementById("btnClusterPotagers");

let buttonClosePopUpClusterPotagers = document.getElementById(
  "closePopUpclusterPotagers"
);

buttonClusterPotagers.onclick = function () {
  popUpClusterPotagers.classList.toggle("appear");
};

buttonClosePopUpClusterPotagers.onclick = function () {
  popUpClusterPotagers.classList.toggle("appear");
};

///// popup mailles hexa :

let popUpMaillesHexa = document.getElementById("popUpMaillesHexa");

let buttonMaillesHexa = document.getElementById("btnMaillesHexa");

let buttonClosePopUpMaillesHexa = document.getElementById(
  "closePopUpMaillesHexa"
);

buttonMaillesHexa.onclick = function () {
  popUpMaillesHexa.classList.toggle("appear");
};

buttonClosePopUpMaillesHexa.onclick = function () {
  popUpMaillesHexa.classList.toggle("appear");
};

///// popup dual map :

let popUpDualMap = document.getElementById("popUpDualMap");

let buttonDualMap = document.getElementById("btnDualMap");

let buttonClosePopUpDualMap = document.getElementById("closePopUpDualMap");

buttonDualMap.onclick = function () {
  popUpDualMap.classList.toggle("appear");
};

buttonClosePopUpDualMap.onclick = function () {
  popUpDualMap.classList.toggle("appear");
};

///// popup earthquakes :

let popUpEarthquakes = document.getElementById("popUpEarthquakes");

let buttonEarthquakes = document.getElementById("btnEarthquakes");

let buttonClosePopUpEarthquakes = document.getElementById(
  "closePopUpEarthquakes"
);

buttonEarthquakes.onclick = function () {
  popUpEarthquakes.classList.toggle("appear");
};

buttonClosePopUpEarthquakes.onclick = function () {
  popUpEarthquakes.classList.toggle("appear");
};

///// popup VG :

let popUpVendeeGlobe = document.getElementById("popUpVendeeGlobe");

let buttonVendeeGlobe = document.getElementById("btnVendeeGlobe");

let buttonClosePopUpVendeeGlobe = document.getElementById(
  "closePopUpVendeeGlobe"
);

buttonVendeeGlobe.onclick = function () {
  popUpVendeeGlobe.classList.toggle("appear");
};

buttonClosePopUpVendeeGlobe.onclick = function () {
  popUpVendeeGlobe.classList.toggle("appear");
};
