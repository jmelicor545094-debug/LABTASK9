let coins = 0;

const coinCount = document.getElementById("coin-count");
const plusBtn = document.getElementById("plus-btn");
const minusBtn = document.getElementById("minus-btn");

function updateCoins() {
  coinCount.textContent = coins;
}

plusBtn.addEventListener("click", () => {
  coins++;
  updateCoins();
});

minusBtn.addEventListener("click", () => {
  if(coins > 0) {
    coins--;
    updateCoins();
  }
});
