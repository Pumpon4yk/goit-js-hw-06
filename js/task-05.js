const refs = {
    input: document.querySelector('#name-input'),
    span: document.querySelector('#name-output'),
}

refs.input.addEventListener('input', onInputChange)

    function onInputChange(event) {
        if(refs.input.value === ""){
           return refs.span.textContent = "Anonymous";
        }
       return refs.span.textContent = event.currentTarget.value;
    }

