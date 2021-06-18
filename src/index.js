import './style.css';
import { loadHomeContent } from './home.js';
import { loadMenuContent } from './menu.js';
import { loadContactContent } from './contact.js';

initializePage();

function initializePage() {
  createNavBar();
  document.getElementById('home-tab').classList.add('active-tab');
  loadHomeContent();
}

function createNavBar() {
  const nav = document.createElement('nav');
  nav.setAttribute('id', 'main-nav');
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
    navItem.classList.add('tab-link');
    navItem.addEventListener('click', switchTab);
  });

  document.body.prepend(nav);
}

function switchTab(e) {
  const currContent = document.getElementById('content').firstChild;
  currContent.remove();

  const nav = document.getElementById('main-nav');
  nav.childNodes.forEach((navItem) => {
    navItem.classList.remove('active-tab');
  });

  const tabClicked = e.target;
  tabClicked.classList.add('active-tab');
  if (tabClicked.id == 'home-tab') {
    loadHomeContent();
  }
  else if (tabClicked.id == 'menu-tab') {
    loadMenuContent();
  }
  else {
    loadContactContent();
  }
}