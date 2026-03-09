# 📸 Gallery Image Management Guide
## For Non-Technical Users

This guide will help you add or update images in the gallery without needing programming knowledge.

---

## 🎯 Quick Overview

The gallery displays images from the `src/assets` folder. To add new images, you need to:
1. Add image files to the assets folder
2. Update the Gallery.tsx file to reference them

---

## 📋 Step-by-Step Instructions

### **Step 1: Prepare Your Images**

1. **Image Format**: Use `.webp`, `.jpg`, or `.png` format
   - ✅ Recommended: `.webp` (smaller file size, faster loading)
   - ✅ Also works: `.jpg`, `.jpeg`, `.png`

2. **Image Size**: 
   - Recommended width: 1200-2000 pixels
   - Keep file size under 500KB per image (use online compressor if needed)

3. **File Naming**: Use simple names without spaces
   - ✅ Good: `gallery-7.webp`, `event-2024.webp`, `science-fair.webp`
   - ❌ Bad: `My Photo 2024.webp`, `image (1).webp`

---

### **Step 2: Add Images to Project**

#### **Option A: Using File Manager (Easiest)**

1. Navigate to your project folder:
   ```
   /home/user/webapp/src/assets/
   ```

2. Copy your new image files into this folder

3. Note down the exact filenames (e.g., `gallery-7.webp`)

---

### **Step 3: Update Gallery Code**

Open the file: `/home/user/webapp/src/pages/Gallery.tsx`

#### **Part 1: Add Import Statements** (Lines 6-11)

Current imports look like this:
```typescript
import gallery1 from '@/assets/gallery-1.webp';
import gallery2 from '@/assets/gallery-2.webp';
import gallery3 from '@/assets/gallery-3.webp';
import gallery4 from '@/assets/gallery-4.webp';
import gallery5 from '@/assets/gallery-5.webp';
import gallery6 from '@/assets/gallery-6.webp';
```

**To add a new image**, add a new line:
```typescript
import gallery7 from '@/assets/gallery-7.webp';
```

**Pattern to follow:**
```typescript
import [uniqueName] from '@/assets/[your-filename]';
```

---

#### **Part 2: Add to Images Array** (Lines 13-20)

Current array looks like this:
```typescript
const images = [
  { src: gallery1 },
  { src: gallery2 },
  { src: gallery3 },
  { src: gallery4 },
  { src: gallery5 },
  { src: gallery6 },
];
```

**To add your new image**, add a new line before the closing `];`:
```typescript
const images = [
  { src: gallery1 },
  { src: gallery2 },
  { src: gallery3 },
  { src: gallery4 },
  { src: gallery5 },
  { src: gallery6 },
  { src: gallery7 },  // ← Your new image
];
```

---

## ✏️ Complete Example: Adding 2 New Images

### **Before:**
```typescript
import gallery1 from '@/assets/gallery-1.webp';
import gallery2 from '@/assets/gallery-2.webp';
import gallery3 from '@/assets/gallery-3.webp';
import gallery4 from '@/assets/gallery-4.webp';
import gallery5 from '@/assets/gallery-5.webp';
import gallery6 from '@/assets/gallery-6.webp';

const images = [
  { src: gallery1 },
  { src: gallery2 },
  { src: gallery3 },
  { src: gallery4 },
  { src: gallery5 },
  { src: gallery6 },
];
```

### **After (Added 2 images):**
```typescript
import gallery1 from '@/assets/gallery-1.webp';
import gallery2 from '@/assets/gallery-2.webp';
import gallery3 from '@/assets/gallery-3.webp';
import gallery4 from '@/assets/gallery-4.webp';
import gallery5 from '@/assets/gallery-5.webp';
import gallery6 from '@/assets/gallery-6.webp';
import gallery7 from '@/assets/annual-day-2024.webp';    // ← New line
import gallery8 from '@/assets/science-lab-new.webp';   // ← New line

const images = [
  { src: gallery1 },
  { src: gallery2 },
  { src: gallery3 },
  { src: gallery4 },
  { src: gallery5 },
  { src: gallery6 },
  { src: gallery7 },  // ← New line
  { src: gallery8 },  // ← New line
];
```

---

## 🔄 To Replace an Existing Image

**Option 1: Replace the file (Easiest)**
1. Keep the same filename (e.g., `gallery-3.webp`)
2. Delete the old file
3. Copy your new image with the same name
4. No code changes needed!

**Option 2: Change the reference**
1. Add your new image file (e.g., `new-photo.webp`)
2. Update the import:
   ```typescript
   // Before:
   import gallery3 from '@/assets/gallery-3.webp';
   
   // After:
   import gallery3 from '@/assets/new-photo.webp';
   ```
3. The gallery will now show your new image in that position

---

## ❌ To Remove an Image

1. **Delete the import line:**
   ```typescript
   import gallery3 from '@/assets/gallery-3.webp';  // ← Delete this line
   ```

2. **Remove from images array:**
   ```typescript
   const images = [
     { src: gallery1 },
     { src: gallery2 },
     { src: gallery3 },  // ← Delete this line
     { src: gallery4 },
   ];
   ```

3. **(Optional)** Delete the image file from `src/assets/` folder

---

## 🎨 Image Order

The images display in the order they appear in the array:
- First item = First image in gallery
- Second item = Second image in gallery
- And so on...

To change order, simply rearrange the lines in the images array.

---

## ⚠️ Important Tips

1. **Always use forward slashes** (`/`) in file paths, not backslashes (`\`)

2. **Match the filename exactly:**
   - File: `Gallery-1.webp` ❌
   - Import: `gallery-1.webp` ✅
   - (Filenames are case-sensitive!)

3. **Don't forget commas:**
   ```typescript
   { src: gallery6 },  // ← Comma here
   { src: gallery7 },  // ← And here
   ```

4. **Keep backups** of your Gallery.tsx file before making changes

5. **Test after changes:**
   - Save the file
   - Refresh the website
   - Check the Gallery page

---

## 🆘 Troubleshooting

### **Problem: Image doesn't show up**
- ✅ Check: Is the file in `src/assets/` folder?
- ✅ Check: Did you add the import statement?
- ✅ Check: Did you add it to the images array?
- ✅ Check: Is the filename spelled correctly?

### **Problem: Website crashes**
- ✅ Check: Did you add commas after each line?
- ✅ Check: Did you close all brackets `{ }` and `[ ]`?
- ✅ Check: Are there any typos in the code?

### **Problem: Wrong image shows**
- ✅ Check: Does the import filename match your actual file?
- ✅ Check: Did you save the Gallery.tsx file?
- ✅ Try: Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)

---

## 📞 Need Help?

If you get stuck:
1. Take a screenshot of the error
2. Note what you were trying to do
3. Contact your technical support person

---

## 🎓 Summary Checklist

When adding a new image:
- [ ] Image file is in `src/assets/` folder
- [ ] Filename has no spaces
- [ ] Import statement added (line 6-11 area)
- [ ] Image added to array (line 13-20 area)
- [ ] Commas are in place
- [ ] File saved
- [ ] Website refreshed

---

**Last Updated:** March 2026
**Version:** 1.0
