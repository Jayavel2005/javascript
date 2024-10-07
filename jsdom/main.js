// import "./functionality";
const inputFood = document.getElementById("inputFood");

const foodItemsContainer = document.getElementById("food-items");

const mainContainer = document.getElementById("main-container");

// Create a new div element to display the alert message
const successAlert = document.createElement("div");
const successAlertMessage = document.createTextNode("Your food is updated!");
successAlert.className = "alert-message";
successAlert.append(successAlertMessage);
mainContainer.prepend(successAlert);

// If the user does'nt type in the input field and clicking the save food
// button, display the alert message
const unsuccessAlert = document.createElement("div");
const unsuccessAlertMessage = document.createTextNode(
  "Please Add a Food item 🍕"
);
unsuccessAlert.className = "error-alert";
unsuccessAlert.append(unsuccessAlertMessage);
mainContainer.prepend(unsuccessAlert);

const saveBtn = document.getElementById("saveBtn");



saveBtn.addEventListener("click", () => {
  const foodItemValue = inputFood.value;
  if (foodItemValue !== "") {

    // <li class="food-item">
    // <div>Rasam</div>
    // <button class="cancel-btn" onclick="deleteFood(event)"><i class="fa-solid fa-trash"></i></button>
    // </li>
    const foodList = document.createElement("li");
    foodList.className = 'food-item';
    const foodName = document.createElement("div");
    foodName.textContent = foodItemValue;
    const foodDeleteBtn = document.createElement("button");
    foodDeleteBtn.className = 'cancel-btn';
    foodDeleteBtn.innerHTML =   `<i class="fa-solid fa-trash"></i>`;
    foodDeleteBtn.setAttribute("onclick","deleteFood(event)");
    console.log(foodDeleteBtn);
    foodList.append(foodName, foodDeleteBtn);
    foodItemsContainer.append(foodList);
    
    
    
    // console.log(foodName);
    console.log(foodList);
    
    
    
    





    // foodItems.append(newFood);
    inputFood.value = "";
    successAlert.style.display = "block";
    successAlert.style.opacity = "1";

    setTimeout(() => {
      successAlert.style.opacity = "0";
      setTimeout(() => {
        // Hides the alert after it fades out
        successAlert.style.display = "none";
      }, 1000);
    }, 1500);
  } else {
    unsuccessAlert.style.display = "block";
    unsuccessAlert.style.opacity = "1";
    setTimeout(() => {
      unsuccessAlert.style.opacity = "0";
      setTimeout(() => {
        // Hides the alert after it fades out
        unsuccessAlert.style.display = "none";
      }, 1000);
    }, 1500);
  }
});


// item deletion

// <li class="food-item">
// <div>Rasam</div>
// <button class="cancel-btn" onclick="deleteFood(event)"><i class="fa-solid fa-trash"></i></button>
// </li>


function deleteFood(event) {
  let foodItem = event.target.parentElement.parentElement;
  foodItem.remove()

}