// Hamburger toggle
const hamburger = document.querySelector('.hamburger');
const navUl = document.querySelector('nav ul');
if (hamburger && navUl) {
  hamburger.addEventListener('click', () => navUl.classList.toggle('open'));
}

// Theme toggle
const themeToggle = document.createElement('button');
themeToggle.type = 'button';
themeToggle.className = 'theme-toggle';
let currentTheme = localStorage.getItem('site-theme');

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  currentTheme = theme;
  localStorage.setItem('site-theme', theme);
  themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
  themeToggle.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
}

function initializeTheme() {
  const savedTheme = localStorage.getItem('site-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const startingTheme = savedTheme || (prefersDark ? 'dark' : 'light');
  applyTheme(startingTheme);
}

themeToggle.addEventListener('click', () => {
  applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
});

const nav = document.querySelector('nav');
if (nav && navUl) {
  nav.insertBefore(themeToggle, navUl);
  initializeTheme();
}

// Active nav link
const currentPage = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('nav ul li a').forEach(link => {
  const href = link.getAttribute('href').split('/').pop();
  if (href === currentPage) link.classList.add('active');
});
