/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_page_load_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/page-load.js */ \"./src/modules/page-load.js\");\n/* harmony import */ var _modules_home_load_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/home-load.js */ \"./src/modules/home-load.js\");\n/* harmony import */ var _modules_menu_load_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/menu-load.js */ \"./src/modules/menu-load.js\");\n/* harmony import */ var _modules_contact_load_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/contact-load.js */ \"./src/modules/contact-load.js\");\n// npx webpack\n// npx webpack --watch\n\n\n\n\n\n\n\nlet navigate = () => {\n  let home = document.getElementById(\"nav-home\");\n  let menu = document.getElementById(\"nav-menu\");\n  let contact = document.getElementById(\"nav-contact\");\n\nhome.addEventListener(\"click\", _modules_home_load_js__WEBPACK_IMPORTED_MODULE_1__.default);\nmenu.addEventListener(\"click\", _modules_menu_load_js__WEBPACK_IMPORTED_MODULE_2__.default);\ncontact.addEventListener(\"click\", _modules_contact_load_js__WEBPACK_IMPORTED_MODULE_3__.default);\n}\n\nlet init = () => {\n  ;(0,_modules_page_load_js__WEBPACK_IMPORTED_MODULE_0__.default)();\n  (0,_modules_home_load_js__WEBPACK_IMPORTED_MODULE_1__.default)();\n  navigate();\n}\n\ninit();\n\n\n//# sourceURL=webpack://restaurant-assignment/./src/index.js?");

/***/ }),

/***/ "./src/modules/contact-load.js":
/*!*************************************!*\
  !*** ./src/modules/contact-load.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _toggle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toggle.js */ \"./src/modules/toggle.js\");\n\n\n\n\nfunction contactLoad(){\n  let main = document.querySelector(\"#main\");\n  main.textContent = \"\";\n\n  let contact_section = document.createElement(\"section\");\n  let heading = document.createElement(\"h1\");\n  let sub_heading = document.createElement(\"h2\");\n  let phone_p = document.createElement(\"p\");\n  let email_p = document.createElement(\"p\");\n  let location_p = document.createElement(\"p\");\n\n  contact_section.id = \"contact-section\";\n  heading.className = \"heading\";\n  sub_heading.className = \"sub-heading\";\n\n  heading.innerHTML = \"Contact\";\n  sub_heading.innerHTML = \"Open Daily from 12pm - 11pm\";\n\n  phone_p.innerHTML = \"Phone: 123-456-7890\";\n  email_p.innerHTML = \"Email: ipsum@lorem.com\";\n  location_p.innerHTML = \"Location: 231 Vic Ave, Victoria B.C\";\n\n\n  contact_section.appendChild(heading);\n  contact_section.appendChild(sub_heading);\n  contact_section.appendChild(phone_p);\n  contact_section.appendChild(email_p);\n  contact_section.appendChild(location_p);\n\n  main.appendChild(contact_section);\n  (0,_toggle_js__WEBPACK_IMPORTED_MODULE_0__.default)('#nav-contact')\n\n}\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactLoad);\n\n\n//# sourceURL=webpack://restaurant-assignment/./src/modules/contact-load.js?");

/***/ }),

/***/ "./src/modules/home-load.js":
/*!**********************************!*\
  !*** ./src/modules/home-load.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _toggle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toggle.js */ \"./src/modules/toggle.js\");\n\n\n\n\n\n\nfunction homeLoad(){\n let main = document.querySelector(\"#main\")\n  main.textContent = \"\";\n\n  let hero_section = document.createElement(\"section\");\n  let heading = document.createElement(\"h1\");\n  let sub_heading = document.createElement(\"h2\");\n\n  hero_section.id = \"hero-section\";\n  heading.className = \"heading\";\n  sub_heading.className = \"sub-heading\";\n\n  heading.innerHTML = \"Leoni's Tapas\";\n  sub_heading.innerHTML = \"Dine, Share, Enjoy\";\n\n  hero_section.appendChild(heading);\n  hero_section.appendChild(sub_heading);\n\n  main.appendChild(hero_section);\n  (0,_toggle_js__WEBPACK_IMPORTED_MODULE_0__.default)('#nav-home');\n\n}\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homeLoad);\n\n\n//# sourceURL=webpack://restaurant-assignment/./src/modules/home-load.js?");

/***/ }),

/***/ "./src/modules/menu-load.js":
/*!**********************************!*\
  !*** ./src/modules/menu-load.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _toggle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toggle.js */ \"./src/modules/toggle.js\");\n\n\n\n\nfunction menuLoad(){\n  let main = document.querySelector(\"#main\");\n  main.textContent = \"\";\n\n  let menu_section = document.createElement(\"section\");\n  let menu_img = document.createElement(\"img\");\n\n  menu_section.id = \"menu-section\";\n  menu_img.src = \"imgs/menu-desktop.png\";\n  menu_img.alt = \"menu\";\n\n  menu_section.appendChild(menu_img);\n\n  main.appendChild(menu_section);\n  (0,_toggle_js__WEBPACK_IMPORTED_MODULE_0__.default)('#nav-menu');\n\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuLoad);\n\n\n//# sourceURL=webpack://restaurant-assignment/./src/modules/menu-load.js?");

/***/ }),

/***/ "./src/modules/page-load.js":
/*!**********************************!*\
  !*** ./src/modules/page-load.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n\n\nlet content = document.querySelector(\"#content\")\n\nlet createNav = () => {\n   let nav_bar = document.createElement(\"div\");\n   let nav_item_home = document.createElement(\"p\");\n   let nav_item_menu = document.createElement(\"p\");\n   let nav_item_contact = document.createElement(\"p\");\n\n   nav_bar.className = \"navigation-container\";\n   nav_item_home.id = 'nav-home';\n   nav_item_menu.id = 'nav-menu';\n   nav_item_contact.id = 'nav-contact';\n\n   nav_item_home.className = 'active';\n\n   nav_item_home.innerHTML = 'home';\n   nav_item_menu.innerHTML = 'menu';\n   nav_item_contact.innerHTML = 'contact';\n\n   nav_bar.appendChild(nav_item_home);\n   nav_bar.appendChild(nav_item_menu);\n   nav_bar.appendChild(nav_item_contact);\n   content.prepend(nav_bar);\n}\n\nlet createMain = () => {\nlet main = document.createElement(\"main\");\nmain.id = (\"main\");\ncontent.appendChild(main)\n}\n\n\nlet createFooter = () => {\n  let footer = document.createElement(\"footer\");\n  let content_container = document.createElement(\"div\");\n  let footer_p = document.createElement(\"p\");\n  let author_p = document.createElement(\"p\");\n  let github_a = document.createElement('a');\n  let github_img = document.createElement('img');\n\n  content_container.className = \"content-container\";\n  footer_p.innerHTML = \"This is a fictional restaurant website made to complete an Odin Project assignment. This assigment was for the npm, modules, and webpack lesson. The menu items are borrowed from Tapa Bar in Victoria B.C.\";\n  author_p.innerHTML = \"made by drae, click below to view assignment details\";\n  github_a.href = \"https://github.com/DraeRamsey/restaurant-assignment\";\n  github_a.target = \"_blank\";\n  github_img.src = \"imgs/github2.png\";\n  github_img.className = \"icon2\";\n\n  footer.appendChild(content_container);\n  content_container.appendChild(footer_p);\n  content_container.appendChild(author_p);\n  content_container.appendChild(github_a);\n  github_a.appendChild(github_img);\n  content.appendChild(footer)\n}\n\nfunction pageLoad(){\n   createNav();\n   createMain();\n   createFooter();\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageLoad);\n\n\n//# sourceURL=webpack://restaurant-assignment/./src/modules/page-load.js?");

/***/ }),

/***/ "./src/modules/toggle.js":
/*!*******************************!*\
  !*** ./src/modules/toggle.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n\n\nfunction toggleTab(id){\n  const active = document.querySelector(\".active\");\n\n   if (active) {\n     active.classList.remove(\"active\")\n   }\n   const current_active = document.querySelector(id);\n   current_active.className = \"active\";\n};\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toggleTab);\n\n\n//# sourceURL=webpack://restaurant-assignment/./src/modules/toggle.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
