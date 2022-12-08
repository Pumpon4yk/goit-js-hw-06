const rangeInputRefs = document.querySelector('#font-size-control');
const spanRef = document.querySelector('#text');

spanRef.style.fontSize = `${rangeInputRefs.value}px`;
rangeInputRefs.addEventListener('input', onChange);

function onChange(){  
    return spanRef.style.fontSize = `${rangeInputRefs.value}px`;
}