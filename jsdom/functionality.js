// const foodItems = document.getElementById("food-items");

// for (let i = 1; i <= 1000; i++) {
//   const foodItem = document.createElement("li");
//   foodItem.textContent = `Food ${i}`;
//   foodItem.className = "food-item";
//   foodItems.append(foodItem);
// }


// // document fragment for performance

// when appending a new element the page will reflows to prevent this fragment is used 

// insertAdjacentElement
// insertAdjacentHtml
const foodItems = document.getElementById("food-items");

const newfood = document.createElement("li");
const inputFood = document.createTextNode(prompt("Enter the food item Name: "))
newfood.append(inputFood);
newfood.className = "food-item";
foodItems.insertAdjacentHTML("beforeend",`<li class="food-item">${newfood.textContent}</li>`)