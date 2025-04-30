
const addtaskBtn = document.getElementById('addBtn');
const userInput = document.getElementById('InputType');

function handleTask(){
    //console.log(this);
    // this.style.borderColor = "red";
    // this.style.textDecoration = "line-through";
    // this.style.opacity = "0.5";
    // toogle use of on/off
    //console.log(this.classList.toggle("completed"));
    this.classList.toggle("completed");
}
// 1. check local storage wheather any data available
// 2. if yes we've to render..
// 3. if no nothing do..
// 4. save when user creates new tag...

function handleRemove(){
    //console.log(this);
    this.remove();
}
function userInputData(){

    // taking user input
    const userInputData = userInput.value;
    localStorage.setItem("taskvalue", userInputData);
    if(userInputData.length ===0){
        return;
    }
    
    //creating new element with value
    const newElement = document.createElement('div');
    newElement.innerHTML = userInputData;
    newElement.setAttribute("class", "task");

    resultContainer.append(newElement);

    newElement.addEventListener('click',function(){
        console.log("Checking new element");
   });

   newElement.addEventListener('click', handleTask);
   newElement.addEventListener('dblclick', handleRemove);
}

function inputDatakeyUp(e){
   if(e.keyCode==13){
    userInputData();
   }
}
addtaskBtn.addEventListener('click',userInputData);
userInput.addEventListener('keyup', inputDatakeyUp);

console.log(document.getElementsByClassName('button'));
