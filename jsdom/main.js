// import "./functionality";
const inputFood = document.getElementById("inputFood");

const foodItems = document.getElementById("food-items");

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

const fragment = document.createDocumentFragment();

saveBtn.addEventListener("click", () => {
  const foodItem = inputFood.value;
  if (foodItem !== "") {
    const newFood = document.createElement("li");
    newFood.append(foodItem);
    newFood.textContent = foodItem;
    newFood.className = "food-item";
    fragment.append(newFood);
    foodItems.appendChild(fragment)
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
