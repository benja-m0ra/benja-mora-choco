const open = document.getElementById('open');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');

open.addEventListener('click',()=>{
    modal_container.classList.add('show');
   
});

close.addEventListener('click',()=>{
    modal_container.classList.remove('show');
});

//leer mas

let hideText_btn = document.getElementById('hideText_btn');
let hideText = document.getElementById('hideText');

hideText_btn.addEventListener('click', toggleText);

function toggleText(){
    hideText.classList.toggle('mostrar');

    if(hideText.classList.contains('mostrar')){
        hideText_btn.innerHTML = 'leer menos';
    }
    else{
        hideText_btn.innerHTML = 'leer mas';
    }
}


