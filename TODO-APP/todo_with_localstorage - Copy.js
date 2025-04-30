
const addtaskBtn = document.getElementById('addBtn');
const userInput = document.getElementById('InputType');

const taskArr = [];

function handleTask(){
    //console.log(this);
    // this.style.borderColor = "red";
    // this.style.textDecoration = "line-through";
    // this.style.opacity = "0.5";
    // toogle use of on/off
    //console.log(this.classList.toggle("completed"));
    this.classList.toggle("completed");
    console.log(this.innerText);
}
// 1. check local storage wheather any data available
// 2. if yes we've to render..
// 3. if no nothing do..
// 4. save when user creates new tag...



// TODO: things
// 1. State managment
// 2. Empty Value -> Alert to the user
// 3. Check for the  spaces....
// 4. 

function handleRemove(){
    //console.log(this);
    this.remove();
}
// function consoleArr(){
//     console.log(taskArr);
// }

function setTasks(){
    //localStorage.setItem("tasks", taskArr);
    localStorage.setItem("tasks", JSON.stringify(taskArr));
}
function getTask(){
    let tasks = localStorage.getItem("tasks");
    if(!tasks){
        return;
    }
    tasks = JSON.parse(tasks);
    //console.log(tasks);
    for(index in tasks){
        createTask(tasks[index].value);
    }
}
getTask();

function createTask(userInputData){
    //creating new element with value
    const newElement = document.createElement('div');
    newElement.innerHTML = userInputData;
    newElement.setAttribute("class", "task");
    resultContainer.append(newElement);
    newElement.addEventListener('click', handleTask);
    newElement.addEventListener('dblclick', handleRemove);
}
function userInputData(){
    // taking user input
    const userInputData = userInput.value;
    //localStorage.setItem("taskvalue", userInputData);
    if(userInputData.length ===0){
      //  alert("Enter a valid input");
       // return
        return  alert("Enter a valid input");
    }

    let taskObj = {};
    taskObj.value = userInputData;
    taskObj.isCompleted  = false;
    console.log(taskObj);
    taskArr.push(taskObj);
    setTasks();    
    createTask(userInputData);
}

function inputDatakeyUp(e){
   if(e.keyCode==13){
    userInputData();
   }
}
addtaskBtn.addEventListener('click',userInputData);
userInput.addEventListener('keyup', inputDatakeyUp);

console.log(document.getElementsByClassName('button'));
