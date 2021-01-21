'use strict'

function toggleTab(id){
  const active = document.querySelector(".active");

   if (active) {
     active.classList.remove("active")
   }
   const current_active = document.querySelector(id);
   current_active.className = "active";
};


export default toggleTab
