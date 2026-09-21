const nav = document.querySelector('.nav');
const menu = document.querySelector('.menu');
menu?.addEventListener('click', () => nav.classList.toggle('open'));

document.querySelectorAll('.nav a, .nav nav a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});
