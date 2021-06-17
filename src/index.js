import { setupHomePage } from './home.js';

createNavBar();
setupHomePage();

function createNavBar() {
  const content = document.getElementById('content');
  const nav = document.createElement('nav');
  const homeLink = document.createElement('a');
  homeLink.textContent = 'HOME';
  homeLink.href = '#';

  nav.appendChild(homeLink);
  content.appendChild(nav);

  const menuLink = document.createElement('a');
  menuLink.textContent = 'MENU';
  menuLink.href = '#';
  nav.appendChild(menuLink);

  const contactLink = document.createElement('a');
  contactLink.textContent = 'CONTACT';
  contactLink.href = '#';
  nav.appendChild(contactLink);
}
