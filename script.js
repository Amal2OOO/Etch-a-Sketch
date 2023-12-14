
const grid = document.querySelector('.grid');
const gridSize = document.querySelector('.gridSize');
let gridElements = document.querySelectorAll('.gridElement');


let gridQuantity = 10;

createGrid(gridQuantity);

function createGrid() {
  let gridSquare = gridQuantity * gridQuantity;

  for(let i = 0; i < gridSquare; i++) {
    const gridElement = document.createElement('div');
    gridElement.className = 'gridElement';
    gridElement.style.height = grid.clientHeight / gridQuantity + 'px';
    gridElement.style.width = grid.clientWidth / gridQuantity + 'px';
    grid.appendChild(gridElement);

    gridElement.addEventListener('mouseover', () => {
      gridElement.style.backgroundColor = 'black';
    });
  }
}

gridSize.addEventListener('click', () => {
  gridQuantity = Number(prompt('Enter grid size:'));
  while(grid.firstChild) {
    grid.removeChild(grid.firstChild);
  }
  createGrid(gridQuantity);
});
