  document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form values
    const name = document.getElementById('clientName').value;
    const email = document.getElementById('clientEmail').value;
    const phone = document.getElementById('clientPhone').value;
    const enquiry = document.getElementById('clientEnquiry').value;
    const isClient = document.getElementById('isClient').checked;

    // Basic validation
    if (!name || !email || !phone || !enquiry) {
        alert('Please fill out all fields.');
        return;
    }

    // Show confirmation message
    alert(`Thank you for your message, ${name}! We will get back to you soon.`);

    // Clear the form
    document.querySelector('form').reset();
}); 
