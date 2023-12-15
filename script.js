
const grid = document.querySelector('.grid');
const gridSize = document.querySelector('.gridSize');
const rainbow = document.querySelector('.rainbow');
const blackBtn = document.querySelector('.blackBtn')

let colorMode = 'black';
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
      gridElement.style.backgroundColor = setColor(colorMode);
    });
  }
}

function setColor() {
  if(colorMode === 'black') {
    return 'black';
  } else {
    return rainbowColor();
  }
}

function rainbowColor() {
  const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
  const r = randomBetween(0, 255);
  const g = randomBetween(0, 255);
  const b = randomBetween(0, 255);
  const rgb = `rgb(${r},${g},${b})`;
  return rgb;
}

rainbow.addEventListener('click', () => {colorMode = 'rainbow'});
blackBtn.addEventListener('click', () => {colorMode = 'black'});
gridSize.addEventListener('click', () => {
  gridQuantity = Number(prompt('Enter grid size:'));
  while(grid.firstChild) {
    grid.removeChild(grid.firstChild);
  }
  createGrid(gridQuantity);
});

