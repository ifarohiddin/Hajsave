# 🕌 HajSave - Haj va Umra Jamg'arma Platformasi

Zamonaviy, professional va islomiy qadriyatlarga mos jamg'arma platformasi.

## ✨ Yangi Xususiyatlar (v2.0)

### 🎨 **Professional Dizayn**
- ✅ **Lucide Icons** - Zamonaviy SVG ikon kutubxonasi
- ✅ **Professional Rasmlar** - Yuqori sifatli Kaaba va islomiy rasmlar
- ✅ **Islomiy Naqshlar** - Animatsiyalangan fon naqshlari
- ✅ **Responsive Design** - Barcha qurilmalarda mukammal ko'rinish

### 🖼️ **Qo'shilgan Rasmlar**
- `assets/images/kaaba.jpg` - Professional Kaaba rasmi (hero qismida)
- `assets/images/pattern.jpg` - Islomiy geometrik naqsh (animatsiyalangan fon)
- `assets/images/masjid.jpg` - Masjid an-Nabawi rasmi
- `assets/images/savings.jpg` - Jamg'arma kontseptsiya rasmi
- `assets/images/pilgrim.jpg` - Haj ziyoratchi rasmi

### 🎯 **SVG Ikonlar**
Barcha ikonlar Lucide kutubxonasidan professional SVG formatida:
- ✅ Navigatsiya ikonlari (log-in, menu, etc.)
- 📊 Statistika ikonlari (users, wallet, check-circle, star)
- 💳 To'lov tizimlari ikonlari (credit-card, zap, wallet)
- ✈️ Safar ikonlari (plane, hotel, bus, user-check)
- ⚙️ Sozlamalar ikonlari (shield, bell, target, save)

## 📁 Fayl Strukturasi

```
hajsave/
├── assets/
│   └── images/           # ⭐ YANGI: Professional rasmlar
│       ├── kaaba.jpg     # 563 KB - Kaaba rasmi
│       ├── pattern.jpg   # 355 KB - Islomiy naqsh
│       ├── masjid.jpg    # 46 KB - Masjid rasmi
│       ├── savings.jpg   # 218 KB - Jamg'arma rasmi
│       └── pilgrim.jpg   # 137 KB - Ziyoratchi rasmi
├── css/
│   ├── style.css         # ⭐ YANGILANGAN: Yangi stillar
│   └── responsive.css    # Responsive dizayn
├── js/
│   ├── main.js           # Asosiy JavaScript
│   ├── auth.js           # Autentifikatsiya
│   ├── dashboard.js      # Dashboard funksiyalari
│   └── funds.js          # To'lov funksiyalari
├── api/
│   └── config.js         # API sozlamalari
└── index.html            # ⭐ YANGILANGAN: Lucide Icons + SVG
```

## 🚀 Ishga Tushirish

### 🌐 **Netlify Deploy** (Tavsiya etiladi)

#### 1-usul: Netlify veb-interfeysi orqali

1. **Netlify'ga kirish:**
   - [Netlify.com](https://netlify.com) ga kiring
   - "Sign up" yoki "Log in" tugmasini bosing

2. **Deploy qilish:**
   - "Add new site" > "Deploy manually" ni tanlang
   - `hajsave` papkasini drag & drop qiling
   - Yoki "Browse to upload" orqali papkani tanlang

3. **Tayyor!**
   - 30-60 soniyada sayt tayyor bo'ladi
   - URL: `https://your-site-name.netlify.app`

#### 2-usul: Netlify CLI orqali

```bash
# Netlify CLI o'rnatish
npm install -g netlify-cli

# Netlify'ga login qilish
netlify login

# Saytni deploy qilish
cd hajsave
netlify deploy

# Production deploy
netlify deploy --prod
```

#### 3-usul: Git orqali (Auto Deploy)

1. **GitHub'ga yuklash:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: HajSave v2.0"
   git remote add origin https://github.com/username/hajsave.git
   git push -u origin main
   ```

2. **Netlify'da bog'lash:**
   - Netlify'da "Import from Git" ni tanlang
   - GitHub repository'ni tanlang
   - Build settings:
     - Build command: `echo 'No build required'`
     - Publish directory: `.`
   - "Deploy site" tugmasini bosing

3. **Auto Deploy:**
   - Har safar GitHub'ga push qilganingizda avtomatik deploy bo'ladi

### 💻 **Local Development**

1. **Oddiy yo'l (Brauzerda ochish):**
   ```bash
   # Faylni brauzerda oching
   open index.html  # MacOS
   start index.html # Windows
   ```

2. **Local server orqali (Tavsiya etiladi):**
   ```bash
   # Python server
   cd hajsave
   python -m http.server 8000
   
   # Yoki Node.js server
   npx serve
   
   # Yoki live-server
   live-server .
   ```

3. **Brauzerda ochish:**
   - Google Chrome yoki Firefox da `index.html` ni oching
   - Yoki http://localhost:8000 ga kiring (server ishlatilsa)

## 🎨 Dizayn Elementlari

### Rang Palitras
- **Primary:** `#00d4aa` - Yashil-ko'k (jamg'arma)
- **Secondary:** `#0084ff` - Ko'k (ishonch)
- **Gold:** `#ffd700` - Oltin (islomiy aksentlar)
- **Dark:** `#0a0e27` - To'q qora (fon)
- **Success:** `#10b981` - Yashil
- **Danger:** `#ef4444` - Qizil

### Animatsiyalar
- ✨ Suzuvchi kartalar (Floating cards) - 6s infinite
- 🌀 Aylanuvchi fon gradient - 30s rotation
- 💫 Islomiy naqsh animatsiyasi - 60s movement
- 📈 Progress bar animatsiyalari - shimmer effect
- 🎯 Pulse glow - Kaaba rasmi atrofida

### Responsive Breakpoints
- **Large Desktop:** > 1200px
- **Desktop:** 992px - 1200px
- **Tablet:** 768px - 992px
- **Mobile:** < 768px
- **Small Mobile:** < 576px

## 🌟 Asosiy Sahifalar

1. **🏠 Bosh sahifa** (#home)
   - Hero qismi + Kaaba rasmi
   - Statistika (12,500 foydalanuvchilar, 850M to'plangan)
   - Xususiyatlar (Xavfsizlik, Avto-jamg'arma, Mobil, 24/7)

2. **📊 Dashboard** (#dashboard)
   - Haj yo'li tracker (animatsiyalangan)
   - Jami balans: 12,000,000 UZS
   - Jamg'arma grafigi (6 oylik)
   - Avto-jamg'arma: 3,000,000 so'm/oy
   - So'nggi tranzaksiyalar

3. **💳 To'ldirish** (#funds)
   - To'lov miqdori input
   - To'lov usullari: Payme, Click, Uzum Bank, Karta
   - To'lov summary

4. **✈️ Safar** (#travel)
   - Haj 2026: 70M so'm, 40 kun, 5⭐
   - Umra Ramazon: 25M so'm, 12 kun, 3⭐
   - Bog'lanish: +998 99 123 45 67, @HajSaveSupport
   - Paket tarkibi: Aviachipta, Mehmonxona, Transport, Gid

5. **⚙️ Sozlamalar** (#settings)
   - Profil (Ism, Email)
   - Ikki bosqichli autentifikatsiya
   - Bildirishnomalar sozlamalari

6. **🔐 Login** (#login)
   - Email/telefon kirish
   - Parol
   - "Eslab qolish" checkbox
   - Yangi hisob yaratish

## 🛠️ Texnologiyalar

- **HTML5** - Semantik markup
- **CSS3** - Modern stillar, gradientlar, animatsiyalar
- **JavaScript** - Vanilla JS (dependencies yo'q)
- **[Lucide Icons](https://lucide.dev)** - SVG ikon kutubxonasi (CDN)
- **Google Fonts** - Inter font oilasi

## 📱 Xususiyatlar

### ✅ Yaxshilangan Qismlar
- [x] Professional SVG ikonlar (Lucide)
- [x] Yuqori sifatli rasmlar (Kaaba, Masjid, va boshqalar)
- [x] Islomiy naqshli animatsiyalangan fon
- [x] Hero qismida Kaaba rasmi + overlay
- [x] Barcha ikonlar SVG formatida
- [x] Mobil responsive (100%)
- [x] Dark mode dizayn
- [x] Smooth animatsiyalar

## 🎯 Kelajak Rejalar

- [ ] Backend integratsiyasi (Node.js/Python/FastAPI)
- [ ] Real to'lov API lari (Payme, Click, Uzum)
- [ ] Database (PostgreSQL/MongoDB)
- [ ] User authentication (JWT)
- [ ] Mobile ilova (React Native / Flutter)
- [ ] Admin panel
- [ ] Ko'p tillilik (O'zbek, Rus, Ingliz, Arab)
- [ ] Email/SMS bildirishnomalar
- [ ] Real-time currency conversion
- [ ] PDF chek/hisobot generatsiya

## 📊 Versiya Tarix

### v2.0.0 (2025-11-19) - **Professional Upgrade** 🎉
- ✅ Lucide Icons kutubxonasi qo'shildi
- ✅ 5 ta professional rasm qo'shildi (1.3 MB)
- ✅ Islomiy naqsh animatsiyasi
- ✅ Kaaba rasmi hero qismida
- ✅ Barcha matnli ikonlar SVG ga almashtirildi
- ✅ CSS yaxshilangan (yangi stillar + animatsiyalar)
- ✅ btn-danger tugmasi qo'shildi
- ✅ README to'liq yangilandi

### v1.0.0 (2024-10-31) - Initial Release
- Asosiy dizayn va struktura
- 6 ta sahifa
- Responsive layout
- Mock to'lov tizimlari

## 📄 Litsenziya

© 2025 HajSave. Barcha huquqlar himoyalangan.

---

## 🔧 Netlify Sozlamalari

Loyihada quyidagi Netlify fayllari mavjud:

### 📁 `netlify.toml`
- Build settings (static site)
- Redirect rules (SPA-like navigation)
- Security headers (XSS, CSRF protection)
- Cache-control headers (performance optimization)
- Environment variables

### 📁 `_redirects`
- Client-side routing uchun redirects
- 404 sahifalarni index.html ga yo'naltirish

### 📁 `.gitignore`
- Node modules
- Environment files
- Temporary files
- IDE settings

## 🐛 Troubleshooting

### Ikonlar ko'rinmayapti?
**Sabab:** Lucide CDN bloklangan yoki yuklanmagan.

**Yechim:**
1. Browser console'ni tekshiring (F12)
2. Internet ulanishini tekshiring
3. CDN linkini yangilang:
   ```html
   <script src="https://unpkg.com/lucide@0.263.1/dist/umd/lucide.min.js"></script>
   ```

### Rasmlar yuklanmayapti?
**Sabab:** Fayl yo'li noto'g'ri yoki rasm mavjud emas.

**Yechim:**
1. `assets/images/` papkasini tekshiring
2. Rasm nomlari to'g'ri yozilganligini tekshiring
3. Browser console'da 404 xatolarini qidiring

### Sahifa file:// da ishlamayapti?
**Sabab:** CORS xavfsizlik cheklovi (Lucide CDN uchun).

**Yechim:**
1. Local server ishga tushiring:
   ```bash
   python -m http.server 8000
   ```
2. Yoki Netlify'ga deploy qiling

### Netlify deploy muvaffaqiyatsiz?
**Sabab:** Build command yoki publish directory noto'g'ri.

**Yechim:**
1. Build command: `echo 'No build required'`
2. Publish directory: `.` (root)
3. `netlify.toml` fayli mavjudligini tekshiring

## 🚀 Netlify Deploy Checklist

✅ **Tayyorlik:**
- [x] `netlify.toml` konfiguratsiya fayli
- [x] `_redirects` SPA routing uchun
- [x] `.gitignore` keraksiz fayllar uchun
- [x] `package.json` metadata uchun
- [x] Barcha rasmlar `assets/images/` da
- [x] CSS/JS fayllar to'g'ri linklar bilan

✅ **Deploy qilishdan oldin:**
- [ ] Local serverda test qiling
- [ ] Barcha sahifalarni tekshiring
- [ ] Mobil responsive'ni tekshiring
- [ ] Browser console'da xato yo'qligini tekshiring
- [ ] Rasmlar yuklanishini tekshiring

✅ **Deploy jarayoni:**
- [ ] Netlify'ga login qiling
- [ ] Loyihani upload qiling
- [ ] Build log'larni tekshiring
- [ ] Deploy URL'ni oching
- [ ] Barcha funksiyalarni test qiling

## 📞 Yordam

**Muammo yuzaga kelsa:**
1. `diagnostics.html` faylini oching - muammoni avtomatik aniqlaydi
2. Browser console (F12) da xatolarni tekshiring
3. Network tab'da yuklanmagan fayllarni qidiring

**Savollar uchun:**
- Email: support@hajsave.uz
- Telegram: @HajSaveSupport
- GitHub Issues: [hajsave/issues](https://github.com/yourusername/hajsave/issues)

---

**Ishlab chiqildi:** MiniMax Agent  
**Yangilandi:** 2025-11-19  
**Versiya:** 2.0.0  
**Rasmlar hajmi:** 1.3 MB  
**Icon kutubxonasi:** Lucide Icons (CDN)  
**Deploy platform:** Netlify Ready ✅

🕌 **Muqaddas joylarga ishonchli yo'lingiz!**
