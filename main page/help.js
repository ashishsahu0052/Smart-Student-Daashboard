// Initialize EmailJS
emailjs.init("YOUR_USER_ID"); // Replace with your EmailJS user ID

// Function to handle form submission
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Prepare the email content
    var templateParams = {
        name: name,
        email: email,
        message: message
    };

    // Send the email using EmailJS
    emailjs.send("sbashish00522@gmail.com", "sbashish0052@gmail.com", templateParams)  // Replace with your service ID and template ID
        .then(function(response) {
            alert("Your message has been sent successfully!");
            document.getElementById("contactForm").reset(); // Reset the form after successful submission
        }, function(error) {
            alert("Failed to send the message. Please try again.");
        });
});
