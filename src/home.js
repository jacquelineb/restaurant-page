import restaurantImg from './restaurant-photo.png'

function loadHomeContent() {
  const homeContent = document.createElement('div');
  homeContent.setAttribute('id', 'home-content');

  const mainHeader = document.createElement('h1');
  mainHeader.textContent = 'The Canteen';
  homeContent.appendChild(mainHeader);

  const spiel = document.createElement('p');
  spiel.textContent = 'This is the best restaurant in the world. The food is great. The service is great. The prices are great. The view is great. 10/10.';
  homeContent.appendChild(spiel);

  const img = new Image();
  img.src = restaurantImg;
  img.alt = 'interior of a restaurant';
  homeContent.appendChild(img);

  document.getElementById('content').appendChild(homeContent);
}

export { loadHomeContent };