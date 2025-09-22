document.querySelectorAll('.navbar nav a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

document.getElementById('contactForm').addEventListener('submit', function (e) {
  const name = document.querySelector('input[name="name"]');
  const email = document.querySelector('input[name="email"]');
  const message = document.querySelector('textarea[name="msg"]');

  if (!name.value || !email.value || !message.value) {
    e.preventDefault();
    alert('Please fill out all fields.');
  }
});
