const clickaddBtn = document.getElementById("addBtn");
const userInput = document.getElementById("InputType");

function addTask(){
    userInputValue = userInput.value;
    console.log(userInputValue);
}

function handlePress(e){
             if(e.keyCode == 13){
                addTask();
             }
     };
clickaddBtn.addEventListener('click',addTask);
userInput.addEventListener('keyup', handlePress);
// userInput.addEventListener('keyup',function(e){
//         if(e.keyCode == 13){
//            addTask();
//         }
// });