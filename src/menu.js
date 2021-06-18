function loadMenuPage() {
  const menuContent = document.createElement('div');
  menuContent.setAttribute('id', 'menu-content');
  const mainHeader = document.createElement('h1');
  mainHeader.textContent = 'Menu';
  menuContent.appendChild(mainHeader);

  document.getElementById('content').appendChild(menuContent);
}

export { loadMenuPage };