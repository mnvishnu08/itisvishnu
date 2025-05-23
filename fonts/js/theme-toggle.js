// Check for saved theme preference or use the system preference
const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const storedTheme = localStorage.getItem('theme');

// Function to set theme
function setTheme(isDark) {
  if (isDark) {
    document.documentElement.setAttribute('data-theme', 'dark');
    document.getElementById('theme-toggle-icon').textContent = '☀️';
  } else {
    document.documentElement.removeAttribute('data-theme');
    document.getElementById('theme-toggle-icon').textContent = '🌙';
  }
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// Initialize theme when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Initialize theme
  if (storedTheme) {
    setTheme(storedTheme === 'dark');
  } else {
    setTheme(prefersDarkMode);
  }
  
  // Handle toggle button click
  document.getElementById('theme-toggle').addEventListener('click', function() {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    setTheme(!isDark);
  });
});