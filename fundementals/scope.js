// in Javascript there are three type of scopes
// global
// local
// function

// global scope

let x = "hello Jayavel";
const Greet = (() => {
  console.log(x);
})();
console.log(x);

// function scope

const Jayavel = (() =>{
    let y = "Hello Jayavel";
    console.log(y);
})();
// console.log(y);

// block scope

const greet = () => {
  if (true) {
    let y = "Jayavel Bro";
    console.log(y);
  }
  
};
greet()
