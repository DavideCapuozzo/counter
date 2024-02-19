const createElement = (tagName, className, innerHTML, clickHandler) => {
    const element = document.createElement(tagName);

    if (className && className.trim() !== '') {
        element.classList.add(className.trim());
    }

    if (innerHTML) {
        element.innerHTML = innerHTML;
    }

    if (clickHandler) {
        element.addEventListener('click', clickHandler);
    }

    return element;
};

const container = document.getElementById('container');
container.classList.add('counter-container');

const containerCounter = createElement('div', 'containerCounter');
container.appendChild(containerCounter);

const counter = createElement('div', 'counter');
containerCounter.appendChild(counter);

const number = createElement('span', '', '0');
counter.appendChild(createElement('button', 'button', '-', subtract));
counter.appendChild(number);
counter.appendChild(createElement('button', 'button', '+', add));

let value = 0;

function add() {
    value++ ; 
    number.innerHTML = value;
}

function subtract() {
    value--; 
    number.innerHTML = value;
}