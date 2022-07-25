function photographerFactory(data) {
  const { id, name, portrait, city, country, tagline, price } = data;

  const picture = `assets/photographers/${portrait}`;

  // PAGE ACCUEIL : Création HTML Layout avec data photographers

  function getUserCardDOM() {
    const article = document.createElement("article");

    const img = document.createElement("img");
    img.setAttribute("src", picture);

    const h2 = document.createElement("h2");
    h2.textContent = name;

    // Utilisation du template strings pour 2 valeurs utilisées
    // Utilisation du place holder `${nomvariable}

    const h3 = document.createElement("h3");
    h3.textContent = `${city}, ${country}`;

    const h4 = document.createElement("h4");
    h4.textContent = tagline;

    const p = document.createElement("p");
    p.textContent = `${price}€/jour`;

    const ahref = document.createElement("a");
    ahref.setAttribute("class", "link");
    ahref.setAttribute("aria-label", `${name}`);
    ahref.setAttribute("href", `photographer.html?id=${id}`);

    // const article = document.createElement("article");
    // const img = document.createElement("img");

    // article.setAttribute("class", "card-photographer");

    ahref.appendChild(article);
    article.appendChild(img);
    article.appendChild(h2);
    article.appendChild(h3);
    article.appendChild(h4);
    article.appendChild(p);

    // article.appendChild(cityCountry);
    // article.appendChild(tagline);
    // article.appendChild(price);

    return ahref;

    return article;
  }
  return {
    id,
    name,
    picture,
    city,
    country,
    tagline,
    price,
    getUserCardDOM,
  };
}

console.table(photographerFactory);

// Récupérer le lien du photographe
// Create HTML Layout with photograph data

// méthode URLSEARCH PARAMS

// Récupérer médias du Photographe

// static getPhotographerById(id) {
//     return this.getPhotographerList().then((photographers) =>
//       photographers.find((photographer) => photographer.id == id)
//     );
//   }