// const foodItems = document.getElementById("food-items");
// const duplicate = document.getElementById("duplicate");
// const resync = document.getElementById("resync");

// // // for (let i = 1; i <= 1000; i++) {
// // //   const foodItem = document.createElement("li");
// // //   foodItem.textContent = `Food ${i}`;
// // //   foodItem.className = "food-item";
// // //   foodItems.append(foodItem);
// // // }


// // // // document fragment for performance

// // // when appending a new element the page will reflows to prevent this fragment is used 

// // // insertAdjacentElement
// // // insertAdjacentHtml
// // const foodItems = document.getElementById("food-items");

// // const newfood = document.createElement("li");
// // const inputFood = document.createTextNode(prompt("Enter the food item Name: "))
// // newfood.append(inputFood);
// // newfood.className = "food-item";
// // foodItems.insertAdjacentHTML("beforeend",`<li class="food-item">${newfood.textContent}</li>`)


// // const li = document.createElement("li");
// // li.textContent = "paruppu Sambar"
// // li.className = "food-item";


// // const firstEl = document.querySelector(".food-items :first-child")  // selecting a first child in the parent container
// // firstEl.replaceWith(li)  //changing the content using replace with method 

// // firstEl.parentElement.replaceChild(li, firstEl) // changing the first element using replacechild method

// // Changing the parent container
// // const newFood = document.createElement("li")
// // newFood.textContent = "Magggi"
// // newFood.className = "food-item"


// // foodItems.replaceChildren(newFood)

// //  Cloning dom elements -> returns a copy of node (tags or anything)
// // console.log(foodItems.children);


// // only clones the top of the element
// // const clonedData = foodItems.cloneNode();
// // console.log(clonedData);

// // cloneNode(true)
// // clone all of the elements and the childrens
// // const clonedData2 = foodItems.cloneNode(true)
// // console.log(clonedData2);

// // resync.addEventListener("click",()=>{
// //     duplicate.append(clonedData2)
// //     const e = document.createElement("li")
// //     e.textContent = prompt("Enter the food Name: ")
// //     e.className = "food-item"
// //     clonedData2.append(e)
    
// // })

// // appending values to the cloned


// // removing dom elements