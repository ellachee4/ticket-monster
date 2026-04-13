// Hamburger toggle
const hamburger = document.querySelector('.hamburger');
const navUl = document.querySelector('nav ul');
if (hamburger && navUl) {
  hamburger.addEventListener('click', () => navUl.classList.toggle('open'));
}

// Active nav link
const currentPage = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('nav ul li a').forEach(link => {
  const href = link.getAttribute('href').split('/').pop();
  if (href === currentPage) link.classList.add('active');
});
