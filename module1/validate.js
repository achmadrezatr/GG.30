function validateForm() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    // Email format validation
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Password length validation
    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return false;
    }

    // Empty field validation
    if (email.trim() === "" || password.trim() === "") {
        alert("Please fill in both email and password fields.");
        return false;
    }
    return alert('login berhasil');
}