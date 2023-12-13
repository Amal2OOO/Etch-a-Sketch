
const grid = document.querySelector('.grid');


let gridQuantity = 10;
let gridSquare = gridQuantity * gridQuantity;

for(let i = 0; i < gridSquare; i++) {
  const gridElement = document.createElement('div');
  gridElement.className = 'gridElement';
  gridElement.style.height = grid.clientHeight / gridQuantity + 'px';
  gridElement.style.width = grid.clientWidth / gridQuantity + 'px';
  grid.appendChild(gridElement);
}