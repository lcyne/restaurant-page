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
  const wrapper = document.createElement('div');

  const image = document.createElement('img');
  image.src = dish.image;
  image.alt = dish.name;
  image.style.cssFloat = 'left';
  image.style.maxHeight = '100%';
  image.style.maxWidth = '100%';
  image.style.height = '70px';
  image.style.width = '160px';
  image.style.margin = '0 1em';
  wrapper.appendChild(image);

  const title = document.createElement('h3');
  title.textContent = `${dish.name} (${dish.price + currency})`;
  title.style.fontSize = '1.25em';
  title.style.fontWeight = 'bold';
  title.style.textAlign = 'left';
  wrapper.appendChild(title);
  
  const description = document.createElement('p');
  description.textContent = dish.description;
  description.style.fontStyle = 'italic';
  description.style.textAlign = 'left';
  wrapper.appendChild(description);

  dishItem.appendChild(wrapper);
  return dishItem;
};

export default _render();