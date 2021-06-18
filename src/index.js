import { loadHomePage } from './home.js';

createNavBar();
loadHomePage();

function createNavBar() {
  const nav = document.createElement('nav');
  const homeLink = document.createElement('a');
  homeLink.textContent = 'HOME';
  homeLink.href = '#';
  homeLink.addEventListener('click', () => {
    //const homeContent = document.getElementById('home-content');
    // get the child of #content
    // if this child is not homeContent, remove it and load homeContent
    // if this child is homeContent, don't need to do anything
  });
  nav.appendChild(homeLink);

  const menuLink = document.createElement('a');
  menuLink.textContent = 'MENU';
  menuLink.href = '#';
  nav.appendChild(menuLink);

  const contactLink = document.createElement('a');
  contactLink.textContent = 'CONTACT';
  contactLink.href = '#';
  nav.appendChild(contactLink);

  document.body.prepend(nav);
}
