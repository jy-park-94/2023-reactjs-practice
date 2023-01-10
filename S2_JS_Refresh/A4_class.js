class Human {
  constructor(_gender) {
    this.gender = _gender;
  }
  tellMyGender() {
    console.log(this.gender);
  }
}

class Person extends Human {
  constructor(_name, _gender) {
    super(_gender);
    this.name = _name;
  }
  tellMyName() {
    console.log(this.name);
  }
}

const person = new Person("Junyoung", "Male");

person.tellMyName();
person.tellMyGender();
