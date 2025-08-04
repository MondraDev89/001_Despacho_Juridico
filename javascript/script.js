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
