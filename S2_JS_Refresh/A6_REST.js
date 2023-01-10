// For array
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5, 6];

console.log(newNumbers);

// For object
const person = {
  name: "Max",
};

const newPerson = {
  ...person,
  age: 29,
};

console.log(newPerson);

// Rest operator

const filter = (...args) => {
  return args.filter((el) => el === 1);
};

console.log(filter(1, 2, 3));
