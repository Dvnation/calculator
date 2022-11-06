const setScreen = (value) => document.querySelector('.input-glass').value = value
const clearScreen = () => {
    document.querySelector('.input-glass').value = '';
    document.querySelector('.input-glass').placeholder = '';
}
const resetScreen = () => document.querySelector('.input-glass').placeholder = '.0';

const getEquation = () => document.querySelector('.input-glass').value;


setInterval(() => {
    document.getElementById("solar-section").innerHTML = localStorage.getItem('result');
});

let calculatorHandler = {
    isEvaluated: false,
    option: 'default',
    evaluates: function (vsa) {
        switch (calculatorHandler.option) {
            case '%': calculatePercentage()
                break;
            default: calculate(vsa);
                break;
        }
        calculatorHandler.isEvaluated = true;
    },
    onClick: function (valuekk) {
        if (localStorage.getItem('origValue')) {
            clearScreen()
            localStorage.removeItem('origValue')
        }
        if (calculatorHandler.isEvaluated === true) {
            clearScreen();

            onButtonClick(valuekk)
           calculatorHandler.isEvaluated = false;
        } else {
            onButtonClick(valuekk)
        }
    }

}
const onClear = () => {
    let screenText = document.querySelector('.input-glass').value;
    screenText = screenText.slice(0, -1);
    setScreen(screenText);
}


function onButtonClick(pp) {
    let text1 = document.querySelector('.input-glass').value;
    setScreen(text1.concat(pp)) // prevText+''+param.. concat means joining
}


const calculate = function () {
    const equation = document.querySelector('.input-glass').value;
    const result = eval(equation)
    localStorage.setItem('result', result+":"+ user());
    setScreen(result)
}

function off() {

    setTimeout(() => {
        back = document.querySelector('.input-glass')
        back.style.background = 'black'
        clearScreen();
    }, 500)
}

function on() {
    resetScreen();
    setTimeout(() => {
        back = document.querySelector('.input-glass')
        back.style.background = 'burlywood'
    }, 300)
}

function memory() {
    let origValue = localStorage.getItem('origValue');
    let currentValue = document.querySelector('.input-glass').value;

    if (! origValue) 
        localStorage.setItem('origValue', currentValue);
    

    setScreen(eval(Number(currentValue) + Number(origValue)))
}


function root() {
    input = document.querySelector('.input-glass')
    var value = Math.sqrt(input.value);
    setScreen(value)
}

function percentage() {
    calculatorHandler.option = '%';
    calculatorHandler.onClick('%');
}

const calculatePercentage = () => {
    let equa = getEquation();
    if (equa.indexOf('%')) {
        const splittedEqua = equa.split('%');
        const result = eval(splittedEqua[1] * splittedEqua[0] / 100);
        setScreen(result);
        calculatorHandler.option = 'default';
    }else{
        setScreen("invalid selection")
    }
}

function bream(car){
    car = 5*5
   onButtonClick(car)
   
}
