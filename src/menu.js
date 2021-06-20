import chefsChoice from './chefs_choice.png';
import fishPlatter from './fish_platter.png';
import meatPlatter from './meat_platter.png';
import veggiePlatter from './veggie_platter.png';

const menu = [
  {
    name: 'Chef\'s Choice',
    img: chefsChoice,
  },
  {
    name: 'Fish Platter',
    img: fishPlatter,
  },
  {
    name: 'Meat Platter',
    img: meatPlatter,
  },
  {
    name: 'Veggie Platter',
    img: veggiePlatter,
  },
];

function loadMenuContent() {
  const menuContent = document.createElement('div');
  menuContent.setAttribute('id', 'menu-content');
  /*
  const mainHeader = document.createElement('h1');
  mainHeader.textContent = 'Menu';
  menuContent.appendChild(mainHeader);
  */

  menu.forEach((item) => {
    const menuItem = document.createElement('div');
    const itemName = document.createElement('p');
    itemName.textContent = item.name;
    menuItem.appendChild(itemName);

    const itemImg = new Image();
    itemImg.src = item.img;
    itemImg.setAttribute('id', 'menu-item-img');
    menuItem.appendChild(itemImg);

    menuContent.appendChild(menuItem);
  });

  document.getElementById('content').appendChild(menuContent);
}

export { loadMenuContent };