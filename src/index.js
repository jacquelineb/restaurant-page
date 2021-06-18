import { loadHomeContent } from './home.js';
import { loadMenuContent } from './menu.js';
import { loadContactContent } from './contact.js';

createNavBar();
loadHomeContent();

function createNavBar() {
  const nav = document.createElement('nav');
  const homeTab = document.createElement('a');
  homeTab.setAttribute('id', 'home-tab');
  homeTab.textContent = 'HOME';
  nav.appendChild(homeTab);

  const menuTab = document.createElement('a');
  menuTab.setAttribute('id', 'menu-tab');
  menuTab.textContent = 'MENU';
  nav.appendChild(menuTab);

  const contactTab = document.createElement('a');
  contactTab.setAttribute('id', 'contact-tab');
  contactTab.textContent = 'CONTACT';
  nav.appendChild(contactTab);

  nav.childNodes.forEach((navItem) => {
    navItem.href = "#";
    navItem.addEventListener('click', switchTab);
  });

  document.body.prepend(nav);
}

function switchTab(e) {
  const tabToDisplay = e.target.id;
  const currContent = document.getElementById('content').firstChild;
  if (currContent.id !== tabToDisplay) {
    currContent.remove();
    if (tabToDisplay == 'home-tab') {
      loadHomeContent();
    }
    else if (tabToDisplay == 'menu-tab') {
      loadMenuContent();
    }
    else {
      loadContactContent();
    }
  }
}