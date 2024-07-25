document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const appointmentType = document.getElementById('appointment-type').value;
    const date = document.getElementById('date').value;
    const message = document.getElementById('message').value;
  
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }
  
    if (!name || !email || !phone || !appointmentType || !date || !message) {
        alert('Please fill out all fields.');
        return;
    }
  
    console.log('Form submitted successfully:', {
        name,
        email,
        phone,
        appointmentType,
        date,
        message
    });
  
    alert('Your message has been sent successfully!');
  
    
  });

    document.getElementById('revealButton').addEventListener('click', function() {
        document.getElementById('message').style.display = 'block';
    });
