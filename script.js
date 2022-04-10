// Variables

const text = document.getElementById("PLG");
const iconMap = document.getElementById("iconMap");
const mapLocation = document.getElementById("location");
const MenuCartes = document.getElementById("mapsMenu");
const buttonCloseMenuCartes = document.getElementById("btnCloseMenu");
const buttonAboutMe = document.getElementById("aboutMe");
const popUpAboutMe = document.getElementById("aboutMePopUp");
const buttonClosePopUpAboutMe = document.getElementById("btnCloseMenuAboutMe");

// Effet sur H1

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

/* clignotement */
iconMap.addEventListener("mouseover", function () {
  mapLocation.classList.add("clignotement");
});

iconMap.addEventListener("mouseout", function () {
  mapLocation.classList.remove("clignotement");
});

/// menu cartes
// ouverture
mapLocation.addEventListener("click", function () {
  MenuCartes.classList.toggle("appear");
  premierPlan.classList.toggle("blur");
  newElement.classList.toggle("blur");

  // texte animé
  const textAnimTitre = document.querySelector("#menuTitle");

  new Typewriter(textAnimTitre, {
    loop: true,
  })
    .typeString("Cartes interactives")
    .pauseFor(5000)
    .start();
});

// fermeture
buttonCloseMenuCartes.addEventListener("click", function () {
  MenuCartes.classList.toggle("appear");
  premierPlan.classList.toggle("blur");
  newElement.classList.toggle("blur");
});

/// popup about me
// ouverture

buttonAboutMe.addEventListener("click", function () {
  popUpAboutMe.classList.toggle("appear");
  premierPlan.classList.toggle("blur");
  newElement.classList.toggle("blur");

  /// Text animé
  const txtAnim = document.querySelector("#txtAnim");

  new Typewriter(txtAnim, {
    deleteSpeed: 40,
  })
    .typeString("Bonjour, je m'appelle Pierre-Loup, ")
    .pauseFor(300)
    .typeString("je suis géomaticien - développeur SIG...")
    .pauseFor(500)
    .deleteChars(40)
    .typeString("j'aime les cartes.")
    .pauseFor(500)
    .deleteChars(11)
    .typeString("le développement web.")
    .pauseFor(500)
    .deleteChars(21)
    .typeString("<strong>Python</strong>.")
    .pauseFor(500)
    .deleteChars(7)
    .typeString("<strong>JavaScript</strong>.")
    .pauseFor(500)
    .deleteChars(11)
    .typeString("<strong>Vue.js</strong>.")
    .pauseFor(500)
    .deleteChars(17)
    .typeString(" ! Bienvenue à tous !")
    .start();
});

// fermeture
buttonClosePopUpAboutMe.addEventListener("click", function () {
  popUpAboutMe.classList.toggle("appear");
  premierPlan.classList.toggle("blur");
  newElement.classList.toggle("blur");
});
