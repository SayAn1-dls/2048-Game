const grid = [];
let gridValues = [];
function startGame() {
    gridValues = Array(16).fill(0); 
    addRandomTile();
    addRandomTile();
    updateGrid();
}

function addRandomTile() {
    const emptyCells = gridValues
        .map((value, index) => value === 0 ? index : -1)
        .filter(index => index !== -1);

    if (emptyCells.length > 0) {
        const randomIndex = emptyCells[Math.floor(Math.random() * emptyCells.length)];
        gridValues[randomIndex] = Math.random() < 0.9 ? 2 : 4;
    }
}


function updateGrid() {
    gridValues.forEach((value, index) => {
        const cell = document.querySelector(`.grid-cell[data-index="${index}"]`);
        cell.textContent = value === 0 ? '' : value;
        cell.dataset.number = value;
        if (value === 0) {
            cell.classList.add('empty');
        } else {
            cell.classList.remove('empty');
        }
    });
}


document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp') {
        moveUp();
    } else if (event.key === 'ArrowDown') {
        moveDown();
    } else if (event.key === 'ArrowLeft') {
        moveLeft();
    } else if (event.key === 'ArrowRight') {
        moveRight();
    }
});

function moveUp() {
    
    addRandomTile();
    updateGrid();
}

function moveDown() {
    
    addRandomTile();
    updateGrid();
}

function moveLeft() {
    
    addRandomTile();
    updateGrid();
}

function moveRight() {
    
    addRandomTile();
    updateGrid();
}

window.onload = startGame;