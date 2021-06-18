function loadContactContent() {
  const contactContent = document.createElement('div');
  contactContent.setAttribute('id', 'contact-content');
  const mainHeader = document.createElement('h1');
  mainHeader.textContent = 'Contact';
  contactContent.appendChild(mainHeader);
  document.getElementById('content').appendChild(contactContent);
}

export { loadContactContent };