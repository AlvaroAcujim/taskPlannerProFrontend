import {getUserById, login, authenticateUser, createUser} from './Services/userService.js';
const toggleFormRegister = document.getElementById('toggleFormRegister');
const toggleFormLogin = document.getElementById('toggleFormLogin');
const loginFormContainer = document.getElementById('loginForm');
const registerFormContainer = document.getElementById('registerForm');
const registerBut = document.getElementById('registerBut');
const loginBut = document.getElementById('loginBut');
const errorMessages = document.getElementById('errorMessagesLogin')


loginBut.addEventListener('click', async(ev) => {
    const identifier = document.getElementById('identifier').value.trim();
    const password = document.getElementById('password').value.trim();
    await login(identifier, password, errorMessageDisplay);
})
registerBut.addEventListener('click', async(ev) => {
    const registerUsername = document.getElementById('registerUsername').value.trim();
    const registerPassword = document.getElementById('registerPassword').value.trim();
    const registerEmail = document.getElementById('registerEmail').value.trim();
    await createUser(registerUsername, registerPassword, registerEmail, toggleDisplayForm);
})
toggleFormRegister.addEventListener('click', ev => {
    ev.preventDefault();
    toggleDisplayForm('none', 'block');
})
toggleFormLogin.addEventListener('click', ev => {
    ev.preventDefault();
    toggleDisplayForm('block', 'none');
})

const toggleDisplayForm = (displayLogin, displayRegister) => {
    loginFormContainer.style.display = displayLogin;
    registerFormContainer.style.display = displayRegister
}
const errorMessageDisplay = (display) => {
    errorMessages.style.display = display;
}