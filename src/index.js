import './style.css';

function component() {
    const element = document.createElement('div');
    element.classList.add('hello');
    element.innerText = ("hello world")
    return element;
}
let gg = document.createElement('div');
gg.classList.add('me');
gg.innerText = "hrllo";

 

document.body.appendChild(component());