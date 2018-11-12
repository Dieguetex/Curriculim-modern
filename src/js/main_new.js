export class Main_new {
    constructor(){
        document.addEventListener('scroll', this.animarSkills.bind(this));
        this.nodeBas = document.querySelectorAll('.nodeBas');
        this.nodeAdv = document.querySelectorAll('.nodeAdv');
        this.nodeExp = document.querySelectorAll('.nodeExp');

    }
    animarSkills(){
        this.nodeBas.forEach(item => {
            if (this.isScrolledIntoView(item)){
                item.classList.remove('empty');
                item.classList.add('basic');
            } else{
                item.classList.remove('basic');
                item.classList.add('empty');
            }
            
        });
        this.nodeAdv.forEach(item => {
            if (this.isScrolledIntoView(item)){
                item.classList.remove('empty');
                item.classList.add('advanced');
            } else{
                item.classList.remove('advanced');
                item.classList.add('empty');
            }
            
        });
        this.nodeExp.forEach(item => {
            if (this.isScrolledIntoView(item)){
                item.classList.remove('empty');
                item.classList.add('expert');
            } else{
                item.classList.remove('expert');
                item.classList.add('empty');
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
        //isVisible = elemTop < window.innerHeight && elemBottom >= 0;
        
        return isVisible;
    }
}