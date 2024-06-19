const element = document.querySelector("#name-input");

const output = document.querySelector("#name-output");

const handleKeyUp = event => {
    let value = event.currentTarget.value;
    value = value ? value : "Anonymous";
    output.textContent = value;
}

element.addEventListener("keyup", handleKeyUp);
