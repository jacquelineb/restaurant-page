import { loadContactPage } from './contact.js';
import { loadHomePage } from './home.js';
import { loadMenuPage } from './menu.js';

createNavBar();
loadHomePage();

function createNavBar() {
  const nav = document.createElement('nav');
  const homeLink = document.createElement('a');
  homeLink.setAttribute('data-name', 'home-content');
  homeLink.textContent = 'HOME';
  nav.appendChild(homeLink);

  const menuLink = document.createElement('a');
  menuLink.setAttribute('data-name', 'menu-content');
  menuLink.textContent = 'MENU';
  nav.appendChild(menuLink);

  const contactLink = document.createElement('a');
  contactLink.setAttribute('data-name', 'contact-content');
  contactLink.textContent = 'CONTACT';
  nav.appendChild(contactLink);

  nav.childNodes.forEach((navLink) => {
    navLink.href = "#";
    navLink.addEventListener('click', switchContents);
  });
  document.body.prepend(nav);
}

function switchContents(e) {
  const contentToShow = e.target.dataset.name;
  const currContent = document.getElementById('content').firstChild;
  if (currContent.id !== contentToShow) {
    currContent.remove();
    if (contentToShow == 'home-content') {
      loadHomePage();
    }
    else if (contentToShow == 'menu-content') {
      loadMenuPage();
    }
    else {
      loadContactPage();
    }
  }
}