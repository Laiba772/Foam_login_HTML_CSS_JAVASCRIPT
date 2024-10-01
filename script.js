document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Default form submission ko rokna

    const username = document.getElementById('Username').value;
    const password = document.getElementById('Password').value;

    // Basic validation (yahan aap apne logic ko implement kar sakte hain)
    if (username === 'admin' && password === 'Password') {
        alert('Login Successful!');
        // Yahan aapko redirect ya kisi aur functionality implement karni hai
    } else {
        alert('Invalid username or password');
    }
});    