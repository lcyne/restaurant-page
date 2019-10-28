/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst contacts = {\n  address: 'Restaurant address',\n  phone: '+33 1 23 45 67 89',\n  email: 'restaurant@email.address',\n};\n\nconst _render = () => {\n  const contactInfo = document.createElement('div');\n  contactInfo.id = 'contact';\n  contactInfo.classList.add('invisible', 'hidden');\n\n  const contactInfoList = document.createElement('ul');\n  for (let item in contacts) {\n    contactInfoList.appendChild(_createContact(item));\n  }\n  contactInfo.appendChild(contactInfoList);\n\n  contactInfo.style.textAlign = 'left';\n  \n  return contactInfo;\n};\n\nconst _createContact = (item) => {\n  const line = document.createElement('li');\n  line.textContent = `${item}: ${contacts[item]}`;\n  line.style.margin = '1em 0 1em 0';\n  return line;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_render());\n\n//# sourceURL=webpack:///./src/contact.js?");

/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst pathToImage = 'images/homepage/homepage.webp'\nconst altText = \"Facade of our restaurant with our outdoor tables\";\n\nconst _render = () => {\n  const homepage = document.createElement('div');\n  homepage.id = 'homepage';\n\n  const components = {\n    image: _renderImage(),\n    title: _renderTitle(),\n    paragraph: _renderParagraph(),\n  };\n\n  for (let prop in components) {\n    homepage.appendChild(components[prop]);\n  }\n  \n  return homepage;\n};\n\nconst _renderImage = () => {\n  const component = document.createElement('div');\n  component.id = \"homepage-image\";\n\n  const image = document.createElement('img');\n  image.src = pathToImage;\n  image.alt = altText;\n\n  component.appendChild(image);\n\n  return component;\n};\n\nconst _renderTitle = () => {\n  const title = document.createElement('h1');\n  title.textContent = \"Bonjour Baguette\";\n  title.style.fontSize = '2em';\n  title.style.fontWeight = 'bold';\n  return title;\n};\n\nconst _renderParagraph = () => {\n  const paragraph = document.createElement('p');\n  paragraph.textContent = 'We offer to serve you with the finest French ' +\n  'cuisine in the heart of the capital. Immerse in the Parisian atmosphere ' +\n  'while enjoying our best dishes for an unforgettable experience.';\n  return paragraph;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_render());\n\n//# sourceURL=webpack:///./src/homepage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage */ \"./src/homepage.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n\n\n\n\nconst content = document.querySelector('#content');\n\nconst nav = document.createElement('nav');\n\nconst _Tab = (id, content, text, active) => {\n  const tab = document.createElement('button');\n  tab.id = id;\n  tab.classList.add('tab');\n  tab.setAttribute('data-page', content);\n  tab.textContent = text;\n  if (active) {\n    tab.classList.add('active');\n  }\n\n  return tab;\n}\n\nconst tabs = {\n  homepage: _Tab('homepage-tab', 'homepage', 'Home', true),\n  menu: _Tab('menu-tab', 'menu', 'Menu'),\n  contact: _Tab('contact-tab', 'contact', 'Contact'),\n};\n\nconst _initTabs = () => {\n  for (let key in tabs) {\n    tabs[key].addEventListener('click', switchTabs);\n    nav.appendChild(tabs[key]);\n  }\n};\n\nconst switchTabs = (e) => {\n  _hideActiveTabContent();\n  _showTabContent(e.target);\n};\n\nconst _hideActiveTabContent = () => {\n  for (let key in tabs) {\n    if (tabs[key].classList.contains('active')) {\n      _hideTabContent(tabs[key]);\n    }\n  }\n};\n\nconst _hideTabContent = (tab) => {\n  const page = document.querySelector(`#${tab.getAttribute('data-page')}`);\n  page.classList.add('hidden');\n  tab.classList.remove('active');\n};\n\nconst _showTabContent = (tab) => {\n  const page = document.querySelector(`#${tab.getAttribute('data-page')}`);\n  page.classList.remove('hidden');\n  tab.classList.add('active');\n};\n\n_initTabs();\ncontent.appendChild(nav);\ncontent.appendChild(_homepage__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\ncontent.appendChild(_contact__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\ncontent.appendChild(_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst _Dish = (image, name, description, price) => {\n  return {\n    image,\n    name,\n    description,\n    price,\n  };\n};\n\nconst currency = '€';\n\nconst dishes = [\n  _Dish(\n    'images/menu/omelet.webp',\n    'Omelette au fromage',\n    'Delicious omelet with cheese.',\n    5\n  ),\n  _Dish(\n    'images/menu/croissant-choco.webp',\n    'Croissant marbré',\n    'Crispy croissant with chocolate added to the dough.',\n    1\n  ),\n];\n\nconst _render = () => {\n  const menu = document.createElement('div');\n  menu.id = 'menu';\n  menu.classList.add('invisible', 'hidden');\n\n  const list = document.createElement('ul');\n  dishes.forEach((dish) => {list.appendChild(_createDish(dish))});\n  menu.appendChild(list);\n\n  return menu;\n};\n\nconst _createDish = (dish) => {\n  const dishItem = document.createElement('li');\n  const wrapper = document.createElement('div');\n\n  const image = document.createElement('img');\n  image.src = dish.image;\n  image.alt = dish.name;\n  image.style.cssFloat = 'left';\n  image.style.maxHeight = '100%';\n  image.style.maxWidth = '100%';\n  image.style.height = '70px';\n  image.style.width = '160px';\n  image.style.margin = '0 1em';\n  wrapper.appendChild(image);\n\n  const title = document.createElement('h3');\n  title.textContent = `${dish.name} (${dish.price + currency})`;\n  title.style.fontSize = '1.25em';\n  title.style.fontWeight = 'bold';\n  title.style.textAlign = 'left';\n  wrapper.appendChild(title);\n  \n  const description = document.createElement('p');\n  description.textContent = dish.description;\n  description.style.fontStyle = 'italic';\n  description.style.textAlign = 'left';\n  wrapper.appendChild(description);\n\n  dishItem.appendChild(wrapper);\n  return dishItem;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_render());\n\n//# sourceURL=webpack:///./src/menu.js?");

/***/ })

/******/ });