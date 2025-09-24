const screen = document.querySelector(".screen")
const clear = document.querySelector('#clear');
const backspace = document.querySelector('#backspace');
const numBtns = document.querySelectorAll('.number-button');
const opBtns = document.querySelectorAll('.operand-button');
const equals = document.querySelector('.equals');
const prevNum = document.querySelector('.previous-number');
const currNum = document.querySelector('.current-number');

class Calculator {
        constructor(prevNum, currNum) {
            this.prevNum = prevNum;
            this.currNum = currNum;
            clearScreen()

        }

}

const calculator = new Calculator(prevNum, currNum);

numBtns.forEach(button => {

    button.addEventListener('click', () => {

        showOnScreen(button.textContent)
        updateScreen();
        console.log(prevNum);
    })

})

opBtns.forEach(button => {

    button.addEventListener('click', () => {

    chooseOperator(button.textContent);
    updateScreen();

    
    })
})


equals.addEventListener('click', () => {
    calculate();
    updateScreen();
});

backspace.addEventListener('click', () => {
    removeNumber();
    updateScreen();

});

clear.addEventListener('click', () => {
    clearScreen();
    updateScreen();

});

function showOnScreen(number) {
    if(number === '.' && this.currNum.includes('.')) { 
        return
    };
this.currNum = this.currNum.toString() + number.toString();


}

function clearScreen() {
this.currNum = '';
this.prevNum = '';
operation = undefined;

}

function removeNumber() {
    this.currNum = this.currNum.toString().slice(0 ,-1);

}

function chooseOperator(operation) {
if (this.currNum === '') {
    return;
}
if(this.prevNum !== '') {

    this.calculate();
}
this.operation = operation;
this.prevNum = this.currNum;
this.currNum = '';

}


function calculate() {

let calculation;
const prev = parseFloat(this.prevNum);
const curr = parseFloat(this.currNum);
if (isNaN(prev) || isNaN(curr)) {
    return;
}

switch (this.operation) {

    case '+':
        calculation = prev + curr
        break;

    case '-':
        calculation = prev - curr;
        break;

    case '*':
        calculation = prev * curr;
        break;

    case '/':
        calculation = prev / curr;
        break;

    case 'x²':
        calculation = Math.pow(prev, curr);
        break;

    default:
        return;

}

this.currNum = calculation;
this.operation = undefined;
this.prevNum = '';


};

function getDisplayNumber(number) {
    const stringNum = number.toString();
    const intDigits = parseFloat(stringNum.split('.') [0])
    const decimalDigits = stringNum.split('.')[1]
    let intDisplay;
    if(isNaN(intDigits)) {
        intDisplay = '';
    } else {
        intDisplay = intDigits.toLocaleString('en', {
            maximumFractionDigits: 0})
    
    }
    if(decimalDigits != null) {
        return `${intDisplay}.${decimalDigits}`
    } else {
        return intDisplay;
    }
}


function updateScreen() {

    currNum.textContent = this.getDisplayNumber(this.currNum);
    if(this.operation != null) {
    prevNum.textContent = `${this.getDisplayNumber(this.prevNum)} ${this.operation}`;
    } else {
        prevNum.textContent = '';
    }
    console.log(currNum);
}