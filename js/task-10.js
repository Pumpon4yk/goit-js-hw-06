function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector('input');
const create = document.querySelector('[data-create]');
const destroy = document.querySelector('[data-destroy]');
const divBox = document.querySelector('#boxes');

create.addEventListener('click', addBoxes)
destroy.addEventListener('click', destroyBoxes)
input.addEventListener('input', createBoxes)

  let size = 20;

function  createBoxes(amount){
  // console.dir(amount.currentTarget.value);
const num = amount.currentTarget.value
  return num;
}

console.log(createBoxes());

function addBoxes(){
  let divEls = ``;
  // const num = createBoxes();

  for (let i = 1; i <= createBoxes(); i += 1) {
  let divEl = `<div  style="background-color: ${getRandomHexColor()};width: ${size}px; height: ${size}px;margin: 5px; "></div>`;
  
  size += 10;
  divEls += divEl;
}

return divBox.innerHTML = divEls;
}


function destroyBoxes(){
  return divBox.innerHTML = '';
}


