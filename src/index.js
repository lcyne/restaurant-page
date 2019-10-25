import renderHomepage from './homepage';
import renderContact from './contact';
import renderMenu from './menu';
const content = document.querySelector('#content');
content.appendChild(renderHomepage());
content.appendChild(renderContact());
content.appendChild(renderMenu());