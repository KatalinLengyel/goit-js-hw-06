const textElement = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

textElement.addEventListener("input", () => {
    const size = `${textElement.value}px`;
    text.style.fontSize = size;
} );