class Hamburger{constructor(){this.hamburgerDiv=document.querySelector("#icon"),this.divs=document.querySelector("#divTop"),this.divHead=document.querySelector(".head"),this.menuMobile=document.querySelector("#menuMobile"),this.hamburgerDiv.addEventListener("click",this.abrirMenu.bind(this)),document.addEventListener("scroll",this.animationHamburguer.bind(this))}abrirMenu(){this.divs.classList.toggle("open"),this.menuMobile.classList.toggle("active")}animationHamburguer(e){e.target.scrollingElement.scrollTop>0?(this.divHead.classList.add("animate"),this.menuMobile.classList.remove("active"),this.divs.classList.remove("open")):this.divHead.classList.remove("animate")}}class Main{constructor(){this.dropDown=document.querySelectorAll("h2"),this.dropDown.forEach(e=>{e.addEventListener("click",this.desplegar.bind(this))}),this.nodosArrow=document.querySelectorAll(".arrow"),this.nodosArrow.forEach(e=>{e.addEventListener("click",this.desplegar.bind(this))}),this.nodoDiv=document.querySelectorAll(".moveIt"),document.addEventListener("scroll",this.animarSection.bind(this))}desplegar(e){switch(e.path[0].nodeName){case"H2":let a=e.target.nextElementSibling;var t=document.createElement("P"),i=document.createElement("P"),n=document.createTextNode("Ver menos"),s=document.createTextNode("Ver más");t.appendChild(n),i.appendChild(s),a.classList.contains("hide")?(a.classList.remove("hide"),a.nextElementSibling.firstElementChild.classList.remove("fa-caret-down"),a.nextElementSibling.firstElementChild.classList.add("fa-caret-up"),a.nextElementSibling.lastElementChild.remove(),a.nextElementSibling.appendChild(t)):(a.classList.add("hide"),a.nextElementSibling.firstElementChild.classList.remove("fa-caret-up"),a.nextElementSibling.firstElementChild.classList.add("fa-caret-down"),a.nextElementSibling.lastElementChild.remove(),a.nextElementSibling.appendChild(i));break;case"I":let l=e.target.parentNode.previousElementSibling;t=document.createElement("P"),i=document.createElement("P"),n=document.createTextNode("Ver menos"),s=document.createTextNode("Ver más");t.appendChild(n),i.appendChild(s),l.classList.contains("hide")?(l.classList.remove("hide"),e.target.classList.remove("fa-caret-down"),e.target.classList.add("fa-caret-up"),e.target.nextElementSibling.remove(),e.target.parentNode.appendChild(t)):(l.classList.add("hide"),e.target.classList.remove("fa-caret-up"),e.target.classList.add("fa-caret-down"),e.target.nextElementSibling.remove(),e.target.parentNode.appendChild(i));break;default:console.log("no funca")}}animarSection(){this.nodoDiv.forEach(e=>{this.isScrolledIntoView(e)?(e.classList.remove("floatItSelfBack"),e.classList.add("floatItSelf")):(e.classList.remove("floatItSelf"),e.classList.add("floatItSelfBack"))})}isScrolledIntoView(e){let t=e.getBoundingClientRect(),i=t.top,n=t.bottom;return i>=0&&n<=window.innerHeight}}class Index{constructor(){new Hamburger,new Main}}document.addEventListener("DOMContentLoaded",()=>{new Index});