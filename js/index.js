const createButton = (text, clickHandler) => {
    const button = document.createElement('button');
    button.innerHTML = text;
    button.classList.add('button');
    button.addEventListener('click', clickHandler);
    return button;
};

const container = document.getElementById('container');
container.classList.add('counter-container');

const containerCounter = document.createElement('div');
containerCounter.classList.add('containerCounter');
container.appendChild(containerCounter);

const counter = document.createElement('div');
counter.classList.add('counter');
containerCounter.appendChild(counter);

const number = document.createElement('span');
number.innerHTML = '0';
counter.appendChild(createButton('-', subtract));
counter.appendChild(number);
counter.appendChild(createButton('+', add));

let value = 0;

function add() {
    value++;
    number.innerHTML = value;
}

function subtract() {
    value--;
    number.innerHTML = value;
}