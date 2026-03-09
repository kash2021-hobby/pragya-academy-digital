# 🎓 How to Add Your Academic Excellence Images

## Quick 3-Step Guide for Non-Technical Users

### Step 1: Prepare Your Images

You have three images to add:
1. **Top Achievers** - The photo with student pictures
2. **2025 Results** - The data table for 2025
3. **2024 Results** - The data table for 2024

Rename your images to:
- `top-achievers.webp` (or `.jpg` if not webp)
- `results-2025.webp` (or `.jpg` if not webp)
- `results-2024.webp` (or `.jpg` if not webp)

---

### Step 2: Upload Images to the Project

**Option A: Direct File Upload**

If you're working on a local machine:
1. Open the project folder: `pragya-academy-digital`
2. Navigate to: `src` → `assets`
3. Delete these placeholder files:
   - `top-achievers.webp`
   - `results-2025.webp`
   - `results-2024.webp`
4. Copy your renamed images into this folder

**Option B: Using Terminal**

```bash
cd /home/user/webapp/src/assets

# Remove placeholders
rm top-achievers.webp results-2025.webp results-2024.webp

# Copy your images (replace with your actual image paths)
# For example, if your images are on Desktop:
cp ~/Desktop/top-achievers.jpg top-achievers.jpg
cp ~/Desktop/results-2025.jpg results-2025.jpg
cp ~/Desktop/results-2024.jpg results-2024.jpg
```

---

### Step 3: Update Code (Only if using .jpg instead of .webp)

If your images are `.jpg` instead of `.webp`, you need to update one file:

**File to edit:** `src/pages/Index.tsx`

**Find these lines (around line 10-12):**
```typescript
import topAchievers from '@/assets/top-achievers.webp';
import results2025 from '@/assets/results-2025.webp';
import results2024 from '@/assets/results-2024.webp';
```

**Change to:**
```typescript
import topAchievers from '@/assets/top-achievers.jpg';
import results2025 from '@/assets/results-2025.jpg';
import results2024 from '@/assets/results-2024.jpg';
```

---

## ✅ Testing Your Changes

1. **Save all files**
2. **Refresh your browser** (press F5 or Ctrl+R)
3. **Scroll down** to the "Consistent Academic Excellence" section
4. **Click each tab** to verify all images appear correctly:
   - Our Top Achievers
   - 2025 Results
   - 2024 Results

---

## 📱 Where to Find the Section

The new section appears on the **Home Page**:

```
🏠 Hero Slider (campus images)
    ↓
📦 4 Feature Cards (overlapping hero)
    ↓
🎓 CONSISTENT ACADEMIC EXCELLENCE ← NEW SECTION HERE
    ↓
📖 About Section (campus description)
    ↓
📊 Stats Section (numbers)
    ↓
⭐ Why Choose Us (scrolling cards)
    ↓
✉️ Newsletter/Contact Form
```

---

## 🎨 What It Looks Like

- **Background**: Light gray (to separate from white sections)
- **Heading**: "Consistent Academic Excellence" in navy blue
- **3 Tabs**: 
  - "Our Top Achievers" (default/first tab)
  - "2025 Results"
  - "2024 Results"
- **Active tab**: Navy background, white text
- **Inactive tabs**: White background, navy text
- **Image container**: White box with rounded corners and shadow

---

## 💾 Commit & Push to GitHub

After you've added the real images:

```bash
cd /home/user/webapp

# Stage the changes
git add src/assets/top-achievers.* src/assets/results-2025.* src/assets/results-2024.*
git add src/pages/Index.tsx  # only if you changed .webp to .jpg

# Commit
git commit -m "feat: add actual academic excellence images"

# Push to GitHub
git push origin main
```

---

## ❓ Common Questions

**Q: What format should my images be?**
A: `.webp` is preferred (smallest file size), but `.jpg` and `.png` work too.

**Q: What size should the images be?**
A: Recommended width: 1200-1600 pixels. The height can vary based on your content.

**Q: Will the text in my tables be readable?**
A: Yes! We use `object-contain` which means images are never cropped or stretched. Make sure your source images are high quality.

**Q: Can I change the tab names?**
A: Yes! Edit `src/pages/Index.tsx` and search for "Our Top Achievers", "2025 Results", etc. and change the text.

**Q: How do I test on mobile?**
A: Open browser dev tools (F12), click the mobile device icon (top left), and select a device to simulate.

---

## 🚨 Troubleshooting

**Images not showing?**
- Check file names match exactly
- Verify files are in `/home/user/webapp/src/assets/`
- Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)

**Wrong file extension error?**
- Make sure the import statement matches your actual file type (.jpg vs .webp)

**Images are blurry?**
- Use higher resolution source images (at least 1200px wide)

---

## 📞 Need More Help?

Full detailed guide available in: `ACADEMIC_EXCELLENCE_GUIDE.md`

Preview your changes at: **https://8081-ivxe5hk8o607ywrv4g1ne-0e616f0a.sandbox.novita.ai**

---

**That's it! Three simple steps to add your academic excellence images. 🎉**
