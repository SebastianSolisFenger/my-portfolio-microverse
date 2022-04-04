const menuBtn = document.querySelector('.nav-hamburger');
const navlinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
  navlinks.classList.toggle('activin');
  menuBtn.classList.toggle('active');
});

document.querySelectorAll('.links-mob').forEach((link) => link.addEventListener('click', () => {
  navlinks.classList.remove('activin');
  menuBtn.classList.remove('active');
}));
