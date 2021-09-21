const board = document.querySelector('#board');
const colors = ['#CD0074', '#992667', '#85004B', '#A60000', '#BF3030', '#FF4040', '#FF7373', '#E667AF', '#E6399B'];
const SQUARES_NUMBER = 900;

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.addEventListener('mouseover', () => setColor(square));
    square.addEventListener('mouseleave', () => removeColor(square));
    board.append(square);
};


function setColor(element) {
    const color = getRandomColor();
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 20px ${color}`;

};

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d';
    element.style.boxShadow = `0 0 2px #000`;
};

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
};