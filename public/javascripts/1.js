function isValidPassword(password) {
    const passwordPattern = /^(?=.*\d)(?=.*[!@#$%^&*()_+[\]{}|;:'",.<>?/-])[A-Za-z\d!@#$%^&*()_+[\]{}|;:'",.<>?/-]{6,}$/;
    return passwordPattern.test(password);
}

document.getElementById('password').addEventListener('input', function() {
    const password = document.getElementById('password').value;
    const passwordError = document.getElementById('password-error');
    const passwordSuccess = document.getElementById('password-success'); 

    
    if (isValidPassword(password)) {
        passwordError.textContent = "";  
        passwordError.classList.remove('error');
        passwordSuccess.textContent = "Valid Password.";
        passwordSuccess.classList.add('success');
    } else {
        passwordSuccess.textContent = "";  
        passwordSuccess.classList.remove('success');
        passwordError.textContent = "The password must be at least 6 characters long, include a number, and a special character.";  
        passwordError.classList.add('error');
    }
});
function isValidEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(email);
}
document.getElementById('username').addEventListener('input', function() {
    const username = document.getElementById('username').value;
    const usernameError = document.getElementById('username-error');
    const usernameSuccess = document.getElementById('username-success'); 
    
    if (isValidEmail(username)) {
        usernameError.textContent = "";  
        usernameError.classList.remove('error');
        usernameSuccess.textContent = "Valid Email.";
        usernameSuccess.classList.add('success');
    } else {
        usernameSuccess.textContent = "";  
        usernameSuccess.classList.remove('success');
        usernameError.textContent = "Invalid username. Please enter a valid email address.";  
        usernameError.classList.add('error');
    }
});