btn.addEventListener('click', e => {
    loadData();
});

const loadData = () => {
    fetch('/persons.json')
        .then(response => {
            if(response.status === 200){
                return response.json();
            }else{
                console.error('No se encontró la información');
            }
        }).then(data => {
            draw(data);
        }).catch(error => console.log(error));
};

const draw = data => {
    let content = document.getElementById('content'),
        table = document.createElement('table');
    table.insertAdjacentHTML('beforeend', `
                <tr>
                    <th>Nombre</th>
                    <th>Edad</th>
                    <th>Correo</th>
                    <th>Número</th>
                </tr>
            `);
    
    data.forEach(item => {
        let {name, age, email, number} = item;
        let column = `
                    <tr>
                        <td>${name}</td>
                        <td>${age}</td>
                        <td>${email}</td>
                        <td>${number}</td>
                    </tr>`;

        table.insertAdjacentHTML('beforeend', column);
    });

    content.appendChild(table);
};