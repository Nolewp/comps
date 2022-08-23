let wrapper = (addbtn, calcbtn) => {
    let hold = document.createElement('div');
    hold.classList.add("calcutor");
    hold.innerHTML = `
    <div id = "calc">
        <div></span><input type="number" name="subject" id="subject" placeholder="Subject Home Sqft.">  </div>
        <br> <br>
        <div><input type="number" name="psqft" id="psqft" placeholder="Price per Sqft.">  </div>
        <div><input type="number" name="psqft" id="psqft" placeholder="Price per Sqft.">  </div>
        <div><input type="number" name="psqft" id="psqft" placeholder="Price per Sqft.">  </div>

    </div> 
    ` 
    hold.appendChild(addbtn)
    hold.appendChild(calcbtn)
    return hold
}

// let makeDeletePostBtn = () => {
//     let delBtn = document.createElement('i');
//     delBtn.classList.add('delBtn');
//     delBtn.onclick = function(click) {
//         deletePost();
//     }
// }

// let deletePost = (e) => {
//     e.parentElement.parentElement.remove();
// };

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
    calculateButton.classList.add("clacCompValue");
    calculateButton.innerText = "Calculate Comp Value";
    calculateButton.onclick = function(click) {
        validateInput();
    }
    return calculateButton
}


let validateInput = () => {
    let sqftValue = document.querySelectorAll('#psqft');
    let check = 0
    let sub = document.querySelector('#subject');
    if (sub.value == '') {
        sub.style.backgroundColor = "red";
       sub.placeholder="please fill out Subject";
       check += 1
    }
    else {
        sub.style.backgroundColor = "white";
    }
    sqftValue.forEach(num => {
    if (num.value == '') {
        check += 1
        num.style.backgroundColor = "red";
        num.placeholder="please fill out"
    }
    })
    if (check === 0) {
        sqftValue.forEach(num => {
                num.style.backgroundColor = "white";
            })
        getInput()

    }
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
    let comp = val2/val1;
    updateComp(comp)
}

let displayCompArea = () => {
    let compArea = document.createElement("div");
    compArea.classList.add("compArea");
    let value = document.createElement("h3");
    value.classList.add("compValue");
    value.id = "comValue";
    value.innerText = '55';
    compArea.appendChild(value);
    return compArea
}

let updateComp = (newcomp) => {
    let val = document.getElementById("comValue");
    val.innerText = String(newcomp)
}

let createCalculator = () => {
    let calc = wrapper(addButton(), calculateBtn());
    calc.appendChild(displayCompArea());
    return calc
}

export{
    
    createCalculator
}