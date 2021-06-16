import restaurantImg from './restaurant-photo.png'

function setupHomepage() {
  const mainHeader = document.createElement('h1');
  mainHeader.textContent = 'Restaurant Homepage';
  document.body.appendChild(mainHeader);

  const spiel = document.createElement('p');
  spiel.textContent = 'This is the best restaurant in the world. The food is great. The service is great. The prices are great. The view is great. 10/10.';
  document.body.appendChild(spiel);

  const img = new Image();
  img.src = restaurantImg;
  img.alt = 'interior of a restaurant';
  document.body.appendChild(img);
}

export { setupHomepage };