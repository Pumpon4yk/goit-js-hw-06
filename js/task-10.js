function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector("input");
const create = document.querySelector("[data-create]");
const destroy = document.querySelector("[data-destroy]");
const divBox = document.querySelector("#boxes");

create.addEventListener("click", onBoxes);
destroy.addEventListener("click", offBoxes);

function createBoxes(amount) {
  let size = 30;
  let divEls = ``;

  for (let i = 1; i <= amount; i += 1) {
    let divEl = `<div  style="background-color: ${getRandomHexColor()};width: ${size}px; height: ${size}px;margin: 5px; "></div>`;

    size += 10;
    divEls += divEl;
  }

  return (divBox.innerHTML = divEls);
}

function onBoxes (){

  return createBoxes(input.value);
}

function offBoxes() {
  input.value = '';
  return (divBox.innerHTML = "");
}
