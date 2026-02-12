const form = document.getElementById("name-form");
const nameInput = document.getElementById("name-input");
const message = document.getElementById("message");

form.addEventListener("submit", function(e) {
  e.preventDefault();
  const name = nameInput.value.trim();

  if (name === "") {
    message.textContent = "Bawal po Dapat Lagyan!";
    message.className = "text-danger mt-2";
  } else {
    message.textContent = `Hello Po, ${name}!.`;
    message.className = "text-success mt-2";
    nameInput.value = "";
  }
});
