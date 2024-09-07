document.addEventListener('DOMContentLoaded', (event) => {
    const display1 = document.querySelector('#display1');
    const display2 = document.querySelector('#display2');

    const buttons = {
        '1': document.querySelector('#button1'),
        '2': document.querySelector('#button2'),
        '3': document.querySelector('#button3'),
        '4': document.querySelector('#button4'),
        '5': document.querySelector('#button5'),
        '6': document.querySelector('#button6'),
        '7': document.querySelector('#button7'),
        '8': document.querySelector('#button8'),
        '9': document.querySelector('#button9'),
        '0': document.querySelector('#button0'),
        '+': document.querySelector('#buttonplus'),
        '-': document.querySelector('#buttonminus'),
        '*': document.querySelector('#buttonmultiply'),
        '/': document.querySelector('#buttondivide'),
        '=': document.querySelector('#buttonequals'),
        'c': document.querySelector('#buttonclear')
    };

    let currentNumber = 0;
    let nextNumber = 0;
    let mode = null;

    function setupEventListeners() {
        for (let key in buttons) {
            buttons[key].addEventListener('click', () => handleInput(key));
        }
    }

    function handleInput(input) {
        if (isNumber(input)) {
            handleNumberInput(parseInt(input));
        } else {
            handleOperatorInput(input);
        }
        updateDisplay();
    }

    function isNumber(input) {
        return !isNaN(input);
    }
    
    function clearNumber(){
        currentNumber = 0;
        nextNumber = 0;

        updateDisplay();

        mode = null;
    }

    function handleNumberInput(number) {
        if (mode === 'justEqualed') {
            currentNumber = 0;
            mode = null;
        }
        if (mode === null) {
            currentNumber = currentNumber * 10 + number;
        } else {
            nextNumber = nextNumber * 10 + number;
        }
    }

    function handleOperatorInput(operator) {
        if(operator === 'c'){
            clearNumber();

            return;
        }
        
        
        if (operator === '=') {
            handleEquals();}
         else {
            if (nextNumber !== 0) {
                handleEquals();
            }
            mode = operator;
        }
    }

    function handleEquals() {
        switch (mode) {
            case '+':
                currentNumber += nextNumber;
                break;
            case '-':
                currentNumber -= nextNumber;
                break;
            case '*':
                currentNumber *= nextNumber;
                break;
            case '/':
                if (nextNumber !== 0) {
                    currentNumber /= nextNumber;
                } else {
                    alert('Cannot divide by zero');
                }
                break;
        }
        mode = 'justEqualed';
        nextNumber = 0;
    }

    function updateDisplay() {
        display1.textContent = currentNumber;
        display2.textContent = nextNumber;
    }

    setupEventListeners();
});
