// Sticky nav
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
});

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navList   = document.getElementById('navList');
navToggle?.addEventListener('click', () => navList.classList.toggle('open'));
navList?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navList.classList.remove('open')));

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Scroll reveal — runs after members/gigs/store scripts have rendered their elements
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Language toggle
const langButtons = document.querySelectorAll('.lang-toggle button');

function setLang(lang) {
  langButtons.forEach(b => {
    const active = b.dataset.lang === lang;
    b.classList.toggle('active', active);
    b.setAttribute('aria-pressed', active);
  });
  document.querySelectorAll('.lang-content').forEach(el => {
    el.classList.toggle('active', el.dataset.lang === lang);
  });
  document.querySelectorAll('[data-en][data-sl]').forEach(el => {
    const v = el.dataset[lang];
    if (v != null) el.textContent = v;
  });
  document.documentElement.lang = lang === 'sl' ? 'sl' : 'en';
  try { localStorage.setItem('eos_lang', lang); } catch (e) {}
}

langButtons.forEach(b => b.addEventListener('click', () => setLang(b.dataset.lang)));

// Restore saved language preference
try {
  const saved = localStorage.getItem('eos_lang');
  if (saved === 'sl' || saved === 'en') setLang(saved);
} catch (e) {}
