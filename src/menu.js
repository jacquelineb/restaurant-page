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
    name: 'Meat Platter',
    img: meatPlatter,
  },
  {
    name: 'Fish Platter',
    img: fishPlatter,
  },
  {
    name: 'Veggie Platter',
    img: veggiePlatter,
  },
];

function loadMenuContent() {
  const menuContent = document.createElement('div');
  menuContent.setAttribute('id', 'menu-content');

  menu.forEach((item) => {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');
    const itemName = document.createElement('p');
    itemName.classList.add('meal-name');
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