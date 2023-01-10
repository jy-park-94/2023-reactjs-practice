export const v1 = 3;
export const v2 = 5;

function myFnc1(p1, p2) {
  return p1 + p2;
}

// Storing anonymous function on a variable
// (params...) => {Function code block}
const myFnc2 = (p1, p2) => {
  return p1 - p2;
};

// Export module variables & parameters.
// - Can be used in the other files using `import 'FNC' from 'FILE'` term.
export const plus = myFnc1;
export const minus = myFnc2;
