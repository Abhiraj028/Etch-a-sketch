const container = document.querySelector(".container");
let flag;
createGrid(16);

const input = document.querySelector(".input");
input.addEventListener("input", () => {
  createGrid(input.value);
});

function createGrid(range){
    container.innerHTML = "";
    flag = "black";

    const size = document.querySelector(".num");
    size.innerText = range;

    for (let i = 0; i < range; i++) {
        const child = document.createElement("div");
        child.setAttribute("class", "head");
        container.appendChild(child);
      
        for (let j = 0; j < range; j++) {
          const follow = document.createElement("div");
          follow.setAttribute("class", "tails");
          follow.classList.add("box");
          child.appendChild(follow);
        }
      }
      paint(0,255);
}

function getRandomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const reset = document.querySelector(".reset");
reset.addEventListener("click",() => {
  const box = document.querySelectorAll(".box").forEach((box) => {
    box.setAttribute("style",`background-color: rgb(${0},${0},${0});`);
  })
  
});

const color = document.querySelector(".template");
color.addEventListener("click",() => {
  flag = "white";
  const box = document.querySelectorAll(".box").forEach((box) => {
    box.setAttribute("style",`background-color: rgb(${255},${255},${255});`);
  })
  
})


function paint(min,max){
  document.querySelectorAll(".box").forEach((box) => {
    box.addEventListener("mouseover", (min,max) => {
      box.setAttribute('style', `background-color: rgb(${getRandomBetween(0,255)},${getRandomBetween(0,255)},${getRandomBetween(0,255)});`);
    });
  });
}