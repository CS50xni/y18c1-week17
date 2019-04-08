const title = document.getElementById('title');
const btn = document.getElementById('btn');
const mostrarSaludo = document.getElementById('mostrarSaludo');


const saludo = e => alert(e.target.textContent); // function to reuse code in event's declaration


title.addEventListener('click', saludo);  // click event to h1 tag

btn.addEventListener('click', saludo);

mostrarSaludo.addEventListener('click', e => {
    let valorSaludo = document.getElementById('valorSaludo');

    alert(valorSaludo.value);
    valorSaludo.value = '';
});