const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const container = document.getElementById("ingredients");
const fragment = document.createDocumentFragment();

ingredients.forEach(el => {
  const ing = document.createElement("li");
  ing.innerText = el;
  ing.classList.add("item");
  fragment.appendChild(ing);
})

container.appendChild(fragment);