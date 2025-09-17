
const screen = document.getElementById("screen")
const clear = document.querySelector('#clear');
const backspace = document.querySelector('#backspace');
const divide = document.querySelector('#divide');
const multiply = document.querySelector('#multiply');
const subtract = document.querySelector('#subract');
const add = document.querySelector('#add');
const decimal = document.querySelector('#decimal');
const allButtons = document.querySelectorAll('button');



function showOnScreen(input) {
screen.value += input;

}

function clearScreen() {
screen.value = '';

}

function removeNumber() {
screen.value = screen.value.slice(0, -1);

}