import './style.css';
import closebutton from './closebutton.svg';
import './calculator.js'
import {  createCalculator, editPost} from './calculator.js';




 

document.body.appendChild(createCalculator());
var s = document.createElement("script");
s.type = "text/javascript";
s.innerText =  "let editPost = (e) => {e.parentElement.remove()};"

document.body.append(s);