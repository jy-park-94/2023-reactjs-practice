const person = {
  name: "Junyoung",
};

const secondPerson = person;

console.log(secondPerson);

person.name = "New Name";

console.log(secondPerson);

// In this code, `secondPerson` is just referencing `person` object.
// So, if we change the properties of `person`, `secondPerson` shows the same changes
person.name = "Junyoung";
// Then, how can we `Deep Copy` the `person` object into new one?

const thirdPerson = {
  ...person,
};
console.log(thirdPerson);

person.name = "First Person";

console.log(person);
console.log(thirdPerson);
