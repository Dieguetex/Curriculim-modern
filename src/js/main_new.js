export class Main_new {
    constructor(){
        document.addEventListener('scroll', this.animarSkills.bind(this));
        this.nodeSkills = document.querySelector('.skillsBar')
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