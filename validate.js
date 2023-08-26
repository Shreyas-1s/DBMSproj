document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("signup-form");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirm-password");
  
    form.addEventListener("submit", function (event) {
      // Validate email format
      if (!isValidEmail(emailInput.value)) {
        alert("Invalid email format");
        event.preventDefault();
      }
  
      // Validate password match
      if (passwordInput.value !== confirmPasswordInput.value) {
        alert("Passwords do not match");
        event.preventDefault();
      }
    });
  
    function isValidEmail(email) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(email);
    }
  });
  