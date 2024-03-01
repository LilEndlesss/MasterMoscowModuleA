function showRegistration() {
    document.getElementById('registration-section').style.display = 'block';
    document.getElementById('login-section').style.display = 'none';
    document.getElementById('user-dashboard').style.display = 'none';
    document.getElementById('guest-nav').style.display = 'block';
    document.getElementById('user-nav').style.display = 'none';
}

function showLogin() {
    document.getElementById('registration-section').style.display = 'none';
    document.getElementById('login-section').style.display = 'block';
    document.getElementById('user-dashboard').style.display = 'none';
    document.getElementById('guest-nav').style.display = 'block';
    document.getElementById('user-nav').style.display = 'none';
}

function showUserDashboard() {
    document.getElementById('registration-section').style.display = 'none';
    document.getElementById('login-section').style.display = 'none';
    document.getElementById('user-dashboard').style.display = 'block';
    document.getElementById('guest-nav').style.display = 'none';
    document.getElementById('user-nav').style.display = 'block';
}

function logout() {
    showRegistration();
}
