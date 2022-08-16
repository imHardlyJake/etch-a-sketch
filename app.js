var startCont = document.getElementById('startCont');
var header = document.getElementById('header');
var description = document.getElementById('description');
var startButton = document.getElementById('startBtn');
var container = "";
var square = "";

function removeElements() {
    startCont.remove();
    header.remove();
    description.remove();
    startButton.remove();
}

function createCont() {
    container = document.createElement('div');
    container.setAttribute('id', 'container');
    container.classList.add('gridCont');
    document.body.appendChild(container);
}

function setGrid() {
    createCont();
    for (i = 0; i != 256; i++) {
        let square = document.createElement('div');
        square.setAttribute('id', 'grid-square');
        square.classList.add('grid-cell');
        container.appendChild(square);
        square.addEventListener('click', ()=> {
        square.classList.toggle('clicked-square');
        })
    }
}
startButton.addEventListener('click', ()=>{
    removeElements();
    setGrid();
})

