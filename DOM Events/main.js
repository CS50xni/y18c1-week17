/*
    1) DOMContentLoaded
    2) load
    3) scroll
    4) resize
*/

const statusPage = document.getElementById('statusPage');

// window.addEventListener();
addEventListener('DOMContentLoaded', e => {
    console.log(e);
    statusPage.textContent = "Página cargada completamente...";
});

addEventListener('scroll', e => {
    console.log(scrollX, scrollY);
});

addEventListener('resize', e => {
    console.log(`innerWindow: ${innerHeight}, ${innerWidth}`);
    console.log(`outerWindow: ${outerHeight}, ${outerWidth}`);
});