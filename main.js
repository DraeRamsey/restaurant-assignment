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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_page_load_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/page-load.js */ \"./src/modules/page-load.js\");\n// npx webpack\n// npx webpack --watch\n\nconsole.log(\"boops\");\n\n\n// import homeLoad \"./modules/page-load.js\"\n//import loadMenu \"\"\n//import loadContact \"\"\n\n\n\n\n\nlet init = () => {\n  (0,_modules_page_load_js__WEBPACK_IMPORTED_MODULE_0__.default)();\n  //homeLoad\n  //nav event\n}\n\ninit();\n\n\n\n\n// var hamburger = document.getElementById('hamburger');\n//\n// hamburger.addEventListener('click', function(){\n//   this.\n// })\n//\n\n// var hamburger = document.getElementById('hamburger')\n// undefined\n// hamburger.addEventListener('click', function(){})\n// undefined\n// hamburger.addEventListener('click', function(){ hamburger.classList.toggle('active')})\n\n\n//# sourceURL=webpack://restaurant-assignment/./src/index.js?");

/***/ }),

/***/ "./src/modules/page-load.js":
/*!**********************************!*\
  !*** ./src/modules/page-load.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nlet content = document.querySelector(\"#content\")\n\nlet createNav = () => {\n  console.log(\"nav here\")\n   let nav_bar = document.createElement(\"div\");\n   let nav_item_home = document.createElement(\"p\");\n   let nav_item_menu = document.createElement(\"p\");\n   let nav_item_contact = document.createElement(\"p\");\n\n   nav_bar.className = \"navigation-container\";\n   nav_item_home.id = 'nav-home';\n   nav_item_menu.id = 'nav-menu';\n   nav_item_contact.id = 'nav-contact';\n\n   nav_item_home.className = 'active';\n\n   nav_item_home.innerHTML = 'home';\n   nav_item_menu.innerHTML = 'menu';\n   nav_item_contact.innerHTML = 'contact';\n\n   nav_bar.appendChild(nav_item_home);\n   nav_bar.appendChild(nav_item_menu);\n   nav_bar.appendChild(nav_item_contact);\n   content.prepend(nav_bar);\n}\n\nlet createMain = () => {\nconsole.log(\"main created\");\nlet main = document.createElement(\"main\");\nmain.id = (\"main\");\ncontent.appendChild(main)\n}\n\n\nlet createFooter = () => {\n  console.log(\"footer created\");\n  let footer = document.createElement(\"footer\");\n  let content_container = document.createElement(\"div\");\n  let footer_p = document.createElement(\"p\");\n  let author_p = document.createElement(\"p\");\n  let github_a = document.createElement('a');\n  let github_img = document.createElement('img');\n\n  content_container.className = \"content-container\";\n  footer_p.innerHTML = \"This is a fictional restaurant website made to complete an Odin Project assignment. Thanks for stopping by!\";\n  author_p.innerHTML = \"made by drae\";\n  github_a.href = \"https://github.com/DraeRamsey\";\n  github_a.target = \"_blank\";\n  github_img.src = \"imgs/github2.png\";\n  github_img.className = \"icon2\";\n\n  footer.appendChild(content_container);\n  content_container.appendChild(footer_p);\n  content_container.appendChild(author_p);\n  content_container.appendChild(github_a);\n  github_a.appendChild(github_img);\n\n  content.appendChild(footer)\n\n}\n\n\nfunction pageLoad(){\n   createNav();\n   createMain();\n   createFooter();\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageLoad);\n\n\n//# sourceURL=webpack://restaurant-assignment/./src/modules/page-load.js?");

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