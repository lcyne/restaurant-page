const _Dish = (image, name, description, price) => {
  return {
    image,
    name,
    description,
    price,
  };
};

const currency = '€';

const dishes = [
  _Dish(
    'images/menu/omelet.webp',
    'Omelette au fromage',
    'Delicious omelet with cheese.',
    5
  ),
  _Dish(
    'images/menu/croissant-choco.webp',
    'Croissant marbré',
    'Crispy croissant with chocolate added to the dough.',
    1
  ),
];

const _render = () => {
  const menu = document.createElement('div');
  menu.id = 'menu';
  menu.classList.add('invisible', 'hidden');

  const list = document.createElement('ul');
  dishes.forEach((dish) => {list.appendChild(_createDish(dish))});
  menu.appendChild(list);

  return menu;
};

const _createDish = (dish) => {
  const dishItem = document.createElement('li');

  const image = document.createElement('img');
  image.src = dish.image;
  image.alt = dish.name;
  dishItem.appendChild(image);

  const title = document.createElement('h3');
  title.textContent = `${dish.name} (${dish.price + currency})`;
  dishItem.appendChild(title);
  
  const description = document.createElement('p');
  description.textContent = dish.description;
  dishItem.appendChild(description);

  return dishItem;
};

export default _render();