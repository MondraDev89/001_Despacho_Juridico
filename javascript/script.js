const toggleBtn = document.getElementById('menu-hamburguesa');
const sideMenu = document.getElementById('menu-lateral');
const menuLinks = document.querySelectorAll('.menu-lateral a');
const overlay = document.getElementById('overlay');

// Abrir/cerrar menú y fondo oscuro
toggleBtn.addEventListener('click', () => {
  toggleBtn.classList.toggle('open');
  sideMenu.classList.toggle('open');
  overlay.classList.toggle('visible');
});

// Cerrar menú al hacer clic en un enlace
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    toggleBtn.classList.remove('open');
    sideMenu.classList.remove('open');
    overlay.classList.remove('visible');
  });
});

// Cerrar menú al hacer clic fuera
overlay.addEventListener('click', () => {
  toggleBtn.classList.remove('open');
  sideMenu.classList.remove('open');
  overlay.classList.remove('visible');
});

//validar email
const form = document.getElementById('formulario');
const emailInput = document.getElementById('email');
const emailError = document.getElementById('emailError');

form.addEventListener('submit', function (event) {
  const emailValue = emailInput.value.trim();
  const gmailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

  // Validación Gmail
  if (!gmailPattern.test(emailValue)) {
    emailError.style.display = 'block';
    event.preventDefault();
  } else {
    emailError.style.display = 'none';
  }
});