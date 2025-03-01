const container = document.querySelector(".container");

createGrid(16);

const input = document.querySelector(".input");
input.addEventListener("click", () => {
  createGrid(input.value);
});

function createGrid(range){
    container.innerHTML = "";
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
}


document.querySelectorAll(".box").forEach((box) => {
  box.addEventListener("mouseover", () => {
    box.classList.add("red");
  });
});
