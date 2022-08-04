let wrapper = () => {
    let hold = document.createElement('div');
    hold.classList.add("calcutor");
    hold.innerHTML = `
    <div><input type="number" name="sqft" id="sq1" placeholder="sq ft"> <input type="number" name="price" id="price1" placeholder="price"> </div>
    <div><input type="number" name="sqft" id="sq2" placeholder="sq ft"> <input type="number" name="price" id="price2" placeholder="price"> </div>
    <div><input type="number" name="sqft" id="sq3" placeholder="sq ft"> <input type="number" name="price" id="price3" placeholder="price"> </div>
    `
    return hold
}
let addButton = () => {
    let addcalcbutton = document.createElement('button');
    addcalcbutton.classList.add("addHomeBtn");
    addcalcbutton.innerText = "add a home";
    addcalcbutton.onclick = function(click) {
        addInput();
        console.log("yo");
    }
    return addcalcbutton
}

let addInput = () => {
    let h = document.createElement('h1');
    h.classList.add('h');
    h.innerHTML = 'yooooo';
    document.getElementsByClassName("calcutor").appendChild(h)
    document.getElementsByClassName("calcutor").appendChild ` <div><input type="number" name="sqft" id="sq3" placeholder="sq ft"> <input type="number" name="price" id="price3" placeholder="price"> </div> `;
}


export {
    wrapper,
    addButton,
    addInput
}