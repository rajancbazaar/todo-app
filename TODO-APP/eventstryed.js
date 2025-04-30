const addtaskBtn = document.getElementById('addBtn');
const userInput = document.getElementById('InputType');

// function applyStyles(elemtents){
//     elemtents.style.border = "2px dotted green";
//     elemtents.style.cursor = "pointer";
//     elemtents.style.padding = "10px";
// }

function handleTask(){
    console.log("handle task working");
}
function userInputData(){

    // taking user input
    const userInputData = userInput.value;
    
    //creating new element with value
    const newElement = document.createElement('div');
    newElement.innerHTML = userInputData;
    newElement.setAttribute("class", "task");

    // aappend to container
    resultContainer.append(newElement);
    /*
    newElement.style.border = "2px dotted green";
    newElement.style.cursor = "pointer";
    newElement.style.padding = "10px";*/

    // applyStyles(newElement);

    //adding event listeners..
    newElement.addEventListener('click',function(){
        console.log("Checking new element");
   });

   newElement.addEventListener('click', handleTask);
}

function inputDatakeyUp(e){
   if(e.keyCode==13){
    userInputData();
   }
}
addtaskBtn.addEventListener('click',userInputData);
userInput.addEventListener('keyup', inputDatakeyUp);

// console.log(document.getElementsByClassName('button')[0]);
console.log(document.getElementsByClassName('button')); //HTMLCollection(2) [button#addBtn.button, button#deleteBtn.button, addBtn: button#addBtn.button, deleteBtn: button#deleteBtn.button]

//console.log(document.getElementsByClassName('button')[0]); //button#addBtn.button
//console.log(document.getElementsByClassName('button')[1]); //button#deleteBtn.button


// Extra details
// const userName = "Cbazaar";
// const Element = `${userName}`; 
// const cElemen = `<button>${userName}</button>`;
// document.getElementById("resultContainer").innerHTML += Element;  // Use the value of Element, not the string "Element"
// document.getElementById("resultContainer").innerHTML += cElemen; // we can show muliple



// const ParentName =  document.createElement("div");
// const Child = document.createElement("p");

// ParentName.append(Child);
// console.log(ParentName);

