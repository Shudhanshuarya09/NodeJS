const fs = require("fs");
const os = require("os");    //NodeJS ke andr ek module hota hai named as a (os) this gives the information about your computer
console.log(os.cpus().length);   //like here im using os module to know the length of CPU in my computer the outcomes has come 8 which i can maximum 8 thread can use for my blocking/synchronus codes because we know that thread pool size is directly porportional to the Core CPU.


//Blocking Operation - Synchronus code concept
console.log("1");
const result = fs.readFileSync("./contact.txt", "utf-8");
console.log("result");

console.log("2");
console.log("3");     //here output came 1,result,2,3  result wala processs kiya hoga tbtk 2,3 wait kiya hoga jbki wo chutki mai excute hojata as compared to result but synchronus hai to thread block hogya so wait kiya or ye output diya.


//Non-Blocking Operation - Asynchronus code concept
console.log("1");
fs.readFile("./contact.txt", "utf-8", (err, result) => {
  console.log(result);
});


console.log("2");
console.log("3");     //so here the output is 1,2,3,then result araam se kuki block nhi kiya thread