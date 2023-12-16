
const grid = document.querySelector('.grid');
const gridSize = document.querySelector('.gridSize');
const rainbow = document.querySelector('.rainbow');
const blackBtn = document.querySelector('.blackBtn');
const grayScaleBtn = document.querySelector('.grayScaleBtn');


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
  }
  changeColor(colorMode);
}

function  changeColor() {
  let pixels = document.querySelectorAll('.gridElement');

  pixels.forEach(pixel => pixel.addEventListener('mouseover', () => {
    if(colorMode === 'black') {
      return pixel.style.backgroundColor = 'black';
    } else if(colorMode === 'rainbow') {
      return pixel.style.backgroundColor = rainbowColor();
    } else if(colorMode === 'gray') {
      let num = Number(pixel.style.backgroundColor.slice(-4, -1));
      return pixel.style.backgroundColor = `rgba(0, 0, 0, ${num + 0.1}`;
    }
  }));  
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
grayScaleBtn.addEventListener('click', () => {colorMode = 'gray'})
gridSize.addEventListener('click', () => {
  gridQuantity = Number(prompt('Enter grid size:'));
  while(grid.firstChild) {
    grid.removeChild(grid.firstChild);
  }
  createGrid(gridQuantity);
});

