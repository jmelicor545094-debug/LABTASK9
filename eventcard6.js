const correctDoor = Math.floor(Math.random() * 3) + 1;

console.log("Correct door is:", correctDoor);

const doorButtons = document.querySelectorAll(".door-btn");
const doorMessage = document.getElementById("door-message");

doorButtons.forEach(button => {
  button.addEventListener("click", () => {
    const selectedDoor = parseInt(button.getAttribute("data-door"));

    if(selectedDoor === correctDoor) {
      doorMessage.textContent = "Congratulations Bigyan Ng Jacket Yan!!!!";
      doorMessage.className = "text-success mt-2";
    } else {
      doorMessage.textContent = "Oops! Way kamo!";
      doorMessage.className = "text-danger mt-2";
    }
  });
});
