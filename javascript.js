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
    })

})


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

}

function chooseOperator(operation) {


}


function calculate() {

}

function updateScreen() {
    currNum.textContent = this.currNum;



}