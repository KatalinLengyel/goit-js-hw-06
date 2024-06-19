const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingrHolder = document.querySelector("#ingredients");

const liList = [];

for (let i = 0; i < ingredients.length; i++) {
    const li = document.createElement("li");
    li.textContent = ingredients[i];
    li.classList.add("item");
    liList.push(li);
}

ingrHolder.append(...liList);
