const fs = require("fs");

//[To create/write a File]
// 
// fs.writeFileSync('./test.txt', "Hello");       //For synchronous 

// 
// fs.writeFile("./test.txt", "Hello", (err) => {});     //For Asynchronus

// //[To read a File]

// const result = fs.readFileSync("./contact.txt", "utf-8");   //synchronus
// console.log(result);

// fs.readFile("./contact.txt", "utf-8", (err, result) => {    //For Asynchronus
//   if (err) {
//     console.log("Error", err);
//   } else {
//     console.log(result);
//   }
// });   
// console.log(result);

//[To append a File]

fs.appendFileSync("./test.txt", ' ${Date.now()} Hey There\n' );  //similarly you can delete,copy,stats-define,etc using fs."operations"