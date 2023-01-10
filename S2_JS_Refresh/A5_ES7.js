class Human {
  gender = _gender;
  tellMyGender = () => {
    console.log(this.gender);
  };
}

class Person extends Human {
  // Omitting constructor !
  name = _name;
  gender = _gender;
  tellMyName = () => {
    console.log(this.name);
  };
}

const person = new Person("Junyoung", "Male");

person.tellMyName();
person.tellMyGender();
