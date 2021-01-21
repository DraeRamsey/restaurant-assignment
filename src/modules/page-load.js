'use strict';

let content = document.querySelector("#content")

let createNav = () => {
  console.log("nav here")
   let nav_bar = document.createElement("div");
   let nav_item_home = document.createElement("p");
   let nav_item_menu = document.createElement("p");
   let nav_item_contact = document.createElement("p");

   nav_bar.className = "navigation-container";
   nav_item_home.id = 'nav-home';
   nav_item_menu.id = 'nav-menu';
   nav_item_contact.id = 'nav-contact';

   nav_item_home.className = 'active';

   nav_item_home.innerHTML = 'home';
   nav_item_menu.innerHTML = 'menu';
   nav_item_contact.innerHTML = 'contact';

   nav_bar.appendChild(nav_item_home);
   nav_bar.appendChild(nav_item_menu);
   nav_bar.appendChild(nav_item_contact);
   content.prepend(nav_bar);
}

let createMain = () => {
console.log("main created");
let main = document.createElement("main");
main.id = ("main");
content.appendChild(main)
}


let createFooter = () => {
  console.log("footer created");
  let footer = document.createElement("footer");
  let content_container = document.createElement("div");
  let footer_p = document.createElement("p");
  let author_p = document.createElement("p");
  let github_a = document.createElement('a');
  let github_img = document.createElement('img');

  content_container.className = "content-container";
  footer_p.innerHTML = "This is a fictional restaurant website made to complete an Odin Project assignment. This assigment was for the npm, modules, and webpack lesson. The menu items are borrowed from Tapa Bar in Victoria B.C.";
  author_p.innerHTML = "made by drae";
  github_a.href = "https://github.com/DraeRamsey";
  github_a.target = "_blank";
  github_img.src = "imgs/github2.png";
  github_img.className = "icon2";

  footer.appendChild(content_container);
  content_container.appendChild(footer_p);
  content_container.appendChild(author_p);
  content_container.appendChild(github_a);
  github_a.appendChild(github_img);
  content.appendChild(footer)
}

function pageLoad(){
   createNav();
   createMain();
   createFooter();
}

export default pageLoad
