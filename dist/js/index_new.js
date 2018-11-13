class Hamburger{
    constructor() {
        /* Hamburguesa vieja editable
        this.hamburger = document.querySelector("#hamburger")
        this.hamburger.addEventListener('click', this.abrirMenu.bind(this))*/

        this.hamburgerDiv = document.querySelector('#icon');
        this.divs = document.querySelector('#divTop');
        this.divHead = document.querySelector('.head');
        this.menuMobile = document.querySelector('#menuMobile');

      
        this.hamburgerDiv.addEventListener('click', this.abrirMenu.bind(this));
        document.addEventListener('scroll', this.animationHamburguer.bind(this));
    }
    

    abrirMenu() {
        /* Hamburguesa vieja editable
        this.hamburger.classList.toggle("is-active"); */
        this.divs.classList.toggle('open');
        this.menuMobile.classList.toggle('active');

    }

    animationHamburguer(oE){
        let pos = oE.target.scrollingElement.scrollTop;
        
        if(pos > 0) {
            this.divHead.classList.add('animate');
            this.menuMobile.classList.remove('active');
            this.divs.classList.remove('open');
        } else {
            this.divHead.classList.remove('animate');
        }
    }
}

class Main_new {
    constructor(){
        document.addEventListener('scroll', this.animarSkills.bind(this));
        this.nodeSkills = document.querySelector('.skillsBar');
        this.nodeBas = document.querySelectorAll('.nodeBas');
        this.nodeAdv = document.querySelectorAll('.nodeAdv');
        this.nodeExp = document.querySelectorAll('.nodeExp');

    }
    animarSkills(){
        this.nodeBas.forEach(item => {
            if (this.isScrolledIntoView(this.nodeSkills)){
                item.classList.remove('hidden');
                item.classList.add('bar');
                item.classList.add('basic');
            } else{
                item.classList.remove('basic');
                item.classList.remove('bar');
                item.classList.add('hidden');
            }
            
        });
        this.nodeAdv.forEach(item => {
            if (this.isScrolledIntoView(this.nodeSkills)){
                item.classList.remove('hidden');
                item.classList.add('bar');
                item.classList.add('advanced');
            } else{
                item.classList.remove('advanced');
                item.classList.remove('bar');
                item.classList.add('hidden');
            }
            
        });
        this.nodeExp.forEach(item => {
            if (this.isScrolledIntoView(this.nodeSkills)){
                item.classList.remove('hidden');
                item.classList.add('bar');
                item.classList.add('expert');
            } else{
                item.classList.remove('expert');
                item.classList.remove('bar');
                item.classList.add('hidden');
            }
            
        });
    }

    isScrolledIntoView(oEv) {
        //console.log(oEv)
        let rect = oEv.getBoundingClientRect();
        let elemTop = rect.top;
        let elemBottom = rect.bottom;
    
        // Only completely visible elements return true:
        let isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
        // Partially visible elements return true:
        isVisible = elemTop < window.innerHeight && elemBottom >= 1;
        return isVisible;
    }
}

class Index {
    constructor() {
        new Hamburger();
        new Main_new();
        
    }  
}

document.addEventListener('DOMContentLoaded', () => {new Index();});
