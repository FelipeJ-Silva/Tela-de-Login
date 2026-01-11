const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
const togglePasswords = document.querySelectorAll('.toggle-password');

// Abre o Modal
btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});

// Fecha o Modal
iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});

// Vai para Cadastro
registerLink.addEventListener('click', (e) => {
    e.preventDefault(); // Evita recarregar a página
    wrapper.classList.add('active');
});

// Volta para Login
loginLink.addEventListener('click', (e) => {
    e.preventDefault();
    wrapper.classList.remove('active');
});

// Lógica de Mostrar/Esconder Senha
togglePasswords.forEach(toggle => {
    toggle.addEventListener('click', () => {
        const input = toggle.parentElement.querySelector('input');
        const icon = toggle.querySelector('ion-icon');

        if (input.type === "password") {
            input.type = "text";
            icon.setAttribute('name', 'eye-outline');
        } else {
            input.type = "password";
            icon.setAttribute('name', 'eye-off-outline');
        }
    });
});