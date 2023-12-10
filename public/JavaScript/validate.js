// buyform.js

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('buy-form');
  
    form.addEventListener('submit', async function (e) {
      e.preventDefault(); // Prevent the form from submitting normally
  
      const name = document.getElementById('name').value;
      const mobile = document.getElementById('mobile').value;
      const email = document.getElementById('email').value;
      const paymentMethod = document.getElementById('payment-method').value;
      const propertyId = document.getElementById('property-id').value;
  
      try {
        // Send a POST request to delete the property
        const response = await fetch('/delete-property', {
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
        });
  
        if (response.status === 200) {
          // Property deleted successfully, now redirect
          window.location.href = '/delete-properties';
        } else {
          console.error('Failed to delete property:', response.statusText);
          // Handle the error as needed
        }
      } catch (error) {
        console.error('Error:', error);
        // Handle the error as needed
      }
    });
  });
  