let wrapper = (addbtn, calcbtn) => {
    let hold = document.createElement('div');
    hold.classList.add("calcutor");
    hold.innerHTML = `
    <div id = "calc"
    <div><input type="number" name="sqft" id="sqft" placeholder="sq ft"> <input type="number" name="price" id="price" placeholder="price"> </div>
    <div><input type="number" name="sqft" id="sqft" placeholder="sq ft"> <input type="number" name="price" id="price" placeholder="price"> </div>
    <div><input type="number" name="sqft" id="sqft" placeholder="sq ft"> <input type="number" name="price" id="price" placeholder="price"> </div>
    </div> 
    ` 
    hold.appendChild(addbtn)
    hold.appendChild(calcbtn)
    return hold
}

let addButton = () => {
    let addcalcbutton = document.createElement('button');
    addcalcbutton.classList.add("addHomeBtn");
    addcalcbutton.innerText = "add a home";
    addcalcbutton.onclick = function(click) {
        addInput();
    }
    return addcalcbutton
}

let calculateBtn = () => {
    let calculateButton = document.createElement('button');
    calculateButton.classList.add("addHomeBtn");
    calculateButton.innerText = "Calculate Comp Value";
    calculateButton.onclick = function(click) {
        getInput();
    }
    return calculateButton
}
let addInput = () => {
    let div = document.createElement('div');
    div.classList.add('h');
    div.innerHTML = `<input type="number" name="sqft" id="sqft" placeholder="sq ft"> <input type="number" name="price" id="price" placeholder="price">` ;
    document.getElementById('calc').appendChild(div)
}

let getInput = () => {
    let sqftValue = document.querySelectorAll('#sqft');
    let priceValue= document.querySelectorAll('#prce');
    let sqft = 0
    let totalPrice = 0 
    sqftValue.forEach(num => sqft += parseFloat(num.value))
    priceValue.forEach(num => totalPrice += parseFloat(num.value))
}



let createCalculator = () => {
    let calc = wrapper(addButton(), calculateBtn())
    return calc
}

export{
    createCalculator
}