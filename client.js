function validateClient() {
    var name = document.getElementById("clientName").value;
    var email = document.getElementById("clientEmail").value;
    var address = document.getElementById("clientAddress").value;
    var password = document.getElementById("clientPassword").value;
    var repeatPassword = document.getElementById("repeatPassword").value;
    if (name.trim() === "" || address.trim() === "") {
        alert("Please enter valid name and address.");
        return false;
    }
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }
    if (password.length < 6 || password !== repeatPassword) {
        alert("Please enter a valid password (at least 6 characters) and ensure both passwords match.");
        return false;
    }
    alert("Client information is valid!");
    return true;
}