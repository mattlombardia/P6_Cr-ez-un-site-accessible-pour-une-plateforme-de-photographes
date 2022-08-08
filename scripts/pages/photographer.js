// Mettre le code JavaScript lié à la page photographer.html

console.table();

//  "URL Search Params" Method

// async function getPhotographer() {
//   const id = window.location.search.split("id=")[1];

//   console.table(id);

//   const photographerData = await fetch("./data/photographers.json").then(
//     (response) => response.json()
//   );

//   console.table(photographerData);

//   photographerData.photographers = photographerData.photographers.filter(
//     (photographer) => photographer.id == id
//   )[0];
//   photographerData.media = photographerData.media.filter(
//     (media) => media.photographerId == id
//   );

//   return photographerData;
// }

// async function init() {
//   // Récupère les datas des photographes
//   const { photographer } = await getPhotographer();
//   displayData(photographer);
// }
// console.table(init);

// Fonction appelée quand page chargée

// async function displayData(photographers) {
//   const photographersSection = document.querySelector(".photographer_section");

//   photographers.forEach((photographer) => {
//     const photographerModel = photographerFactory(photographer);
//     const userCardDOM = photographerModel.getUserCardDOM();
//     photographersSection.appendChild(userCardDOM);
//   });
// }

// init();

/* Fonction factory */

// Création du DOM après avoir structuré et stylisé la page en HTML/CSS

const headerPhotograph = document.querySelector(".photographer_header");
headerPhotograph.innerHTML = "";

// console.group(headerPhotograph);

// console.groupCollapsed(headerPhotograph);

console.profile(headerPhotograph);

const identityContainer = document.createElement("div");
identityContainer.classList.add("photographer_identity");

const photographerName = document.createElement("h2");
photographerName.classList.add("photographer_name");
photographerName.textContent = "Name First Name";

const photographerLocation = document.createElement("h3");
photographerLocation.classList.add("photographer_location");
photographerLocation.textContent = "City, Country";

const photographerSlogan = document.createElement("h4");
photographerSlogan.classList.add("photographer_slogan");
photographerSlogan.textContent = "Lorem ipsum dolor sit amet";

const photographerContactModal = document.createElement("button");
photographerContactModal.classList.add("photographer_modal");
photographerContactModal.textContent = "Contactez-moi";

const photographerPicture = document.createElement("img");
photographerPicture.classList.add("photographer_picture");
photographerPicture.setAttribute("src", "./assets/photographers/MimiKeel.jpg");
photographerPicture.setAttribute("alt", "Photographer picture");

headerPhotograph.appendChild(identityContainer);
identityContainer.appendChild(photographerName);
identityContainer.appendChild(photographerLocation);
identityContainer.appendChild(photographerSlogan);
headerPhotograph.appendChild(photographerContactModal);
headerPhotograph.appendChild(photographerPicture);
