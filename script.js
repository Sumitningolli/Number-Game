const button = document.querySelector(".btn");
const output = document.querySelector(".para");
const inputContainer = document.querySelector(".inputContainer");
const heading = document.querySelector(".heading");

const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempt = 0;

button.addEventListener("click", () => {
  const inputValue = inputContainer.value;

  if (!inputValue) {
    output.innerHTML = "Enter the number between 1️⃣ to 💯..";
    output.style.color = "red";
    return;
  }

  const userGuess = Number(inputValue);

  if (isNaN(userGuess)) {
    output.innerHTML = "Please enter number only";
    output.style.color = "red";
    return;
  }

  if (userGuess < 1 || userGuess > 100) {
    output.innerHTML = "Number must be 1 to 100.🤔";
    output.style.color = "red";
    return;
  }

  attempt++;

  if (userGuess === randomNumber) {
    output.innerHTML = `🎉 Correct! The number was ${randomNumber},You guessed in ${attempt} attempts`;
    heading.innerHTML = "Congratulations! 🎉🎇";
    output.style.color = "blue";

    // Hide button and input
    button.style.display = "none";
    inputContainer.style.display = "none";
  } else if (userGuess < randomNumber) {
    output.innerHTML = `Number ${userGuess} ⬆️ Too low!`;
    output.style.color = "red";
  } else {
    output.innerHTML = `Number ${userGuess} ⬇️ Too High!`;
    output.style.color = "red";
  }

  inputContainer.value = "";
});
