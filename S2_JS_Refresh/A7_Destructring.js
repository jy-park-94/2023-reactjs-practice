// Array Destructing
const numbers = [1, 2, 3];

// In which the element is not required, just add empty space between commas
const [n1, , n3] = numbers; // [1, ,3]

console.log(n1 + n3);

// Object Destructing

const person = {
  name: "Junyoung",
  age: 28,
  gender: "male",
};

// 'name' is just used same key as original object.
// we use 'sex' as new name of the key 'gender' in the original object.
const { name, gender: sex } = person;

console.log(name, sex);
