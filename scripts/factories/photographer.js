function photographerFactory(data) {
  const { name, portrait, city, country, tagline, price } = data;

  const picture = `assets/photographers/${portrait}`;

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

    article.appendChild(img);
    article.appendChild(h2);
    article.appendChild(h3);
    article.appendChild(h4);
    article.appendChild(p);

    return article;
  }
  return { name, picture, city, country, tagline, price, getUserCardDOM };
}

console.table(photographerFactory);

// Récupérer le lien du photographe
// Create HTML Layout with photograph data 

function getUserCardDOM() { const ahref = document.createElement('a'); ahref.setAttribute('class', 'link'); ahref.setAttribute('aria-label', `${name}`); ahref.setAttribute('href', `photographer.html?id=${id}`); const article = document.createElement('article'); const img = document.createElement('img'); article.setAttribute('class', 'card-photographer');




// méthode URLSEARCH PARAMS
