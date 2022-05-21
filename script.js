// function openItem(evt, tabName) {
//   var i, tabcontent, tablinks;

// import { version } from "typescript"

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
//The function is to hide/show the different sections of the webpage on click.
function name(params) {
  
}

const routes = {
  '#home': 'Home',
  '#education': 'Education',
  '#career': 'Career',
  '#travels': 'Travels',
  '#projects': 'Projects',
  '#notfound': 'NotFound',
}
//above: function that returns the string. back tick (`) string on multiple lines.

function render (location) {
  // REF: Render
  const content =  document.getElementById("main")
  const templateId = routes[location] ?? 'NotFound'
  let template = document.getElementById(templateId)
  content.innerHTML = template.innerHTML

  



  // let renderPage = routes[location]
  // Replaced by line 52 "?? 'NotFound" (#Render)
  // if (renderPage === undefined) {
      // renderPage = routes['#notfound']
  // }
      
  // content.innerHTML = renderPage()
}

window.onload = function() {
  let location = window.location.hash
  render(location)
}


function goTo (location) {
  render(location)
  window.history.pushState ({},'', location)
  

}