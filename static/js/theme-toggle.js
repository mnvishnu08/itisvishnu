// Function to initialize theme toggle functionality
function initializeThemeToggle() {
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const storedTheme = localStorage.getItem('theme');
  const documentElement = document.documentElement;
  const toggleIcon = document.getElementById('theme-toggle-icon');

  function setTheme(isDark) {
    // Add transition class before changing theme
    documentElement.classList.add('theme-transition');
    
    // Set theme
    documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    toggleIcon.textContent = isDark ? '☀️' : '🌙';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    
    // Remove transition class after animation completes
    setTimeout(() => {
      documentElement.classList.remove('theme-transition');
    }, 300);
  }

  // Initialize theme
  const initialTheme = storedTheme ? storedTheme === 'dark' : prefersDarkMode;
  setTheme(initialTheme);

  // Handle toggle button click
  const toggleButton = document.getElementById('theme-toggle');
  if (toggleButton) {
    toggleButton.addEventListener('click', () => {
      const currentTheme = documentElement.getAttribute('data-theme');
      setTheme(currentTheme !== 'dark');
    });
  }

  // Handle system theme changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (!localStorage.getItem('theme')) {
      setTheme(e.matches);
    }
  });
}

document.addEventListener('DOMContentLoaded', initializeThemeToggle);