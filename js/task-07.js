const rangeInputRefs = document.querySelector('#font-size-control');
const spanRef = document.querySelector('#text');

rangeInputRefs.addEventListener('input', onChange);

function onChange(){  
    const value = rangeInputRefs.value;
    
    return spanRef.style.fontSize = `${value}px`;
}