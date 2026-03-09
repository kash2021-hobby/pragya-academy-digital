## Plan: Improve Hero Section Text Visibility

The reference image shows the hero text is crisp and clearly readable against the background. The current overlay at `bg-navy/80` isn't enough — the background image still bleeds through and reduces contrast.

### Changes to `src/pages/Index.tsx`

1. **Add a gradient overlay** instead of a single flat overlay — use a darker gradient from left-to-right (where the text sits) fading to slightly lighter on the right. This matches the reference where the left side (text area) is noticeably darker.
2. **Replace** `bg-navy/80` (line 53) with a **two-layer overlay**:
  - Base dark overlay: `bg-navy/70` covering the full image
  - Gradient overlay: `bg-gradient-to-r from-navy/90 via-navy/70 to-navy/40` to darken the left text area more heavily
  &nbsp;
3. **Add a subtle text shadow** to the heading for extra pop: use an inline style `textShadow: '0 2px 20px rgba(0,0,0,0.3)'` on the h1.

This approach creates the same clean, high-contrast look from the reference where the building is still visible but the text pops clearly.