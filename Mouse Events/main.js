const board = document.getElementById('board'),
	  boardLabel = document.getElementById('boardLabel'),
      counterDisplay = document.getElementById('dblclick-counter');

board.addEventListener('mouseenter', e => {
	boardLabel.textContent = 'Double click here!';
    board.style.backgroundColor = 'tomato';
});

board.addEventListener('mouseleave', e => {
	boardLabel.textContent = 'Hover me!';
    board.style.backgroundColor = 'greenyellow';
});

board.addEventListener('dblclick', () => {
    counterDisplay.textContent = Number(counterDisplay.textContent) + 1;
});

board.addEventListener('contextmenu', e => {
    e.preventDefault();
    console.log(`Coordenadas: ${e.pageX}, ${e.pageY}`);
});

/*
    mousedown
    mouseup
    mousemove
*/
let xCoordenate = document.getElementById('x-coordenate'),
    yCoordenate = document.getElementById('y-coordenate');

document.body.addEventListener('mousemove', e => {
    xCoordenate.textContent = e.pageX;
    yCoordenate.textContent = e.pageY;
});