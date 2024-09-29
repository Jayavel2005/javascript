// object example
const person = {
  name: "John Doe",
  age: 30,
  city: "New York",
  greet() {
    return `Hello my name is ${this.name}.I am ${this.age} years old.I am living in ${this.city}`;
  },
};

person.name = window.prompt("Enter you name: ","Jayavel");  // prompt() -> has two parameters message string and default value
person.age = window.prompt("Enter your age: ");

const personOne = person.greet();
console.log(personOne);

// write method

document.body.innerHTML = `<h1>${personOne}</h1>`;

document.write(personOne);
