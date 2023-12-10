
function validateEmail()
{
    var email = document.getElementById("email").value;
    if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))
    {
        alert("Email is accepted.");
    }
    else{
        alert("Invalid email");
    }
}
function validatePassword() {
    const password = document.getElementById("password").value;
    const passwordError = document.getElementById("passwordError");
  
    // Check if password meets requirements
    if (password.length < 8) {
      passerror = "Password must be at least 8 characters long";
    } else if (!/\d/.test(password)) {
      passerror = "Password must contain at least one digit";
    } else if (!/[a-z]/.test(password)) {
      passerror = "Password must contain at least one lowercase letter";
    } else if (!/[A-Z]/.test(password)) {
      passerror = "Password must contain at least one uppercase letter";
    } else if (!/[!@#$%^&*]/.test(password)) {
      passerror = "Password must contain at least one special character";
    } else {
      passerror = "Press login.";
    }
    alert(passerror);
  }
 function forgotPass()
 {
    alert("Please check your email.")
 }

 window.onscroll = function() {scrollFunction()};

 function scrollFunction() {
   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
     document.getElementById("my-nav").classList.add("scroll");
   } else {
     document.getElementById("my-nav").classList.remove("scroll");
   }
 }
 

