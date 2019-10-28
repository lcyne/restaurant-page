const pathToImage = 'images/homepage/homepage.webp'
const altText = "Facade of our restaurant with our outdoor tables";

const _render = () => {
  const homepage = document.createElement('div');
  homepage.id = 'homepage';

  const components = {
    image: _renderImage(),
    title: _renderTitle(),
    paragraph: _renderParagraph(),
  };

  for (let prop in components) {
    homepage.appendChild(components[prop]);
  }
  
  return homepage;
};

const _renderImage = () => {
  const component = document.createElement('div');
  component.id = "homepage-image";

  const image = document.createElement('img');
  image.src = pathToImage;
  image.alt = altText;

  component.appendChild(image);

  return component;
};

const _renderTitle = () => {
  const title = document.createElement('h1');
  title.textContent = "Bonjour Baguette";
  title.style.fontSize = '2em';
  title.style.fontWeight = 'bold';
  return title;
};

const _renderParagraph = () => {
  const paragraph = document.createElement('p');
  paragraph.textContent = 'We offer to serve you with the finest French ' +
  'cuisine in the heart of the capital. Immerse in the Parisian atmosphere ' +
  'while enjoying our best dishes for an unforgettable experience.';
  return paragraph;
};

export default _render();