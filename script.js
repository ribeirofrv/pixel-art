const pixelBoard = document.querySelector('#pixel-board');
const colorPalette = document.querySelector('#color-palette');
const clearBoard = document.querySelector('#clear-board');
const buttonVQV = document.querySelector('#generate-board');
// const color = document.querySelectorAll('.color');
// const buttonRandom = document.querySelector('#random-color');

// Cria Quadro de Pixel
// Em desenvolvimento...
const createPixelBoard = (size) => {
  for (let line = 0; line < size; line += 1) {
    // cria div pixel's
    const pixelsLine = document.createElement('div');
    pixelBoard.appendChild(pixelsLine).classList.add('line');
    for (let column = 0; column < size; column += 1) {
      // cria pixel's dentro das div's
      const pixels = document.createElement('div');
      pixelsLine.appendChild(pixels).classList.add('pixel');
      pixels.classList.add('standardSize');
    }
  }
};

// Seleciona Cor da Paleta de Cores para Pintar no Quadro
colorPalette.addEventListener('click', (event) => {
  const selectColor = document.querySelector('.selected');
  const evenT = event.target;
  selectColor.classList.remove('selected');
  evenT.classList.add('selected');
});

// Pinta Quadro com a Cor Selecionada
const toPaint = () => {
  pixelBoard.addEventListener('click', (event) => {
    const selectColor = document.querySelector('.selected');
    const currentColor = window.getComputedStyle(selectColor).getPropertyValue('background-color');
    const evenT = event.target;
    evenT.style.backgroundColor = currentColor;
  });
};

// Limpa Quadro Deixando Todos Pixels em Branco
const toClearBoard = () => {
  const pixels = document.querySelectorAll('.pixel');
  clearBoard.addEventListener('click', () => {
    for (let key = 0; key < pixels.length; key += 1) {
      pixels[key].style.backgroundColor = 'white';
    }
  });
};

// Baseado no repositório da Beatriz Ribeiro Turma 14
const resetBoard = () => {
  pixelBoard.innerHTML = ''; // Reseta quadro de pixels
};

const generateBoard = () => {
  buttonVQV.addEventListener('click', () => {
    const boardSize = document.querySelector('#board-size').value; // pega valor input
    const size = parseInt(boardSize, 10); // Garante que input saia como number
    resetBoard();
    if (boardSize === '') {
      alert('Board inválido!');
    } else if (size < 5) {
      createPixelBoard(5);
    } else {
      resetBoard();
      createPixelBoard(boardSize);
    }
    boardSize.innerText = '';
  });
};

window.onload = () => {
  document.querySelector('.color').classList.add('selected');
  createPixelBoard(5);
  toPaint();
  toClearBoard();
  generateBoard();
};
