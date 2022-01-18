const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector('#ingredients');

const items = ingredients.map(item => {
  const itemOfListEl = document.createElement('li');
  itemOfListEl.textContent = item;
  return itemOfListEl;
});
console.log(items);

listEl.append(...items);


// const listEl = document.querySelector('#ingredients');
// const markupEl = ingredients.reduce((str, item) =>
//   str + `<li>${item}</li>`,
//   "");
// console.log(markupEl);
// listEl.innerHTML = markupEl;
