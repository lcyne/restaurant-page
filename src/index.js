import homepage from './homepage';
import contact from './contact';
import menu from './menu';

const content = document.querySelector('#content');

const nav = document.createElement('nav');

const _Tab = (id, content, text, active) => {
  const tab = document.createElement('button');
  tab.id = id;
  tab.classList.add('tab');
  tab.setAttribute('data-page', content);
  tab.textContent = text;
  if (active) {
    tab.classList.add('active');
  }

  return tab;
}

const tabs = {
  homepage: _Tab('homepage-tab', 'homepage', 'Home', true),
  menu: _Tab('menu-tab', 'menu', 'Menu'),
  contact: _Tab('contact-tab', 'contact', 'Contact'),
};

const _initTabs = () => {
  for (let key in tabs) {
    tabs[key].addEventListener('click', switchTabs);
    nav.appendChild(tabs[key]);
  }
};

const switchTabs = (e) => {
  _hideActiveTabContent();
  _showTabContent(e.target);
};

const _hideActiveTabContent = () => {
  for (let key in tabs) {
    if (tabs[key].classList.contains('active')) {
      _hideTabContent(tabs[key]);
    }
  }
};

const _hideTabContent = (tab) => {
  const page = document.querySelector(`#${tab.getAttribute('data-page')}`);
  page.classList.add('hidden');
  tab.classList.remove('active');
};

const _showTabContent = (tab) => {
  const page = document.querySelector(`#${tab.getAttribute('data-page')}`);
  page.classList.remove('hidden');
  tab.classList.add('active');
};

_initTabs();
content.appendChild(nav);
content.appendChild(homepage);
content.appendChild(contact);
content.appendChild(menu);