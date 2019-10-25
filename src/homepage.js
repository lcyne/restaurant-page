const pathToImage = 'https://images.unsplash.com/photo-1546983620-53cb1c496917?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80';
const altText = "Facade of our restaurant with our outdoor tables";
const imageCreditBadge = '<a style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px" href="https://unsplash.com/@dnovac?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from Dan Novac"><span style="display:inline-block;padding:2px 3px"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-2px;fill:white" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg></span><span style="display:inline-block;padding:2px 3px">Dan Novac</span></a>';

const render = () => {
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

  const credit = document.createElement('div');
  credit.innerHTML = `Photo by ${imageCreditBadge}`;

  component.appendChild(image);
  component.appendChild(credit);

  return component;
};

const _renderTitle = () => {
  const title = document.createElement('h1');
  title.textContent = "Welcome to Paris-Beaubourg";
  return title;
};

const _renderParagraph = () => {
  const paragraph = document.createElement('p');
  paragraph.textContent = 'We offer to serve you with the finest French' +
  'cuisine in the heart of the capital. Immerse in the Parisian lifestyle ' +
  'while enjoying our best dishes for an unforgettable experience.';
  return paragraph;
};

export { render as default };