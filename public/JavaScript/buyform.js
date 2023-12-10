// buyform.js

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('buy-form');
    const propertyId = new URLSearchParams(window.location.search).get('id');
  
    form.addEventListener('submit', function (e) {
      e.preventDefault(); // Prevent the form from submitting normally
  
      const name = document.getElementById('name').value;
      const mobile = document.getElementById('mobile').value;
      const email = document.getElementById('email').value;
      const paymentMethod = document.getElementById('payment-method').value;
  
      // Send a POST request to the server to delete the property
      fetch('/delete-property', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          propertyId,
          name,
          mobile,
          email,
          paymentMethod,
        }),
      })
        .then(response => {
          if (response.ok) {
            // Property was deleted successfully
            window.location.href = '/thank-you.html'; // Redirect to a thank you page
          } else {
            // Handle error cases
            console.error('Error deleting property:', response.statusText);
            // Optionally display an error message to the user
          }
        })
        .catch(error => {
          console.error('Network error:', error);
          // Handle network errors
        });
    });
  });
  // buyform.js

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('buy-form');
  
    // Extract the property ID from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const propertyId = urlParams.get('id');
  
    // Set the property ID as a value in the hidden input field
    const propertyIdField = document.getElementById('property-id');
    propertyIdField.value = propertyId;
  
    form.addEventListener('submit', function (e) {
      e.preventDefault(); // Prevent the form from submitting normally
  
      const name = document.getElementById('name').value;
      const mobile = document.getElementById('mobile').value;
      const email = document.getElementById('email').value;
      const paymentMethod = document.getElementById('payment-method').value;
  
      // You can now access the propertyId, name, mobile, email, and paymentMethod
      // and include them in your form submission to the server
    });
  });
  