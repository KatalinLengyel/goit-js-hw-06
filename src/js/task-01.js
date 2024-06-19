const listItems = document.querySelectorAll("#categories .item");
const countItems = listItems.length;
console.log(`Number of categories: ${countItems}`);

for (let i = 0; i < listItems.length; i++) {
    const listItem = listItems[i];

    const category = listItem.querySelector("h2");
    console.log(`Category: ${category.textContent}`);

    const categElem = listItem.querySelectorAll("ul li");
    console.log(`Elements: ${categElem.length}`);
}

