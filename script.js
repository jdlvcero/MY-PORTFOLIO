
 // Select the mobile menu button and the navigation links.
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

// Open or close the mobile menu when its button is clicked.
function toggleMenu() {
  const isOpen = navLinks.classList.toggle('open');

  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute(
    'aria-label',
    isOpen ? 'Close navigation menu' : 'Open navigation menu'
  );
}

// Close the menu after choosing a section link.
function closeMenu() {
  navLinks.classList.remove('open');

  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Open navigation menu');
}

// Connect the button and anchor links to their functions.
menuToggle.addEventListener('click', toggleMenu);

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', closeMenu);
});

// Update the copyright year automatically.
document.getElementById('year').textContent = new Date().getFullYear();
