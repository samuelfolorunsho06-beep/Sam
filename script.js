const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

const glow = document.querySelector('.cursor-glow');
window.addEventListener('pointermove', (e) => {
  if (!glow) return;
  glow.style.left = `${e.clientX}px`;
  glow.style.top = `${e.clientY}px`;
});

const hero = document.querySelector('.hero');
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  if (hero && y < window.innerHeight * 1.2) {
    hero.style.setProperty('--scroll', y);
    document.querySelectorAll('.hero-orbit').forEach((orb, index) => {
      orb.style.transform = `translateY(${y * (index ? .06 : .1)}px) rotate(${y * .012}deg)`;
    });
  }
});
