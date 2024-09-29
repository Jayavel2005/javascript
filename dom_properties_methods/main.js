// object example
const person = {
  name: "John Doe",
  age: 30,
  city: "New York",
  greet() {
    return `Hello my name is ${this.name}.I am ${this.age} year's old.I am living in ${this.city}`;
  },
};

person.name = "Jayavel";
person.city = "Vadambacheri";
person.age = 19;
const personOne = person.greet();
console.log(personOne);
