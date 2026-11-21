(() => {
  const root = document.getElementById('firstVisitComic');
  if (!root) return;
  const tabs = Array.from(root.querySelectorAll('[data-guide-tab]'));
  const panels = Array.from(root.querySelectorAll('.maeum-guide-panel'));
  const activate = (id) => {
    tabs.forEach((tab) => {
      const active = tab.dataset.guideTab === id;
      tab.classList.toggle('active', active);
      tab.setAttribute('aria-selected', String(active));
      tab.tabIndex = active ? 0 : -1;
    });
    panels.forEach((panel) => {
      const active = panel.id === id;
      panel.classList.toggle('active', active);
      panel.hidden = !active;
    });
  };
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => activate(tab.dataset.guideTab));
    tab.addEventListener('keydown', (event) => {
      if (!['ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      let next = index;
      if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
      if (event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;
      if (event.key === 'Home') next = 0;
      if (event.key === 'End') next = tabs.length - 1;
      tabs[next].focus();
      activate(tabs[next].dataset.guideTab);
    });
  });
  if (tabs[0]) activate(tabs[0].dataset.guideTab);
})();
