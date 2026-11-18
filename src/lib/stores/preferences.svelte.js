function readInitialTheme() {
  if (typeof window === 'undefined') return 'dark';
  try {
    const saved = localStorage.getItem('azkaik-theme');
    if (saved === 'light' || saved === 'dark') return saved;
  } catch {}
  return 'dark';
}

function readInitialLang() {
  if (typeof window === 'undefined') return 'id';
  try {
    const saved = localStorage.getItem('azkaik-lang');
    if (saved === 'en' || saved === 'id') return saved;
  } catch {}
  return 'id';
}

function syncDocumentTheme(nextTheme) {
  if (typeof document === 'undefined') return;
  const isDark = nextTheme === 'dark';
  document.documentElement.classList.toggle('dark', isDark);
  document.documentElement.classList.toggle('light', !isDark);
  try {
    localStorage.setItem('azkaik-theme', nextTheme);
  } catch {}
}

function syncDocumentLang(nextLang) {
  if (typeof document === 'undefined') return;
  document.documentElement.lang = nextLang;
  try {
    localStorage.setItem('azkaik-lang', nextLang);
  } catch {}
}

class PreferencesStore {
  theme = $state(readInitialTheme());
  lang = $state(readInitialLang());

  toggleTheme = () => {
    this.theme = this.theme === 'dark' ? 'light' : 'dark';
    syncDocumentTheme(this.theme);
  };

  setLang = (nextLang) => {
    if (nextLang !== 'id' && nextLang !== 'en') return;
    this.lang = nextLang;
    syncDocumentLang(nextLang);
  };

  toggleLang = () => {
    this.setLang(this.lang === 'id' ? 'en' : 'id');
  };
}

export const preferences = new PreferencesStore();
