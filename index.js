// Menu Toggle
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// Tab functionality
function showTab(tabName) {
  // Hide all tab contents
  let contents = document.querySelectorAll('.tab-content');
  contents.forEach(content => {
    content.classList.add('hidden');
  });

  // Show the clicked tab's content
  document.getElementById(tabName).classList.remove('hidden');
}

// Set default tab to 'languages'
document.addEventListener('DOMContentLoaded', () => {
  showTab('languages');
});
