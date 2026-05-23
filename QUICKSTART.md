# Cinematic Portfolio - Getting Started

## Quick Setup (5 minutes)

### 1. Prerequisites
```bash
node --version  # Should be v16.x or higher
npm --version   # Should be v8.x or higher
```

### 2. Installation
```bash
# Clone the repo
git clone https://github.com/ku2507u0309-create/cv.git
cd cv

# Checkout cinematic branch
git checkout cinematic-portfolio

# Install dependencies
npm install
```

### 3. Start Development
```bash
npm run dev
```

Browser will open automatically at `http://localhost:3000`

## Directory Structure

```
cv/
├── src/
│   ├── components/         # React UI components
│   ├── scenes/            # Three.js scene setups
│   ├── 3d/               # 3D objects and effects
│   ├── utils/            # Helper utilities
│   ├── store/            # State management
│   ├── styles/           # Global CSS
│   ├── App.jsx           # Main app component
│   └── main.jsx          # Entry point
├── public/               # Static assets
│   └── sounds/          # Audio files
├── index.html           # HTML template
├── vite.config.js       # Vite configuration
├── package.json         # Dependencies
├── tsconfig.json        # TypeScript config
└── README.md            # Full documentation
```

## Common Commands

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## Customization

### Update Profile Information

Edit `src/store/sceneStore.js`:
```javascript
userProfile: {
  name: 'Your Name',
  title: 'Your Title',
  location: 'Your Location',
  bio: 'Your Bio',
  image: '/profile.jpg'
}
```

### Update Content Sections

Edit `src/components/ContentSection.jsx`:
```javascript
const content = {
  about: {
    title: 'ABOUT',
    items: [
      'Your content here',
      'Add your achievements',
      'Describe your experience'
    ]
  },
  // ... other sections
}
```

### Customize Colors

Edit `src/styles/global.css`:
```css
:root {
  --primary-neon: #00ff88;
  --secondary-cyan: #00ffff;
  --tertiary-blue: #0088ff;
  --accent-magenta: #ff00ff;
}
```

## Performance Tips

1. **Optimize Images**
   - Compress profile.jpg to < 100KB
   - Use WebP format when possible

2. **Optimize Audio**
   - Use 128kbps MP3 for sound effects
   - Keep files under 1MB

3. **Quality Settings**
   - Adjust particle count in sceneStore.js
   - Lower shadow quality on slower devices
   - Disable postprocessing for better FPS

## Troubleshooting

### Audio Not Playing
```bash
# Check audio files exist in public/sounds/
ls public/sounds/

# Check browser console for errors
# Audio may be blocked by browser - requires user interaction
```

### Poor Performance
```javascript
// In src/store/sceneStore.js, reduce particle count:
particleCount: 500  // Instead of 1000
```

### WebGL Error
- Ensure browser supports WebGL
- Update GPU drivers
- Try different browser

## Deployment

### Deploy to Vercel
```bash
npm run build
# Then drag 'dist' folder to Vercel
# Or connect GitHub repo to Vercel
```

### Deploy to Netlify
```bash
npm run build
# Deploy 'dist' folder to Netlify
```

## Browser Support

✅ Chrome 90+
✅ Firefox 88+
✅ Safari 14+
✅ Edge 90+

## Next Steps

1. Add your profile image to `public/profile.jpg`
2. Add sound effects to `public/sounds/`
3. Update your information in components
4. Test in different browsers
5. Deploy to Vercel or Netlify

## Resources

- [Three.js Documentation](https://threejs.org/docs)
- [React Three Fiber Docs](https://docs.pmnd.rs/react-three-fiber)
- [GSAP Docs](https://greensock.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion)

## Need Help?

- Check README.md for full documentation
- Open GitHub issues for bugs
- Review code comments for explanations

---

**Ready to deploy?** Your cinematic portfolio is ready to impress! 🚀
