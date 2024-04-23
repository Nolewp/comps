import './style.css';

function styleThis(domItem, classes){
    domItem.classList.add(...classes.split(' '));
    return domItem
}
styleThis(document.body, "bg-emerald-100 text-center flex justify-center")


let wrapper = (addbtn, calcbtn) => {
    let hold = document.createElement('div');
    hold.classList.add("text-center");
    styleThis(hold, 'bg-teal-800 rounded-xl p-10 m-4')
    let btnHold = document.createElement('div')
    btnHold.classList.add("btnList")
    hold.innerHTML = 
    `
    <div id="calc" class="bg-gray-200 rounded-lg p-4 m-4 min-w-44 max-w-3xl">
    <h3 class="text-xl font-bold mb-4">Subject home</h3>
    <div class="mb-4">
        <input type="number" name="subject" id="subject" placeholder="Subject Home Sqft." class="border border-gray-300 p-2 rounded-md w-full">
    </div>
        
    <h3 class="mb-2">Comparison homes</h3>
    <div id="homes" class="flex flex-wrap">
        <div class="mb-2 flex items-center w-full">
            <button onClick="editPost(this)" class="text-red-500 hover:text-red-600 focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
            </button>
            <input type="number" name="psqft" id="psqft" placeholder="Price per Sqft." class="border border-gray-300 p-2 rounded-md flex-1 w-full">
        </div>
        <div class="mb-2 flex items-center w-full">
            <button onClick="editPost(this)" class="text-red-500 hover:text-red-600 focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
            </button>
            <input type="number" name="psqft" id="psqft" placeholder="Price per Sqft." class="border border-gray-300 p-2 rounded-md flex-1 w-full">
        </div>
        <div class="mb-2 flex items-center w-full">
            <button onClick="editPost(this)" class="text-red-500 hover:text-red-600 focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
            </button>
            <input type="number" name="psqft" id="psqft" placeholder="Price per Sqft." class="border border-gray-300 p-2 rounded-md flex-1 w-full">
        </div>
    </div>
</div>

    ` 
    btnHold.appendChild(addbtn)
    btnHold.appendChild(calcbtn)
    hold.appendChild(btnHold)
    return hold
}

let editPost = (e) => {
    e.parentElement.remove();
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
    styleThis(addcalcbutton,'bg-emerald-900 hover:bg-emerald-200 text-white font-bold py-2 px-4 border border-emerald-600 rounded' );
    addcalcbutton.innerText = "Add a home";
    addcalcbutton.onclick = function(click) {
        addInput();
    }
    return addcalcbutton
}

let calculateBtn = () => {
    let calculateButton = document.createElement('button');
    calculateButton.classList.add("clacCompValue");
    styleThis(calculateButton, "bg-emerald-900 hover:bg-emerald-200 text-white font-bold py-2 px-4 border border-emerald-600 rounded")
    calculateButton.innerText = "Calculate comp value";
    calculateButton.onclick = function(click) {
        validateInput();
    }
    return calculateButton
}

let addInput = () => {
    let div = document.createElement('div');
    styleThis(div, "mb-2 flex items-center w-full")
    //div.classList.add('mb-2 flex items-center');
    div.innerHTML = 
    `
    <button onClick="editPost(this)" class="text-red-500 hover:text-red-600 focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
    </button>
    <input type="number" name="psqft" id="psqft" placeholder="Price per Sqft." class="border border-gray-300 p-2 rounded-md flex-1 w-full">
    ` ;
    document.getElementById('homes').appendChild(div)
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


var formatter = new Intl.NumberFormat('en-US', {
style: 'currency',
currency: 'USD',

// These options are needed to round to whole numbers if that's what you want.
//minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
//maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

let displayCompArea = () => {
    let compArea = document.createElement("div");
    compArea.classList.add("compArea");
    let value = document.createElement("h2");
    value.classList.add("compValue");
    styleThis(compArea, "text-lg")
    value.id = "comValue";
    value.innerText = 'Fillout the form to calculate current estimated home value!';
    compArea.appendChild(value);
    return compArea
}

let updateComp = (newcomp, avg) => {
    let val = document.getElementById("comValue");
    let comp = formatter.format(newcomp)
    val.innerText = "The estimated subject home value is " + comp + ", the avg price per sqft. is " + avg.toFixed(2);
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