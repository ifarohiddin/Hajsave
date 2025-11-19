// js/main.js
const app = {
    currentPage: 'home',
    user: null,
    isLoggedIn: false,
    balance: 12000000,
    goal: 70000000,
    progress: 17,
    transactions: [
        { id: 1, type: 'deposit', amount: 5000000, date: '2025-10-15', description: 'To‘lov qo‘shildi' },
        { id: 2, type: 'deposit', amount: 3000000, date: '2025-11-03', description: 'To‘lov qo‘shildi' },
        { id: 3, type: 'deposit', amount: 4000000, date: '2025-11-20', description: 'To‘lov qo‘shildi' }
    ],
    autoSave: { enabled: true, amount: 3000000, day: 1 }
};

// Navigate
function navigateTo(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const page = document.getElementById(pageId);
    if (page) page.classList.add('active');
    app.currentPage = pageId;

    document.querySelectorAll('.nav-link').forEach(l => {
        l.classList.remove('active');
        if (l.getAttribute('onclick')?.includes(pageId)) l.classList.add('active');
    });

    const navLinks = document.getElementById('navLinks');
    const mobileBtn = document.getElementById('mobileMenuBtn');
    navLinks?.classList.remove('active');
    mobileBtn?.classList.remove('active');

    window.scrollTo({ top: 0, behavior: 'smooth' });
    initPage(pageId);
}

// Mobile menu
function toggleMobileMenu() {
    document.getElementById('navLinks').classList.toggle('active');
    document.getElementById('mobileMenuBtn').classList.toggle('active');
}

// Counters
function animateCounter(el, target) {
    let current = 0;
    const inc = target / 100;
    const timer = setInterval(() => {
        current += inc;
        if (current >= target) {
            el.textContent = target.toLocaleString();
            clearInterval(timer);
        } else {
            el.textContent = Math.floor(current).toLocaleString();
        }
    }, 20);
}

// Scroll effects
window.addEventListener('scroll', () => {
    document.querySelector('.navbar').classList.toggle('scrolled', window.scrollY > 50);
});

// Notification
function showNotification(msg, type = 'info') {
    const n = document.createElement('div');
    n.className = `notification notification-${type}`;
    n.textContent = msg;
    n.style.cssText = `position:fixed;top:100px;right:20px;padding:16px 24px;background:${type==='success'?'#10b981':type==='error'?'#ef4444':'#00d4aa'};color:white;border-radius:12px;box-shadow:0 10px 30px rgba(0,0,0,0.3);z-index:10000;animation:slideInRight .3s ease`;
    document.body.appendChild(n);
    setTimeout(() => {
        n.style.animation = 'slideOutRight .3s ease';
        setTimeout(() => n.remove(), 300);
    }, 3000);
}

// Init page
function initPage(pageId) {
    if (pageId === 'home') initCounters();
    if (pageId === 'dashboard') initDashboard();
    if (pageId === 'funds') initFunds();
}

// Init
document.addEventListener('DOMContentLoaded', () => {
    navigateTo('home');
    initCounters();
    addAnimationStyles();
});

function initCounters() {
    document.querySelectorAll('.stat-number').forEach(el => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target, +entry.target.dataset.count);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        observer.observe(el);
    });
}

function addAnimationStyles() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight { from { transform: translateX(100px); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
        @keyframes slideOutRight { from { transform: translateX(0); opacity: 1; } to { transform: translateX(100px); opacity: 0; } }
    `;
    document.head.appendChild(style);
}

window.navigateTo = navigateTo;
window.toggleMobileMenu = toggleMobileMenu;
window.showNotification = showNotification;