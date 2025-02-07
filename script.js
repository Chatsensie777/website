// Simple scroll animation for smooth scrolling
document.querySelector('.cta-button').addEventListener('click', function(event) {
  event.preventDefault();
  document.querySelector('#destinations').scrollIntoView({ behavior: 'smooth' });
});
