const chapterLinks = [...document.querySelectorAll('.chapter-link')];
const sections = chapterLinks
  .map((link) => document.querySelector(link.getAttribute('href')))
  .filter(Boolean);

const setActiveChapter = () => {
  const marker = window.scrollY + window.innerHeight * 0.32;
  let current = sections[0]?.id;
  sections.forEach((section) => {
    if (section.offsetTop <= marker) current = section.id;
  });
  chapterLinks.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${current}`));
};

window.addEventListener('scroll', setActiveChapter, { passive: true });
setActiveChapter();

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

document.querySelectorAll('details').forEach((detail) => {
  detail.addEventListener('toggle', () => {
    if (detail.open) {
      document.querySelectorAll('details[open]').forEach((other) => {
        if (other !== detail) other.removeAttribute('open');
      });
    }
  });
});
