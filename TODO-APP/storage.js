
// Web Storage

// 1. Cookies

// 2. Local Storage

// 3. Session Storage...


// const userNames = {
//     name:"David",
// }

//window.sessionStorage
// sessionStorage.setItem("name","David");
// sessionStorage.setItem("mobile","XXXXXXXX");

// const names = sessionStorage.getItem("name");
// const mobile = sessionStorage.getItem("mobile");
// console.log(names);
// console.log(mobile);


// sessionStorage.removeItem("mobile");
// sessionStorage.removeItem("mobil");


// localStorage.setItem("age","46");
// //localStorage.removeItem("age");
// const getAge = localStorage.getItem("age");
// console.log(getAge);



// Session Storage..
// 1. Browser
// 2. 5 MB Maximum storage..
// 3. Window closes -> data delete
// 4. Temporar data..



// Local Storage..
// 1. Browser
// 2. 10 MB Maximum storage..
// 3. Window close -> Data won't delete
// 4. Data Perisites (we an delete manuval also)



// Cookies..

// 1. Browser
// 2. 4 KB storage..
// 3. window close ->data won't delete
// 4. sends with request .... -> server

// Tracking...
// Session Management... ex login

// console.log(new Date());
//console.log(new Date(2025,2, 28).toUTCString()); // month started index so I used 2 means march
// if you need no expire use year 9999 /   const expire = new Date(9999,2, 28).toUTCString();
// const expire = new Date(2025,2, 28).toUTCString(); // month started index so I used 2 means march
// document.cookie = "name=Daniel; expires =" + expire;
// console.log(document.cookie);

// we can delete manual
// expire


