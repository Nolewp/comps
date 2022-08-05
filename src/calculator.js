let wrapper = (addbtn, calcbtn) => {
    let hold = document.createElement('div');
    hold.classList.add("calcutor");
    hold.innerHTML = `
    <div id = "calc">
        <div><input type="number" name="psqft" id="psqft" placeholder="Price per Sqft.">  </div>
        <div><input type="number" name="psqft" id="psqft" placeholder="Price per Sqft.">  </div>
        <div><input type="number" name="psqft" id="psqft" placeholder="Price per Sqft.">  </div>
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

let addInput = () => {
    let div = document.createElement('div');
    div.classList.add('h');
    div.innerHTML = `<input type="number" name="sqft" id="psqft" placeholder="Price per Sqft."> ` ;
    document.getElementById('calc').appendChild(div)
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

let getInput = () => {
    let sqftValue = document.querySelectorAll('#psqft');
    
    let sqft = 0
    let totalVals = 0 
    sqftValue.forEach(num => {
        sqft += parseFloat(num.value);
        totalVals += 1 
    })
    
    displayComp(totalVals, sqft)
}

let displayComp = (val1, val2) => {
    let comp = val2/val1
    upddateComp(comp)
}

let upddateComp = (newcomp) => {
    let compValue = document.createElement('h4');
    compValue.classList.add('compValue');
    compValue.innerText = newcomp;
    document.body.appendChild(compValue)
}

let createCalculator = () => {
    let calc = wrapper(addButton(), calculateBtn())
    return calc
}

export{
    createCalculator
}