const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const formData = new FormData(contactForm);
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');
  console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
  alert('تم إرسال رسالتك. شكرًا لتواصلك معنا!');
});