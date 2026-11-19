(() => {
  const root = document.getElementById('firstVisitComic');
  if (!root) return;
  const slides = Array.from(root.querySelectorAll('[data-comic-slide]'));
  const dots = Array.from(root.querySelectorAll('.comic-dots i'));
  const counter = document.getElementById('comicCounter');
  const previous = document.getElementById('prevComicBtn');
  const next = document.getElementById('nextComicBtn');
  let index = 0;
  const show = (nextIndex) => {
    index = Math.max(0, Math.min(slides.length - 1, nextIndex));
    slides.forEach((slide, i) => {
      const active = i === index;
      slide.classList.toggle('active', active);
      slide.setAttribute('aria-hidden', String(!active));
    });
    dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
    counter.textContent = `${index + 1} / ${slides.length}`;
    previous.disabled = index === 0;
    next.disabled = index === slides.length - 1;
    next.textContent = index === slides.length - 1 ? '마지막 컷' : '다음 컷 →';
  };
  previous.addEventListener('click', () => show(index - 1));
  next.addEventListener('click', () => show(index + 1));
  show(0);
})();
