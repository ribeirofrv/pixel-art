const pixelBoard = document.querySelector('#pixel-board'); // seleciona o quadro
const colorPalette = document.querySelector('#color-palette'); // seleciona paleta de cores

const createPixelBoard = (size) => {
  for (let line = 0; line < size; line += 1) {
    const pixelsLine = document.createElement('div');
    pixelBoard.appendChild(pixelsLine).classList.add('pixel');
    pixelsLine.classList.add('standardSize');// cria pixels
  }
};

colorPalette.addEventListener('click', (event) => { // escolhe cor da paleta
  const selectColor = document.querySelector('.selected');
  selectColor.classList.remove('selected');
  event.target.classList.add('selected');
});

const toPaint = () => {
  pixelBoard.addEventListener('click', (event) => {
    const selectColor = document.querySelector('.selected');
    const currentColor = window.getComputedStyle(selectColor).getPropertyValue('background-color');
    event.target.style.backgroundColor = currentColor;
  });
};

window.onload = () => {
  document.querySelector('.color').classList.add('selected');
  createPixelBoard(25);
  toPaint();
};
