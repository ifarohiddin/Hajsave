// js/dashboard.js
function initDashboard() {
    updateBalance();
    updateJourney();
    renderTransactions();
    initAutoSave();
}

function updateBalance() {
    const percent = (app.balance / app.goal) * 100;
    document.querySelector('.balance-amount').textContent = app.balance.toLocaleString();
    document.getElementById('balanceProgress').style.width = `${percent}%`;
    document.querySelectorAll('.progress-info span').forEach((s, i) => {
        s.textContent = i === 0 ? `${Math.round(percent)}% to'ldirilgan` : `${app.goal.toLocaleString()} so'm`;
    });
}

function updateJourney() {
    const progress = (app.balance / app.goal) * 100;
    const bar = document.getElementById('journeyProgress');
    const icon = document.getElementById('journeyIcon');
    const percentEl = document.querySelector('.journey-percent');

    if (bar) bar.style.width = `${progress}%`;
    if (icon) icon.style.left = `calc(${progress}% - 20px)`;
    if (percentEl) percentEl.textContent = `${Math.round(progress)}% to'ldirilgan`;
}

function renderTransactions() {
    const list = document.getElementById('transactionsList');
    if (!list) return;
    list.innerHTML = app.transactions.map(tx => `
        <div class="transaction-item">
            <div class="transaction-info">
                <h4>${tx.description}</h4>
                <div class="transaction-date">${formatDate(tx.date)}</div>
            </div>
            <div class="transaction-amount">+${tx.amount.toLocaleString()}</div>
        </div>
    `).join('');
}

function formatDate(d) {
    const date = new Date(d);
    const months = ['Yan','Fev','Mar','Apr','May','Iyn','Iyl','Avg','Sen','Okt','Noy','Dek'];
    return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
}

function initAutoSave() {
    const amountEl = document.querySelector('.amount-value');
    if (amountEl) amountEl.textContent = app.autoSave.amount.toLocaleString();
}