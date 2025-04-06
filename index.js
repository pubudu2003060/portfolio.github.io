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



  document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm("service_2l35k38", "template_z4zmuc7", this)
      .then(function () {
        alert("Message sent successfully!");
        document.getElementById("contact-form").reset();
      }, function (error) {
        alert("Failed to send message. Error: " + JSON.stringify(error));
      });
  });

