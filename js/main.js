// ============================================================
//  AMG Lab Website — JavaScript
// ============================================================

// ---------- Mobile nav toggle ----------
const toggle = document.getElementById('nav-toggle');
const nav    = document.getElementById('main-nav');

toggle.addEventListener('click', () => {
  nav.classList.toggle('open');
});

// Close nav when a link is clicked (mobile)
nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

// ---------- Active nav link on scroll ----------
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('#main-nav a');

function setActiveLink() {
  let current = '';
  const scrollY = window.scrollY + 80; // offset for fixed navbar height

  sections.forEach(section => {
    if (scrollY >= section.offsetTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', setActiveLink, { passive: true });
setActiveLink();
