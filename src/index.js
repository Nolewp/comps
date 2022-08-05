import './style.css';
import './calculator.js'
import {  createCalculator } from './calculator.js';

function component() {
    const element = document.createElement('div');
    element.classList.add('hello');
    element.innerText = ("hello world")
    return element;
}


 

document.body.appendChild(createCalculator());
