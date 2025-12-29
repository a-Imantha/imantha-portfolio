# Development Workflow Guide

## 🚀 The Correct Way to Run the Portfolio

### For Development (with Auto-Reload) ✅
```bash
npm run dev
```

**What this does:**
- Starts Next.js development server
- **Auto-reloads** when you make changes to files
- Hot Module Replacement (HMR) - changes appear instantly
- Opens on `http://localhost:3000` (or next available port)
- Shows helpful error messages in the browser
- Fast refresh for React components

**When to use:** 
- During development
- When making changes to code
- When creating new content
- For testing changes quickly

---

### For Production Build ❌ (Don't use during development)
```bash
npm run build   # Creates production build
npm start       # Serves production build
```

**What this does:**
- Optimizes all code for production
- Pre-renders all pages
- Minifies JavaScript and CSS
- **NO auto-reload** - it's a static build
- Much slower to rebuild

**When to use:**
- Before deploying to production
- To test production build locally
- To verify everything works when optimized

---

## 🔄 Auto-Reload Explained

When you run `npm run dev`:

1. **Code changes** → Instant reload
   - Components, pages, styles
   - TypeScript files
   - Configuration files

2. **Content changes** → Automatic reload
   - MDX files in `/content`
   - JSON files
   - Public assets

3. **No restart needed** for most changes!

---

## 🛠️ Development Commands Reference

```bash
# Start development server (USE THIS!)
npm run dev

# Clean and restart (if you have issues)
rm -rf .next
npm run dev

# Check for TypeScript errors
npx tsc --noEmit

# Check for linting issues
npm run lint

# Build for production (testing only)
npm run build

# Serve production build (after build)
npm start
```

---

## ⚠️ When Auto-Reload Doesn't Work

If changes aren't appearing:

1. **Hard refresh browser:** `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows)

2. **Restart dev server:**
   ```bash
   # Stop server: Ctrl+C
   # Then restart:
   npm run dev
   ```

3. **Clear Next.js cache:**
   ```bash
   rm -rf .next
   npm run dev
   ```

4. **Nuclear option (if really stuck):**
   ```bash
   rm -rf .next node_modules
   npm install
   npm run dev
   ```

---

## 📝 Common Scenarios

### Adding a New Project
1. Create `/content/projects/my-project.mdx`
2. Save the file
3. **Auto-reload happens** ✅
4. Navigate to `http://localhost:3000/#projects`

### Updating Images
1. Add image to `/public/images/`
2. Update MDX frontmatter
3. Save
4. **Auto-reload happens** ✅

### Changing Styles
1. Edit component or CSS file
2. Save
3. **Instant update** ✅ (usually < 1 second)

### Modifying Components
1. Edit `.tsx` file
2. Save
3. **Fast refresh** ✅ (preserves component state)

---

## 🐛 Error Recovery

### Port Already in Use
```bash
# Find and kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use different port
npm run dev -- -p 3001
```

### Build Cache Corrupted
```bash
rm -rf .next
npm run dev
```

### TypeScript Errors
```bash
# Check what's wrong
npx tsc --noEmit

# Fix the errors, then dev server continues
```

---

## 💡 Pro Tips

1. **Keep `npm run dev` running** in a dedicated terminal
2. **Use another terminal** for commands like `npm install`
3. **Watch the console** for helpful error messages
4. **Check browser console** for runtime errors
5. **Use browser DevTools** for debugging

---

## 🎯 Quick Start Checklist

When you sit down to work:

- [ ] Open terminal in project directory
- [ ] Run `npm run dev`
- [ ] Wait for "Ready" message
- [ ] Open `http://localhost:3000` in browser
- [ ] Start making changes
- [ ] Changes auto-reload ✨

---

## ❓ FAQ

**Q: Do I need to rebuild after every change?**  
A: **NO!** Just run `npm run dev` once and it auto-reloads.

**Q: When should I run `npm run build`?**  
A: Only before deploying to production, or to test the production build.

**Q: Why is my change not showing?**  
A: Try hard refresh (`Cmd+Shift+R`), then restart dev server if needed.

**Q: Can I run dev and build at the same time?**  
A: Not recommended. Stop dev server before building.

**Q: Is it safe to Ctrl+C the dev server?**  
A: Yes! It's just a development server, nothing is saved there.

---

## 🚦 Current Status

**Fixed Issues:**
- ✅ Cleared corrupted `.next` cache
- ✅ Reinstalled dependencies
- ✅ Ready for development

**Next Steps:**
Run this command and keep it running:
```bash
npm run dev
```

Then make changes and watch them appear automatically! 🎉

