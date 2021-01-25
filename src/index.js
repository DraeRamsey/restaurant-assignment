'use strict';

import pageLoad from "./modules/page-load.js"
import homeLoad from "./modules/home-load.js"
import menuLoad from "./modules/menu-load.js"
import contactLoad from "./modules/contact-load.js"

let navigate = () => {
  let home = document.getElementById("nav-home");
  let menu = document.getElementById("nav-menu");
  let contact = document.getElementById("nav-contact");

home.addEventListener("click", homeLoad);
menu.addEventListener("click", menuLoad);
contact.addEventListener("click", contactLoad);
}

let init = () => {
  pageLoad();
  homeLoad();
  navigate();
}

init();
