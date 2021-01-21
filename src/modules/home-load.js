'use strict';

import toggleTab from "./toggle.js"



function homeLoad(){
 let main = document.querySelector("#main")
  main.textContent = "";

  let hero_section = document.createElement("section");
  let heading = document.createElement("h1");
  let sub_heading = document.createElement("h2");

  hero_section.id = "hero-section";
  heading.className = "heading";
  sub_heading.className = "sub-heading";

  heading.innerHTML = "Leoni's Tapas";
  sub_heading.innerHTML = "Dine, Share, Enjoy";

  hero_section.appendChild(heading);
  hero_section.appendChild(sub_heading);

  main.appendChild(hero_section);
  toggleTab('#nav-home');

}





export default homeLoad
