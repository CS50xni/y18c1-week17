const contentData = document.getElementById('contentData');
const btnLoadData = document.getElementById('btnLoadData');

btnLoadData.addEventListener('click', e => {
    const xhr = new XMLHttpRequest();
    console.log(`Objeto creado: ${xhr.readyState}`);

    xhr.open('GET', '/data.html', true);
    console.log(`Petición abierta: ${xhr.readyState}`);

    // Acción a realizar con los datos recibidos de la petición
    xhr.addEventListener('load', x => {
        console.log(x.target);
        contentData.innerHTML = x.target.responseText;
        console.log(`Petición cargada: ${xhr.readyState}`);
    });

    // Realizando la petición
    xhr.send();
    console.log(`Petición solicitada: ${xhr.readyState}`);
});