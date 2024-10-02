const inputBox = document.getElementById("inputBox");
const saveBtn = document.getElementById("saveBtn");
let foodContainer = document.getElementById("food-items");

// console.log(saveBtn.innerText);
saveBtn.addEventListener("click", () => {
  foodContainer.innerHTML += `<li class="food-item">${inputBox.value}</li>`;
  inputBox.value = "";
});

// get elemements my class name

// const foods = foodContainer.getElementsByClassName("food-item"); // this will give a collection of items in array
// const items = Array.from(foods).map((element) => element.innerText);

// console.log(items);

// get elements by tag name

// const foods = document.getElementsByTagName("li");
// const items = Array.from(foods).map((element) => element.innerText);
// console.log(items)

// query selector
// query selectorAll returns node list (collections )
let result = document.querySelector("main input");
console.log(result.value);
