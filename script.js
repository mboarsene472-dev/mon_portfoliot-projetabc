
    function toggleTheme() {
      const root = document.documentElement;
      const cur = root.getAttribute('data-theme');
      const isLight = cur === 'light' || (!cur && window.matchMedia('(prefers-color-scheme: light)').matches);
      const next = isLight ? 'dark' : 'light';
      root.setAttribute('data-theme', next);
      document.getElementById('themeBtn').textContent = next === 'dark' ? '🌙' : '☀️';
      try { localStorage.setItem('theme', next); } catch (e) { }
    }
    try {
      const saved = localStorage.getItem('theme');
      if (saved) {
        document.documentElement.setAttribute('data-theme', saved);
        document.getElementById('themeBtn').textContent = saved === 'dark' ? '🌙' : '☀️';
      }
    } catch (e) { }
  