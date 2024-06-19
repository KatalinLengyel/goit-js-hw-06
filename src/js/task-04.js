const counterBtn = document.querySelector("#value");

let counterValue = 0;

const handleClick = type => {
    if (type === "decrement") {
        counterValue--;
    } else {
        counterValue++;
    }
    counterBtn.textContent = counterValue;
};

const decrementBtn = document.querySelector('button[data-action="decrement"]');

decrementBtn.addEventListener("click", () => handleClick("decrement") );


const incrementBtn = document.querySelector('button[data-action="increment"]');

incrementBtn.addEventListener("click", () => handleClick("increment"));
