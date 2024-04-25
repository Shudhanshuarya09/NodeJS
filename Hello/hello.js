// console.log("Hello im shudhanshu arya");

// const math = require("./math");
// console.log("Math value is ", math.sub(4,2));

//we can also write the above code into thus form

const {add , sub} = require("./math");

console.log("Math value is ", sub(4,2));