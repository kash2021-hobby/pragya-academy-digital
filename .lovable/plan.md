

## Plan: Revamp Courses Page Cards

### 1. Colorful education-themed cards (`src/pages/Courses.tsx`)

Replace the plain white cards with vibrant, color-coded cards for each stream:
- **Science**: Blue gradient top border + blue-tinted background (`bg-blue-50 border-t-4 border-t-blue-500`)
- **Arts**: Purple gradient (`bg-purple-50 border-t-4 border-t-purple-500`)
- **Commerce**: Green (`bg-green-50 border-t-4 border-t-green-500`)
- **Integrated Programme**: Orange (`bg-orange-50 border-t-4 border-t-orange-500`)

Each card gets a larger, more vibrant icon area with the stream's accent color.

### 2. Click-to-reveal subjects

- Hide subjects by default — only show the card title, icon, and a short description
- On click, expand the card to reveal subjects with a smooth transition (max-height animation or conditional render with `overflow-hidden` + `max-h` transition)
- Toggle behavior: clicking the same card collapses it, clicking another opens the new one and closes the previous

### 3. Fix auto-vanish bug

The `scroll-reveal` class on each card causes the IntersectionObserver to re-trigger opacity changes. When clicking a card causes a layout shift, the observer may remove the `revealed` class. Fix: remove `scroll-reveal` from the individual stream cards (or add it only to the grid container).

### 4. Navbar logo → home (already working)

The logo and "Pragya Academy" text are already wrapped in `<Link to="/">`. No changes needed — this already navigates to the home page.

