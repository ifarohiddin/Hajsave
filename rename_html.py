import os
import shutil

# Eski faylni backup qilish va yangisini almashtirish
old_html = '/workspace/hajsave/index.html'
new_html = '/workspace/hajsave/index_new.html'
backup_html = '/workspace/hajsave/index_old_backup.html'

if os.path.exists(old_html):
    shutil.move(old_html, backup_html)
    print(f"✓ Eski fayl backup qilindi: {backup_html}")

if os.path.exists(new_html):
    shutil.move(new_html, old_html)
    print(f"✓ Yangi fayl faollashtirildi: {old_html}")

# Natijani ko'rsatish
for f in os.listdir('/workspace/hajsave'):
    if f.endswith('.html'):
        size = os.path.getsize(f'/workspace/hajsave/{f}')
        print(f"  {f}: {size/1024:.1f} KB")
