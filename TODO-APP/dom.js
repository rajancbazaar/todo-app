// 1. Object javascript king

// dom
//1. We can access the whole document
//2. Speed up the performance.....

// document object model...
// console.log(document);
// console.log(document.head);
// console.log(document.body);



// Dynamic access..
// GRUD
// 1. Create
// 2. Read
// 3. Update
// 4. Delete

// 1. Element
// 2. Attribute...
// 3. Styles
// 4. Events



let userInput = "Task 1";
const newElement = document.createElement("div");
newElement.innerText = userInput;
newElement.setAttribute("class","Task")
console.log(newElement);

newElement.style.backgroundColor = "pink";
newElement.style.color = "black";
newElement.style.display = "inline-block";
console.log(newElement.style.color);
const resContainer = document.getElementById("resultContainer");
resContainer.append(newElement);

//document.body.append(newElement);

const inputType = document.getElementById("InputType");
console.log(inputType);
console.log(inputType.getAttribute("type"));
console.log(inputType.getAttribute("placeholder"));
console.log(inputType.getAttribute("id"));

//inputType.setAttribute("type","date");
console.log(window);


// function add(fnumber, secnumber){
//     console.log(fnumber + secnumber);
// }
// add(15,6);



// events

// function keyDown(){
//     console.log('running');
// }


// Keyboards
// * 1. keydown
// * 2. keyup
// * 3. keypress
// function keyDown(event){
//     console.log(event)
// }

// function eventFunction(event){
//     console.log("working")
// }

// function eventFunction(event){
//     console.log(event);
// }

function eventFunction(){
    console.log("click Btn clicked")
}
function btnClick(){
    console.log("btn clicked")
}

// cltl + space  we can get all the functions

// Mouse
// 1. Mouse move
// 2. click
// 3. duble click
// 4. mouse over
// 5. mouse leave
// 6. wheel


const clickBtn = document.getElementById("addBtn");
clickBtn.onclick = btnClick; // reference
//clickBtn.onclick = eventFunction;

// Build in methods
clickBtn.addEventListener('click', btnClick);
clickBtn.addEventListener('click',eventFunction)



// Global

// 1. scroll
// 2. resize -> window - canvas

window.addEventListener("resize", function(event){
    console.log("windows is resized");
    console.log(event.target.outerWidth);
    console.log(event.target.innerHeight);
});





