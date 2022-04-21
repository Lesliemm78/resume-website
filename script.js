// function openItem(evt, tabName) {
//   var i, tabcontent, tablinks;

import { version } from "typescript"

//   tabcontent = document.getElementsByClassName("tabcontent");

//   for (i = 0; i < tabcontent.length; i++) {
//     tabcontent[i].style.display = "none";
//   }

//   tablinks = document.getElementsByClassName("tablinks");

//   for (i = 0; i < tablinks.length; i++) {
//     tablinks[i].className = tablinks[i].className.replace(" active", "");
//   }

//   document.getElementById(tabName).style.display = "block";
//   evt.currentTarget.className += " active";
// }



function openItem(clickEvent, tabName) {
  const [...tabContent] = document.querySelectorAll('.tabcontent')
  const [...tabLinks] = document.querySelectorAll('.tablinks')
  const activeTab = document.querySelector(`#${tabName}`)

  tabContent.forEach((tab) => tab.style.display = 'none')
  tabLinks.forEach((tab) => tab.className = tab.className.replace(' active', ''))

  activeTab.style.display = 'block'
  clickEvent.currentTarget.className += ' active'
}
