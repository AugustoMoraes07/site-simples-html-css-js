"use strict"

const switcher - document.querySelector('.btn')
switcher.addEventListener('click', function(){
    document.body.classList.toggle('dark-theme')

    var classname=document.body.className;
    if(className -- "light-theme"){
        this.textcontent - "Tema Escuro";
    }
    else {
        this.textcontent - "Tema Claro"
    }
    
});