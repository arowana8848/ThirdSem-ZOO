const email = document.getElementById('email');
const pass = document.getElementById('password');
login.addEventListener('click',() => {
    // window.location.href = "dashboard.html";
    if (email.value === "admin" && pass.value === "admin"){
        alert("Login successful!");
        window.location.href = "dashboard.html";
    }
    else {
        alert("Login failed. Please check your credentials.");
    }
    } );
    /**
logbutton.addEventListener('click', () => {
    // Replace these with actual validation logic
    const correctName = "John"; // Example predefined name
    const correctSName = "Doe"; // Example predefined surname
    const correctMail = "john.doe.com"; // Example predefined email
    const correctTel = "1234567890"; // Example predefined phone number

    // Condition to check if user input matches predefined credentials
    if (
        name.value === correctName &&
        sname.value === correctSName &&
        mail.value === correctMail &&
        tel.value === correctTel
    ) {
        alert("Login successful!");
    } else {
        alert("Login failed. Please check your credentials.");
    }
});

     */