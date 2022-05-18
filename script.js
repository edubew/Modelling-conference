// Navbar functionality
const hambuger = document.querySelector('.hambuger-menu');
const navbar = document.querySelector('.navbar-links');

hambuger.addEventListener('click', () => {
  hambuger.classList.toggle('active');
  navbar.classList.toggle('active');
});

document.querySelectorAll('.nav-items').forEach((e) => e.addEventListener('click', () => {
  hambuger.classList.remove('active');
  hambuger.classList.remove('active');
}));
