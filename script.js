const digit = document.querySelector('.digits');
const buttons = document.querySelectorAll('.button');
const clear = document.querySelector('.clear');
const solve = document.querySelector('.solve');

let question = '';

digit.textContent = 0;

clear.addEventListener('click', () => {
    digit.textContent = 0;
    question = '';
});

solve.addEventListener('click', () => {
    let answer = eval(question);
    digit.textContent = answer;
    question = answer;
});

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        // console.log(e.target.getAttribute("data"));

        if (digit.textContent.length > 17) return;

        (digit.textContent.length > 4) && (digit.style.fontSize = '3rem');
        (digit.textContent.length > 7) && (digit.style.fontSize = '1.5rem');

        if (digit.textContent[0] == '0') digit.textContent = digit.textContent.slice(1);

        question += e.target.getAttribute("data");

        if (e.target.getAttribute("data") == '*') {
            digit.textContent += '×';
        } else if (e.target.getAttribute("data") == '/') {
            digit.textContent += '÷';
        } else {
            digit.textContent += e.target.getAttribute("data");
        }
    });
});

