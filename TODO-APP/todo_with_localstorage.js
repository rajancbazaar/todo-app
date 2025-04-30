const addtaskBtn = document.getElementById('addBtn');
const userInput = document.getElementById('InputType');

const taskArr = [];
function handleTask(){
    this.classList.toggle("completed");
    const taskValue = this.innerText;
    for(let i =0; i<taskArr.length; i++){
        const taskObj = taskArr[i];
        if(taskObj.value === taskValue){
            taskObj.isCompleted = !taskObj.isCompleted;
        }
    }
    setTasks();
    console.log(this.innerText);
}
function handleRemove(){
    this.remove();
}
function setTasks(){
    localStorage.setItem("tasks", JSON.stringify(taskArr));
}
function getTask(){
    let tasks = localStorage.getItem("tasks");
    if(!tasks){
        return;
    }
    tasks = JSON.parse(tasks);
    for(index in tasks){
        createTask(tasks[index].value, tasks[index].isCompleted);
        taskArr.push(tasks[index]);
    }
}
getTask();

function createTask(userInputData, isCompleted){
    const newElement = document.createElement('div');
    newElement.innerHTML = userInputData;

    if(isCompleted) newElement.setAttribute("class","task completed");
    else newElement.setAttribute("class", "task");

    resultContainer.append(newElement);
    newElement.addEventListener('click', handleTask);
    newElement.addEventListener('dblclick', handleRemove);
}
function userInputData(){
    const userInputData = userInput.value;
    if(userInputData.length ===0){
        return  alert("Enter a valid input");
    }

    // if(userInputData.replace(/[\s+]/g, "").length===0){
    //     return alert("Please enter valid task..");
    // }
    const inputLength = userInputData.length;
    let count = 0;
    for(let i = 0; i<inputLength; i++){
        if(userInputData[i] === " ") {
            count +=1;
        }
    }

    if(inputLength === count) return alert("Please enter a valid task");

    let taskObj = {};
    taskObj.value = userInputData;
    taskObj.isCompleted  = false;
    console.log(taskObj);
    taskArr.push(taskObj);
    setTasks();    
    createTask(userInputData, false);
}
function inputDatakeyUp(e){
   if(e.keyCode==13){
    userInputData();
   }
}
addtaskBtn.addEventListener('click',userInputData);
userInput.addEventListener('keyup', inputDatakeyUp);

