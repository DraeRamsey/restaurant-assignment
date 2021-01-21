'use strict';
import toggleTab from "./toggle.js"


function menuLoad(){
  let main = document.querySelector("#main");
  main.textContent = "";

  let menu_section = document.createElement("section");
  let menu_img = document.createElement("img");

  menu_section.id = "menu-section";
  menu_img.src = "imgs/menu-desktop.png";
  menu_img.alt = "menu";

  menu_section.appendChild(menu_img);

  main.appendChild(menu_section);
  toggleTab('#nav-menu');

}


export default menuLoad
