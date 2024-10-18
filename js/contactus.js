document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Fetch form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Simulate form submission (Replace this with actual backend integration)
    console.log('Form submitted with data:', { name, email, message });

    // Display success message
    document.getElementById('success-message').style.display = 'block';

    // Clear form
    document.getElementById('contact-form').reset();
});
