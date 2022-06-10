  // Penser à remplacer par les données récupérées dans le json
  // FETCH METHOD : ECMAScript 6 alias JavaScript 2015
  // La méthode fetch() renvoie une promesse (un objet de type Promise) qui va se résoudre avec un objet Response 

const getPhotographers = async () => { 
const { photographers } = await ( fetch('./data/photographers.json') 
.then((response) => response.json()) ); 
return { photographers }; 
};
    



  // et bien retourner le tableau photographers seulement une fois
  

async function displayData(photographers) {
  const photographersSection = document.querySelector(".photographer_section");

  photographers.forEach((photographer) => {
    const photographerModel = photographerFactory(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
  });
}

async function init() {
  // Récupère les datas des photographes
  const { photographers } = await getPhotographers();
  displayData(photographers);
}
console.table(init);

init();
