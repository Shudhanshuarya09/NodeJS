const fs = require("fs");
const os = require("os");    //NodeJS ke andr ek module hota hai named as a (os) this gives the information about your computer
console.log(os.cpus().length);   //like here im using os module to know the length of CPU in my computer the outcomes has come 8 which i can maximum 8 thread can use for my blocking/synchronus codes because we know that thread pool size is directly porportional to the Core CPU.


//Blocking Operation - Synchronus code concept
console.log("1");
const result = fs.readFileSync("./contact.txt", "utf-8");
console.log("result");

console.log("2");
console.log("3");
