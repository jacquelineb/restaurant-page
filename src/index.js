import { loadContactPage } from './contact.js';
import { loadHomePage } from './home.js';
import { loadMenuPage } from './menu.js';

createNavBar();
loadHomePage();

function createNavBar() {
  const nav = document.createElement('nav');
  const homeLink = document.createElement('a');
  homeLink.textContent = 'HOME';
  homeLink.href = '#';
  homeLink.addEventListener('click', () => {
    const homeContent = document.getElementById('home-content');
    const currContent = document.getElementById('content').firstChild;
    if (currContent !== homeContent) {
      currContent.remove();
      loadHomePage();
    }
  });
  nav.appendChild(homeLink);

  const menuLink = document.createElement('a');
  menuLink.textContent = 'MENU';
  menuLink.href = '#';
  menuLink.addEventListener('click', () => {
    const menuContent = document.getElementById('menu-content');
    const currContent = document.getElementById('content').firstChild;
    if (currContent !== menuContent) {
      currContent.remove();
      loadMenuPage();
    }
  });
  nav.appendChild(menuLink);

  const contactLink = document.createElement('a');
  contactLink.textContent = 'CONTACT';
  contactLink.href = '#';
  contactLink.addEventListener('click', () => {
    const contactContent = document.getElementById('contact-content');
    const currContent = document.getElementById('content').firstChild;
    if (currContent !== contactContent) {
      currContent.remove();
      loadContactPage();
    }
  });
  nav.appendChild(contactLink);

  document.body.prepend(nav);
}
