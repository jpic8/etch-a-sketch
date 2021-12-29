//script.js

//DOM elements
const container = document.querySelector("#container");

//function square creates a single div and changes the color on mouseover
function square() {
  const newDiv = document.createElement("div");
  newDiv.classList.add("newSquare");
  newDiv.addEventListener("mouseover", function (event) {
    event.target.style.backgroundColor = "black";
  });
  container.appendChild(newDiv);
}

//function grid fills the container with squares based off predetermined CSS sizing
function grid() {
  for (i = 0; i < 6400; i++) {
    square();
  }
}

grid();
