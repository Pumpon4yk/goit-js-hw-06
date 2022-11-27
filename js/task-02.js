const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredEl = document.querySelector('#ingredients');

function createElement (value){

return value.map(el => {
  const item = document.createElement("li")
  item.textContent = `${el}`;
  item.classList.add('item');

  return item;
})
};

const element = createElement(ingredients);

ingredEl.append(...element)
