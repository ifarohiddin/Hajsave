// api/config.js
const API = {
    baseURL: 'https://api.hajsave.uz/v1',

    async request(endpoint, options = {}) {
        // Mock response
        await new Promise(r => setTimeout(r, 800));
        if (endpoint.includes('payment')) {
            return { success: true, transactionId: Date.now() };
        }
        if (endpoint.includes('user')) {
            return { user: app.user, balance: app.balance };
        }
        return { data: [] };
    },

    async pay(amount, method) {
        const res = await this.request('/payment', { method: 'POST', body: { amount, method } });
        if (res.success) {
            app.balance += amount;
            app.transactions.unshift({
                id: Date.now(),
                amount,
                date: new Date().toISOString().split('T')[0],
                description: 'To‘lov qo‘shildi'
            });
            updateDashboard();
        }
        return res;
    }
};