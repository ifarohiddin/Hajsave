import shutil
import os

# Rasmlarni ko'chirish
images = {
    '/workspace/imgs/kaaba_main_7.jpg': '/workspace/hajsave/assets/images/kaaba.jpg',
    '/workspace/imgs/islamic_pattern_2.jpg': '/workspace/hajsave/assets/images/pattern.jpg',
    '/workspace/imgs/masjid_nabawi_9.jpg': '/workspace/hajsave/assets/images/masjid.jpg',
    '/workspace/imgs/savings_icon_0.jpg': '/workspace/hajsave/assets/images/savings.jpg',
    '/workspace/imgs/pilgrim_6.jpg': '/workspace/hajsave/assets/images/pilgrim.jpg'
}

for src, dst in images.items():
    if os.path.exists(src):
        shutil.copy2(src, dst)
        print(f"✓ {os.path.basename(dst)}")
    else:
        print(f"✗ {src} topilmadi")

# Natijani tekshirish
print("\nKo'chirilgan rasmlar:")
for f in os.listdir('/workspace/hajsave/assets/images'):
    size = os.path.getsize(f'/workspace/hajsave/assets/images/{f}')
    print(f"  {f}: {size/1024:.1f} KB")
