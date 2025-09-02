const changeBtn = document.getElementById("btn-changer");
const colorContainer = document.querySelector(".container");
const colorBoxes = document.querySelector(".color-box");
const colorCode = document.getElementById("color-code");

const modal = document.getElementById("myModal");
const openBtn = document.getElementById("openModal");
const closeBtn = document.getElementById("closeModal");
const promptDesc = document.getElementById("prompt-desc");

// Function to generate a random hex color
function getRandomHexColor() {
  const hexChars = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hexChars[Math.floor(Math.random() * 16)];
  }
  return color;
}

function displayColorBoxes() {
  const hexColor = getRandomHexColor();
  colorBoxes.style.backgroundColor = hexColor;
  colorCode.textContent = hexColor;
  console.log(colorBoxes);
}

// Event listener for the button to change colors
changeBtn.addEventListener("click", function () {
  displayColorBoxes();
  console.log("Button clicked");
});

// Code for copying to clipboard
function copyToClipboard(text) {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      console.log("Copied:", text);
    })
    .catch((err) => {
      console.error("Failed to copy: ", err);
    });
}

// open modal
openBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

// close modal
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// close when clicking outside
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// Event listener for the container to copy the hex code
colorBoxes.addEventListener("click", function () {
  const hexCode = colorCode.textContent; // assuming box has hex text
  copyToClipboard(hexCode);
});
