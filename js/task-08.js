const form = document.querySelector('.login-form');

form.addEventListener("submit", submit);

function submit(event) {
    event.preventDefault();
    const {elements: { email, password }} = event.currentTarget;

    if (email.value === '' || password.value  === '') {
        return alert('Всі поля повинні бути заповнені')
    };
    
const value = {
    email: email.value,
    password: password.value,
}
    console.log(value);
    
    return form.reset();
}



