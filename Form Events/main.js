/*
    1) submit
    2) change
    3) focus
    4) blur
    5) reset    */

// Variables declaration
const form = document.getElementById('form');
const restart = document.getElementById('restart');
const username = document.getElementById('username');
const passsword = document.getElementById('password');
const inputActive = document.getElementById('inputActive');

inputActive.style.visibility = 'hidden';


// form events
form.addEventListener('submit', e => {
    e.preventDefault();
    console.log('sended');
});

form.addEventListener('reset', e => {
    alert('Formulario reiniciado satisfactoriamente');
});


// checkbox event
restart.addEventListener('change', e => {
    if(e.target.checked){
        form.reset();
    }
});


// inputs events
const showInputIndicator = e => {
    let indicator = document.getElementById('inputActiveIndicator');

    inputActive.style.visibility = '';
    indicator.textContent = e.target.id;
}

const hideInputIndicator = e => {
    inputActive.style.visibility = 'hidden';
}

username.addEventListener('focus', showInputIndicator);
password.addEventListener('focus', showInputIndicator);

username.addEventListener('blur', hideInputIndicator);
password.addEventListener('blur', hideInputIndicator);