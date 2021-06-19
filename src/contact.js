import LocationImg from './location.png'

const contactInfo = {
  Phone: '555-555-5556',
  Location: '582010 North Astera, New World',
  Email: 'thecanteen@realemail.com',
}

function loadContactContent() {
  const contactContent = document.createElement('div');
  contactContent.setAttribute('id', 'contact-content');
  const mainHeader = document.createElement('h1');
  mainHeader.textContent = 'Contact';
  contactContent.appendChild(mainHeader);
  document.getElementById('content').appendChild(contactContent);

  for (const data in contactInfo) {
    const info = document.createElement('p');
    info.textContent = `${data}: ${contactInfo[data]}`;
    contactContent.appendChild(info);
  }

  const map = new Image();
  map.src = LocationImg;
  contactContent.appendChild(map);
}

export { loadContactContent };