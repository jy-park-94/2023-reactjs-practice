function myFnc1(p1, p2) {
  return p1 + p2;
}

// Storing anonymous function on a variable
// (params...) => {Function code block}
const myFnc2 = (p1, p2) => {
  return p1 - p2;
};

// Can be used as a general function call.
let plus = myFnc1(1, 2);
let minus = myFnc2(1, 2);

console.log(`Plus: ${plus}, Minus: ${minus}`);
