class Hamburger{constructor(){this.hamburgerDiv=document.querySelector("#icon"),this.divs=document.querySelector("#divTop"),this.divHead=document.querySelector(".head"),this.menuMobile=document.querySelector("#menuMobile"),this.hamburgerDiv.addEventListener("click",this.abrirMenu.bind(this)),document.addEventListener("scroll",this.animationHamburguer.bind(this))}abrirMenu(){this.divs.classList.toggle("open"),this.menuMobile.classList.toggle("active")}animationHamburguer(e){e.target.scrollingElement.scrollTop>0?(this.divHead.classList.add("animate"),this.menuMobile.classList.remove("active"),this.divs.classList.remove("open")):this.divHead.classList.remove("animate")}}class Index{constructor(){new Hamburger}}document.addEventListener("DOMContentLoaded",()=>{new Index});