function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createButton = document.querySelector("button[data-create]");
createButton.addEventListener("click", () => {
  const input = document.querySelector("#controls input");
  const inputValue = input.value;
  let boxesList = [];
  for (let i = 0; i < inputValue; i++) {
    const box = document.createElement("div");
    box.style.backgroundColor = getRandomHexColor();
    const currentSize = 30 + 10 * i;
    
    box.style.width = `${currentSize}px`;
    box.style.height = `${currentSize}px`;
    boxesList.push(box);
  }

  const boxesDiv = document.querySelector("#boxes");
  destroyBoxes();
  boxesDiv.append(...boxesList);
});

function destroyBoxes() {
  const inputValue = document.querySelectorAll("#boxes div")
  for (let i = 0; i < inputValue.length; i++) {
    inputValue[i].remove();
  }
}

const destroyButton = document.querySelector("button[data-destroy]");
destroyButton.addEventListener("click", destroyBoxes);

// const boxesDiv = document.querySelector("#boxes");
// const createButton = document.querySelector("button[data-create]");
// createButton.addEventListener("click", () => {
//   const input = document.querySelector("#controls input");
//   const inputValue = input.value;
//   let divHolder = "";
//   for (let i = 0; i < inputValue; i++) {
//     const backgroundColor = getRandomHexColor();
//     const currentSize = 30 + 10 * i;
//     divHolder += `<div style="width: ${currentSize}px; height: ${currentSize}px; background-color: ${backgroundColor};"></div>`;
    
//   }
//   boxesDiv.innerHTML = divHolder;
// });

// function destroyBoxes() {
//   const inputValue = document.querySelector("#boxes")
//   inputValue.innerHTML = "";
// }

// const destroyButton = document.querySelector("button[data-destroy]");
// destroyButton.addEventListener("click", destroyBoxes);
