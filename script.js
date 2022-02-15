const pixelBoard = document.getElementById('pixel-board'); // seleciona o quadro

const createPixelBoard = (size) => {
  for (let line = 0; line < size; line += 1) {
    const pixelsLine = document.createElement('div');
    pixelBoard.appendChild(pixelsLine).classList.add('pixel');
    pixelsLine.classList.add('standardSize');// cria pixels
  }
};

window.onload = () => {
  document.querySelector('.color').classList.add('selected');
  createPixelBoard(25);
};
