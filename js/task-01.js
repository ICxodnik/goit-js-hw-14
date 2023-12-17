
function variant1() {
    console.log("Variant 1");
    const categories = document.querySelectorAll("#categories > li");

    console.log("Number of categories: " + categories.length);
    categories.forEach(el => {
        console.log("Category: " + el.firstElementChild.textContent);
        console.log("Elements: " + el.lastElementChild.childElementCount);
    });
}

function variant2() {
    console.log("Variant 2");
    const refs = {
        categoryNames: document.querySelectorAll("#categories > li > h2"),
        categoryList: document.querySelectorAll("#categories > li > ul"),
    }
    console.log("Number of categories: " + refs.categoryNames.length);
    refs.categoryList.forEach((el, index) => {
        console.log("Category: " + refs.categoryNames[index].textContent);
        console.log("Elements: " + el.childElementCount);
    });
}

function variant3() {
    console.log("Variant 3");
    const categoryContainer = document.querySelectorAll("#categories > li");

    console.log("Number of categories: " + categoryContainer.length);
    categoryContainer.forEach((el) => {
        console.log("Category: " + el.querySelector("h2").textContent);
        console.log("Elements: " + el.querySelector("ul").childElementCount);
    });
}

variant1();
variant2();
variant3();

