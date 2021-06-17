import restaurantImg from './restaurant-photo.png'

function setupHomePage() {
  const homeContent = document.createElement('div');
  homeContent.setAttribute('id', 'home-content');

  const mainHeader = document.createElement('h1');
  mainHeader.textContent = 'Restaurant Homepage';
  homeContent.appendChild(mainHeader);

  const spiel = document.createElement('p');
  spiel.textContent = 'This is the best restaurant in the world. The food is great. The service is great. The prices are great. The view is great. 10/10.';
  homeContent.appendChild(spiel);

  const img = new Image();
  img.src = restaurantImg;
  img.alt = 'interior of a restaurant';
  homeContent.appendChild(img);

  document.body.appendChild(homeContent);
}

export { setupHomePage };