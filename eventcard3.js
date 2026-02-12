let currentLevel = 0;
const maxLevel = 6;

const levelBadge = document.getElementById("level-badge");
const levelText = document.getElementById("level-text");
const levelUpBtn = document.getElementById("level-up-btn");

function updateLevel() {
  levelBadge.textContent = `LEVEL ${currentLevel}`;
  levelText.textContent = `Web Dev Main Quest - Level ${currentLevel}`;
}

levelUpBtn.addEventListener("click", () => {
  if(currentLevel < maxLevel) {
    currentLevel++;
    updateLevel();
  } else {
    alert("Max kana boi!");
  }
});
