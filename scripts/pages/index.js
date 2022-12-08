// Données récupérées dans le json remplacées
// FETCH METHOD : ECMAScript 6 alias JavaScript 2015
// La méthode fetch() renvoie une promesse (un objet de type Promise) qui va se résoudre avec un objet Response

// pas variable, c'est une fonction fléchée () =>
const getPhotographers = async () => {
  const {
    photographers
  } = await fetch("./data/photographers.json").then(
    (response) => response.json()
  );
  return {
    photographers,
  };
};

// Retourner le tableau photographers seulement une fois

// Function et (UNE VARIABABLE qui est un paramètre)
async function displayData(photographers) {
  const photographersSection = document.querySelector(".photographer_section");

  photographers.forEach((photographer) => {
    const photographerModel = photographerFactory(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
  });
}

// Function et (UNE VARIABABLE qui est un paramètre)
async function init() {
  // Récupère les datas des photographes
  const {
    photographers
  } = await getPhotographers();
  displayData(photographers);
}
console.log(init);

// Fonction appelée quand page chargée

init();