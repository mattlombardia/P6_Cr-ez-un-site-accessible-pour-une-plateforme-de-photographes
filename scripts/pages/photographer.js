// Mettre le code JavaScript lié à la page photographer.html

//  "URL Search Params" Method

async function getPhotographer() {
  // const id = window.location.search.split("id=")[1];

  const str = window.location.href;
  const url = new URL(str);
  const id = url.searchParams.get("id");

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
  console.log(photographerData);

  return photographerData;
}

async function init() {
  // Récupère les datas des photographes
  const { photographer } = await getPhotographer();
  console.log(photographer);
  displayData(photographer.photographers);
}

// Fonction appelée quand page chargée

function displayData(photographer) {
  const photographersSection = document.getElementById("photographeInfos");
  const profileModel = photographerFactory(photographer);
  const profiles = profileModel.getProfilePage();
  photographersSection.appendChild(profiles);
}

init();

/* Fonction factory */
