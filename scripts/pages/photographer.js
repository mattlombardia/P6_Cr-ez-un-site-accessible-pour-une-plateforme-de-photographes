// Mettre le code JavaScript lié à la page photographer.html

console.table();

//  "URL Search Params" Method

async function getPhotographer() {
  const id = window.location.search.split("id=")[1];

  console.table(id);

  const photographerData = await fetch("./data/photographers.json").then(
    (response) => response.json()
  );

  console.table(photographerData);

  photographerData.photographers = photographerData.photographers.filter(
    (photographer) => photographer.id == id
  )[0];
  photographerData.media = photographerData.media.filter(
    (media) => media.photographerId == id
  );

  return photographerData;
}

async function init() {
  // Récupère les datas des photographes
  const { photographer } = await getPhotographer();
  displayData(photographer);
}
console.table(init);

// Fonction appelée quand page chargée

async function displayData(photographers) {
  const photographersSection = document.querySelector(".photographer_section");

  photographers.forEach((photographer) => {
    const photographerModel = photographerFactory(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
  });
}

init();
