import './style.css';
import './calculator.js'
import { addButton, wrapper } from './calculator.js';

function component() {
    const element = document.createElement('div');
    element.classList.add('hello');
    element.innerText = ("hello world")
    return element;
}


 

document.body.appendChild(component());
document.body.appendChild(wrapper())
document.body.appendChild(addButton())