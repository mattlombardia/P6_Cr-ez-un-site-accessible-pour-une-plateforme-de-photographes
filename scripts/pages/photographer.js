// Mettre le code JavaScript lié à la page photographer.html

console.table();

  //  "URL Search Params" Method

async function getPhotographer() {
  const id = window.location.search.split('id=')[1];

  const photographerData = await (
    fetch('./data/photographers.json')
      .then((response) => response.json())
  );