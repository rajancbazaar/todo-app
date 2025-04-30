



//5️⃣ JavaScript Functions
//Functions allow us to reuse code and make programs more organized.

//🔹 1. Function Declaration (Named function)

function greet() {
    console.log("Hello, Rajan! Welcome to JavaScript.");
}
greet(); // Calling the function



//2. Function with Parameters



//6️⃣ JavaScript Arrays
// An array is a collection of multiple values stored in a single variable.

//🔹 Declaring an Array
//let fruits = ["Apple", "Banana", "Cherry"];
//console.log(fruits);

//🔹 Accessing Array Elements
//console.log(fruits[0]); // Apple
//console.log(fruits[1]); // Banana
//console.log(fruits.length); // 3

//🔹 Adding & Removing Elements
/*
fruits.push("Orange"); // Adds to the end
console.log(fruits);

fruits.pop(); // Removes last element
console.log(fruits);

fruits.unshift("Mango"); // Adds to the beginning
console.log(fruits);

fruits.shift(); // Removes first element
console.log(fruits);
*/


// 🔹 Looping Through an Array
/*for (let fruit of fruits) {
    console.log("Fruit:", fruit);
}*/


// 7️⃣ JavaScript Objects
//An object is a collection of key-value pairs.
//Creating an Object
/*
let Person = {
    Name: "Rajan",
    Age: 46,
    City: "Teynampet"
}
console.log(Person)

//🔹 Accessing Object Properties
console.log("Age "+ Person.Age);
console.log("Name " +  Person["Name"]);

//🔹 Adding & Updating Properties

Person.Country = "India"; // Adding
console.log("Added Country " + Person.Country)

Person.Age = 47;
console.log("Age updated " + Person["Age"]);

console.log("/////////////////////////////////////////")
//🔹 Looping Through an Object
for (let Key in Person) {
    console.log( Key + ":", Person[Key]);
}*/


/*
Here’s what’s happening step by step:

1️⃣ The for...in loop is used to iterate over all the keys (properties) of the person object.
2️⃣ Each iteration assigns a property name (key) to the key variable.
3️⃣ person[key] is used to get the value of that property.
4️⃣ The console.log statement prints the key and its corresponding value.

Breakdown of Each Iteration:
Iteration	key Value	person[key] (Value)
1st	        "name"	    "Rajan"
2nd     	"age"   	25
3rd	        "city"	    "Delhi"
*/

/*
Key Points About for...in Loop
✔️ Used for iterating over object properties (keys).
✔️ Not recommended for arrays (use for...of for arrays instead).
✔️ Dynamically accesses properties without needing to know them in advance.
*/

console.log("/////////////////////////////////////////")
// Loops extented


/*

let oddCount = 0;
let evenCount = 0;

let startNumber = 500;
let endNumber = 600;
for(; startNumber <= endNumber; startNumber++){
    //console.log("start Number",startNumber);
    if(startNumber%2===0) evenCount +=1;
    else oddCount++;       
}
console.log("Event  count is number of  " + startNumber +"",evenCount);

console.log(`Event count is nu ${startNumber} event count is ${evenCount}`);
console.log("Odd Number count",oddCount);
*/

//  Print the numbers divisible by 2 or 5

let twoCount = 0;
let fiveCount = 0;
let totalCount = 0;
let twoArray = [];
let fiveArray = [];
let normalValues =0;
let normalArray=[];


for(let i = 2; i<=100; i++){
    if(i % 2 === 0){ 
        twoArray[twoCount] = i;
        twoCount++;
    }

    // if(i % 5 === 0) {
       
    //     fiveArray[fiveCount] = i;
    //     fiveCount++;
    // }
    
   else if(i % 5 === 0) {
       
        fiveArray[fiveCount] = i;
        fiveCount++;
    }
    
    else {
        normalArray[normalValues] = i;
        normalValues++;
    }
   
    totalCount++;
}
// console.log(twoCount);
// console.log(fiveCount);
// console.log(totalCount);
// console.log(twoArray);
// console.log(fiveArray);
// console.log(normalArray);

console.log(twoArray);

let arrayLength = twoArray.length;
for(let i =0; i<arrayLength; i++){
    console.log(twoArray[i]);
}

console.log("-------------------------------------------------------");

for(let i = 1; i<= arrayLength; i++){
    
    console.log(twoArray[i-1]);
}
console.log("-------------------------------------------------------");
for(index of twoArray){
    console.log(index)
    console.log(`Two array of index values: ${index}`);
}

// if you need index you can choose for in
for(indexIn in twoArray){
    console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++");
    console.log(`Testing for In ${indexIn} and values ${twoArray[indexIn]}`)
}

console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++");


//If you need to check both the index and the value of elements in the array, you can use the for...of loop in 
// combination with .entries(), which provides both the index and the value in each iteration.


    /*
    Things to Keep in Mind:
    for...in iterates over the keys/indices, not the values directly.
    This method works fine if you are simply iterating through the indices and accessing the values using twoArray[index].
    Avoid using for...in for arrays if you don’t need the indices, as it can also enumerate over additional properties or prototype properties, which can cause unexpected behavior.*/
let twoArrays = [10, 20, 30];

for (let [index, value] of twoArrays.entries()) {
    console.log(index);  // 0, 1, 2 (index)
    console.log(`Two array of index values: ${value}`);  // 10, 20, 30 (value)
}






// !count and even numbers between 500 to 1000
/*
let oddCounts = 0;
let eventCounts = 0;
let startNumbers = 500;
let endNumbers = 1000;
let oddArrays = [];
let evenArrays = [];


for(let i = startNumbers; i<=endNumbers; i++) {
    if(i%2===0) {
        eventCounts++;
        evenArrays[eventCounts] = i;
    }
    else {
        oddCounts++;
        oddArrays[oddCounts] = i;
   // console.log(`The  full numbers `,i)
}
}

console.log(eventCounts);
console.log(`Event counts ${eventCounts}`)
console.log(oddCounts);
console.log(`Odd counts ${oddCounts} ` );
console.log(' Even Arrays '+ evenArrays)
console.log('Odd Arrays'+ oddArrays);

*/

let oddCounts = 0;
let eventCounts = 0;
let startNumbers = 500;
let endNumbers = 1000;
let oddArrays = [];
let evenArrays = [];
let i = 500;

/*
function evenFunction(){
    evenArrays[eventCounts] = i;
    eventCounts++;
}
function oddFunction(){
    oddArrays[oddCounts] = i;
    oddCounts++;
}
*/
/*
for(let i = startNumbers; i<=endNumbers; i++) {
    if(i%2===0) {
      evenFunction();
    }
    else {
        oddFunction();
 
   // console.log(`The  full numbers `,i)
}
}
*/
// console.log(eventCounts);
// console.log(`Event counts ${eventCounts}`)
// console.log(oddCounts);
// console.log(`Odd counts ${oddCounts} ` );
// console.log(' Even Arrays '+ evenArrays)
// console.log('Odd Arrays'+ oddArrays);
// console.log(`Event counts: ${eventCounts}`);
// console.log(`Odd counts: ${oddCounts}`);
// console.log('Even Arrays (showing first 5 elements): ', evenArrays.slice(0, 5));  // Slice for readability
// console.log('Odd Arrays (showing first 5 elements): ', oddArrays.slice(0, 5));  // Slice for readability
/*
console.log("?????????????????????????????????????????????????");

function findOddAndEven(){
    if(i%2===0) evenFunction();
    else oddFunction();
}

for(; i<= endNumbers; i++){
    findOddAndEven()
}

// console.log(`Odd counts ${oddCounts} ` );
console.log(' Even Arrays '+ evenArrays)
console.log('Odd Arrays'+ oddArrays);
*/

for(let i = startNumbers; i<= endNumbers; i++){
    validateOddOrEven()
}

function validateOddOrEven(){
    if(i % 2 ===0){
        evenArrays[eventCounts] = i;
        eventCounts++;
    }
    else {
        oddArrays[oddCounts] = i;
        oddCounts++;
    }
}
console.log(' Even Arrays '+ evenArrays)
console.log('Odd Arrays'+ oddArrays);