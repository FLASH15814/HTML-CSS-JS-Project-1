//JavaScript

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('subscriptionForm');
    const emailInput = document.getElementById('emailAddress');
    const subscribeButton = document.getElementById('subscribeButton');

    subscribeButton.addEventListener('click', function (event) {
        event.preventDefault();

        // Basic email validation
        const email = emailInput.value;
        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        alert(`Subscribing email: ${email}`);
        alert('Thankyou for subscribing');
        form.reset();
    });

    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});



// order form

function validateForm() {
var firstName = document.getElementById("FirstName").value;
var lastName = document.getElementById("LastName").value;
var email = document.getElementById("mailAddress").value;
var phone = document.getElementById("phone").value;
var state = document.getElementById("state").value;
var city = document.getElementById("city").value;
var cardNumber = document.getElementById("Payment1").value;

// Validate first name, last name, email, phone, state, city, card number, etc.


if (firstName === "" || lastName === "" || email === "" || phone === "" || state === "" || city === "" || cardNumber === "") {
    alert("Please fill out all required fields.");
    return false;
}

return true; // Form submission will occur if all validations pass.
}

document.getElementById("order-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    
    // You can perform any necessary form validation or processing here
    
    // Change the URL to the desired page
    window.location.href = "submission.html";
});
