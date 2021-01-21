'use strict';
import toggleTab from "./toggle.js"


function contactLoad(){
  let main = document.querySelector("#main");
  main.textContent = "";
  console.log("home here")

  let contact_section = document.createElement("section");
  let heading = document.createElement("h1");
  let sub_heading = document.createElement("h2");
  let phone_p = document.createElement("p");
  let email_p = document.createElement("p");
  let location_p = document.createElement("p");

  contact_section.id = "contact-section";
  heading.className = "heading";
  sub_heading.className = "sub-heading";

  heading.innerHTML = "Contact";
  sub_heading.innerHTML = "Open Daily from 12pm - 11pm";

  phone_p.innerHTML = "Phone: 123-456-7890";
  email_p.innerHTML = "Email: ipsum@lorem.com";
  location_p.innerHTML = "Location: 231 Vic Ave, Victoria B.C";


  contact_section.appendChild(heading);
  contact_section.appendChild(sub_heading);
  contact_section.appendChild(phone_p);
  contact_section.appendChild(email_p);
  contact_section.appendChild(location_p);

  main.appendChild(contact_section);
  toggleTab('#nav-contact')

}





export default contactLoad
