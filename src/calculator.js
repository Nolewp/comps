let wrapper = (addbtn, calcbtn) => {
    let hold = document.createElement('div');
    hold.classList.add("calculator");
    let btnHold = document.createElement('div')
    btnHold.classList.add("btnList")
    hold.innerHTML = `
    <div id = "calc">
        <div></span><input type="number" name="subject" id="subject" placeholder="Subject Home Sqft.">  </div>
        <br> <br>
        <div> <i onClick="editPost(this)" class="fas fa-edit"></i><input type="number" name="psqft" id="psqft" placeholder="Price per Sqft.">  </div>
        <div> <i onClick="editPost(this)" class="fas fa-edit"></i><input type="number" name="psqft" id="psqft" placeholder="Price per Sqft.">  </div>
        <div> <i onClick="editPost(this)" class="fas fa-edit"></i><input type="number" name="psqft" id="psqft" placeholder="Price per Sqft.">  </div>

    </div> 
    ` 
    btnHold.appendChild(addbtn)
    btnHold.appendChild(calcbtn)
    hold.appendChild(btnHold)
    return hold
}

let editPost = (e) => {
    e.parentElement.parentElement.remove();
};

let makeDeletePostBtn = () => {
    let delBtn = document.createElement('i');
    delBtn.classList.add('delBtn');
    delBtn.onclick = function(click) {
        deletePost();
    }
}

let deletePost = (e) => {
    e.parentElement.parentElement.remove();
};

let addButton = () => {
    let addcalcbutton = document.createElement('button');
    addcalcbutton.classList.add("addHomeBtn");
    addcalcbutton.innerText = "Add a home";
    addcalcbutton.onclick = function(click) {
        addInput();
    }
    return addcalcbutton
}

let calculateBtn = () => {
    let calculateButton = document.createElement('button');
    calculateButton.classList.add("clacCompValue");
    calculateButton.innerText = "Calculate comp value";
    calculateButton.onclick = function(click) {
        validateInput();
    }
    return calculateButton
}

let addInput = () => {
    let div = document.createElement('div');
    div.classList.add('h');
    div.innerHTML = ` <i onClick="editPost(this)" class="fas fa-edit"></i><input type="number" name="sqft" id="psqft" placeholder="Price per Sqft."> ` ;
    document.getElementById('calc').appendChild(div)
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
    let subject = document.querySelector("#subject").value;
    
    displayComp(totalVals, sqft, subject);
}

let displayComp = (val1, val2, subject) => {
    let avg= val2/val1;
    let comp = subject * avg
    comp = comp.toFixed(0);
    updateComp(comp, avg);
}

let displayCompArea = () => {
    let compArea = document.createElement("div");
    compArea.classList.add("compArea");
    let value = document.createElement("h3");
    value.classList.add("compValue");
    value.id = "comValue";
    value.innerText = 'Fillout the form to calculate current estimated home value!';
    compArea.appendChild(value);
    return compArea
}

let updateComp = (newcomp, avg) => {
    let val = document.getElementById("comValue");
    let comp = newcomp.toLocaleString('en-US');
    val.innerText = "The estimated subject home value is $" + comp + ", the avg price per sqft. is " + avg.toFixed(2);
}

let createCalculator = () => {
    let calc = wrapper(addButton(), calculateBtn());
    calc.appendChild(displayCompArea());
    return calc
}

export{
    
    createCalculator,
    editPost
}