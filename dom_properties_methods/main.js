// object example 
const person = {
  name: "John Doe",
  age: 30,
  city: "New York",
  greet: function () {
    return `Hello my name is ${this.name}.I am ${this.age} year's old.I am living in ${this.city}`
  },
};
