import meowster from './meowster.png'

function loadHomeContent() {
  const homeContent = document.createElement('div');
  homeContent.setAttribute('id', 'home-content');

  const mainHeader = document.createElement('h1');
  mainHeader.textContent = 'The Canteen';
  homeContent.appendChild(mainHeader);

  const spiel = document.createElement('p');
  spiel.setAttribute('id', 'restaurant-spiel');
  spiel.textContent = 'This is the best restaurant in the world. The food is great. The service is great. The prices are great. The view is great. 10/10.';
  homeContent.appendChild(spiel);

  const img = new Image();
  img.src = meowster;
  img.setAttribute('id', 'meowster-img');
  img.alt = 'a chef and his cooks';
  homeContent.appendChild(img);

  document.getElementById('content').appendChild(homeContent);
}

export { loadHomeContent };