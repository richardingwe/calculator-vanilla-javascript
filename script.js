const digit = document.querySelector('.digits');
const buttons = document.querySelectorAll('.button');
const clear = document.querySelector('.clear');
const clearAll = document.querySelector('.clearAll');
const solve = document.querySelector('.solve');

let question = 0;

digit.textContent = 0;

clearAll.addEventListener('click', () => {
    digit.textContent = 0;
    digit.style.fontSize = '5rem';
    question = 0;
});

clear.addEventListener('click', () => {
    clearOne();
});

solve.addEventListener('click', () => {
    let answer = eval(question);
    digit.textContent = answer;
    question = answer;
});

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        if (digit.textContent.length > 17) return;

        inputValidation();
        question += e.target.getAttribute("data");

        if (e.target.getAttribute("data") == '*') {
            digit.textContent += '×';
        } else if (e.target.getAttribute("data") == '/') {
            digit.textContent += '÷';
        } else {
            digit.textContent += e.target.getAttribute("data");
        }

        if (digit.textContent[0] == '×') {
            digit.textContent = 0;
            question = 0;
        }
        if (digit.textContent[0] == '÷') {
            digit.textContent = 0;
            question = 0;
        }
    });
});


window.addEventListener('keydown', (e) => {
    if (digit.textContent.length > 17) return;
    inputValidation();

    let value = e.key;
    if (is_numeric(value) || value == '+' || value == '-' || value == '.') {
        digit.textContent += e.key;
        question += e.key;
    }

    if (value == '*') {
        digit.textContent += '×';
        question += '*';
    }
    if (value == '/') {
        digit.textContent += '÷';
        question += '/';
    }
    if (value == 'x') {
        digit.textContent += '×';
        question += '*';
    }
    if (value == 'Enter') {
        let answer = eval(question);
        digit.textContent = answer;
        question = answer;
    }
    if (value == 'Backspace') {
        clearOne();
    }

    if (digit.textContent[0] == '×') {
        digit.textContent = 0;
        question = 0;
    }
    if (digit.textContent[0] == '÷') {
        digit.textContent = 0;
        question = 0;
    }
});


function inputValidation() {
    if (digit.textContent.length > 7) {
        digit.style.fontSize = '1.5rem';
    } else if (digit.textContent.length > 4) {
        digit.style.fontSize = '3rem';
    }

    if (digit.textContent[0] == '0') digit.textContent = digit.textContent.slice(1);
}

function is_numeric(str) {
    return /^\d+$/.test(str);
}

function clearOne() {
    digit.textContent = digit.textContent.slice(0, digit.textContent.length - 1);
    question = question.toString().slice(digit.textContent.length - 1);;
    if (!digit.textContent) digit.textContent = 0;

    if (digit.textContent.length < 6) {
        digit.style.fontSize = '5rem';
    } else if (digit.textContent.length < 9) {
        digit.style.fontSize = '3rem';
    }
}