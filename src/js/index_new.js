import { Hamburger } from './hamburguer.js';
import { Main_new } from './main_new.js'

class Index {
    constructor() {
        new Hamburger();
        new Main_new();
        
    }  
}

document.addEventListener('DOMContentLoaded', () => {new Index()});