# Academic Excellence Section - Image Replacement Guide

## 📋 Overview
A new "Consistent Academic Excellence" section has been added to the homepage with a tabbed interface displaying three different content views:
- **Our Top Achievers** - Student photos and achievements
- **2025 Results** - Data table with 2025 academic results
- **2024 Results** - Data table with 2024 academic results

## 🖼️ Current Status
The section is currently using **placeholder images** located at:
- `/home/user/webapp/src/assets/top-achievers.webp` (placeholder)
- `/home/user/webapp/src/assets/results-2025.webp` (placeholder)
- `/home/user/webapp/src/assets/results-2024.webp` (placeholder)

## 🔄 How to Replace Images (For Non-Technical Users)

### Method 1: Using File Manager (Easiest)

1. **Locate your actual images** on your computer (the ones you want to use)
2. **Rename them exactly** as follows:
   - Top achievers image → `top-achievers.webp`
   - 2025 results image → `results-2025.webp`
   - 2024 results image → `results-2024.webp`

3. **Navigate to the project folder**:
   - Open your project folder: `/home/user/webapp/`
   - Go to the `src` folder
   - Then go to the `assets` folder

4. **Replace the files**:
   - Delete the existing placeholder files
   - Copy your renamed image files into this folder

5. **Refresh your browser** to see the changes

### Method 2: Using Terminal Commands

If you have terminal access, run these commands:

```bash
# Navigate to assets folder
cd /home/user/webapp/src/assets

# Remove old placeholders
rm top-achievers.webp results-2025.webp results-2024.webp

# Copy your new images (replace /path/to/your/images with actual path)
cp /path/to/your/images/your-top-achievers-image.webp top-achievers.webp
cp /path/to/your/images/your-2025-results-image.webp results-2025.webp
cp /path/to/your/images/your-2024-results-image.webp results-2024.webp
```

## 📝 Image Requirements

### File Format
- **Preferred format**: `.webp` (for best performance)
- **Also supported**: `.jpg`, `.jpeg`, `.png`

If your images are in `.jpg` or `.png` format:
1. You can either:
   - Convert them to `.webp` using an online converter
   - OR keep them as `.jpg`/`.png` and update the import statements

### To use JPG/PNG instead of WebP:
Edit `/home/user/webapp/src/pages/Index.tsx` and change lines 10-12:

**From:**
```typescript
import topAchievers from '@/assets/top-achievers.webp';
import results2025 from '@/assets/results-2025.webp';
import results2024 from '@/assets/results-2024.webp';
```

**To (for JPG):**
```typescript
import topAchievers from '@/assets/top-achievers.jpg';
import results2025 from '@/assets/results-2025.jpg';
import results2024 from '@/assets/results-2024.jpg';
```

### Image Size & Quality
- **Recommended width**: 1200-1600 pixels
- **Aspect ratio**: Any (images will scale to fit)
- **File size**: Keep under 500KB for fast loading
- **Quality**: High quality for readability of text and numbers

### Important for Data Tables
- Ensure **text and numbers are clearly readable**
- Use **high resolution** for table images
- Consider **landscape orientation** for wide tables
- Test on mobile to ensure text remains legible

## 🎨 Design Specifications

### Section Styling
- **Background**: Light soft gray (`bg-gray-50`)
- **Heading**: Navy blue (#1e3a5f)
- **Tab buttons**: 
  - Active: Navy background with white text
  - Inactive: White background with navy text

### Image Display
- **Display mode**: `object-contain` - ensures images are **never cropped**
- **Background**: White container with rounded corners
- **Shadow**: Medium shadow for depth
- **Padding**: Generous padding around images

## 🔍 Testing Your Changes

After replacing images:

1. **Refresh browser** (Ctrl+R or Cmd+R)
2. **Check all three tabs**:
   - Click "Our Top Achievers"
   - Click "2025 Results"
   - Click "2024 Results"
3. **Verify on mobile**:
   - Use browser developer tools (F12)
   - Click mobile device icon
   - Check readability on small screens
4. **Check text readability**:
   - Zoom in to verify numbers and text are clear
   - Ensure nothing is cropped or cut off

## 🚀 Quick Commit & Push (After Replacing Images)

Once you've replaced the images:

```bash
# Navigate to project
cd /home/user/webapp

# Add the new images
git add src/assets/top-achievers.webp src/assets/results-2025.webp src/assets/results-2024.webp

# Commit changes
git commit -m "feat: add actual academic excellence images"

# Push to GitHub
git push origin main
```

## 📱 Responsive Behavior

The section automatically adjusts for different screen sizes:

- **Desktop**: Full-width images with generous padding
- **Tablet**: Slightly reduced padding, maintains readability
- **Mobile**: 
  - Tabs stack or wrap
  - Images scale down but remain clear
  - Container padding reduces to maximize space

## 🎯 Key Features

✅ **Tabbed interface** - Easy navigation between content
✅ **Smooth transitions** - Fade animation when switching tabs
✅ **Uncropped images** - Full content always visible (`object-contain`)
✅ **Responsive design** - Works on all screen sizes
✅ **Accessible** - Semantic HTML with proper alt texts
✅ **Brand consistent** - Uses Pragya Academy colors (navy & orange)

## 🆘 Troubleshooting

### Problem: Images not showing after replacement
**Solution**: 
- Check file names match exactly
- Ensure files are in `/home/user/webapp/src/assets/`
- Hard refresh browser (Ctrl+Shift+R)
- Check browser console for errors (F12)

### Problem: Images are cropped or cut off
**Solution**: This shouldn't happen due to `object-contain`, but if it does:
- Verify image import is correct
- Check if image has transparent padding
- Ensure image is not corrupted

### Problem: Text in images is blurry
**Solution**:
- Use higher resolution source images
- Ensure original image is at least 1200px wide
- Convert to WebP at high quality settings

### Problem: Images are too large/slow to load
**Solution**:
- Compress images before uploading
- Use WebP format (smaller file size)
- Target 200-500KB per image

## 📞 Need Help?

If you encounter issues:
1. Check that file names match exactly (including extensions)
2. Verify files are in the correct folder
3. Try a hard browser refresh
4. Check browser console for error messages (F12 → Console tab)

## 🎓 Summary

The Academic Excellence section is now live on your homepage! It appears right after the 4 feature cards (Qualified Staff, Expert Classes, etc.) and before the About section. Simply replace the three placeholder images with your actual content images, and you're all set!

**Location in the website**: Home Page → After Feature Cards → Before About Section

**Preview URL**: https://8081-ivxe5hk8o607ywrv4g1ne-0e616f0a.sandbox.novita.ai
