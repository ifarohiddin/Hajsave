// js/auth.js
document.getElementById('loginForm')?.addEventListener('submit', e => {
    e.preventDefault();
    const email = e.target.querySelector('input[type=text], input[type=email]').value.trim();
    const password = e.target.querySelector('input[type=password]').value;

    if (email && password) {
        app.isLoggedIn = true;
        app.user = { email, name: "Ahmad Karimov" };
        showNotification('Muvaffaqiyatli kirish!', 'success');
        navigateTo('dashboard');
        updateAuthUI();
    } else {
        showNotification('Iltimos, barcha maydonlarni to‘ldiring', 'error');
    }
});

function showRegister(e) {
    e.preventDefault();
    const name = prompt("Ismingizni kiriting:");
    const email = prompt("Email yoki telefon:");
    const password = prompt("Yangi parol:");

    if (name && email && password) {
        app.isLoggedIn = true;
        app.user = { name, email };
        showNotification('Ro‘yxatdan o‘tish muvaffaqiyatli!', 'success');
        navigateTo('dashboard');
        updateAuthUI();
    }
}

function logout() {
    app.isLoggedIn = false;
    app.user = null;
    showNotification('Chiqish amalga oshirildi', 'info');
    navigateTo('home');
    updateAuthUI();
}

function updateAuthUI() {
    const loginBtn = document.querySelector('.btn-primary[onclick="navigateTo(\'login\')"]');
    if (app.isLoggedIn && loginBtn) {
        loginBtn.innerHTML = `<span>${app.user.name.split(' ')[0]}</span> <svg width="16" height="16" viewBox="0 0 20 20"><path d="M6 4l8 6-8 6V4z" fill="currentColor"/></svg>`;
        loginBtn.onclick = () => navigateTo('settings');
    }
}

window.showRegister = showRegister;
window.logout = logout;