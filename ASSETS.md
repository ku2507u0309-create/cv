# Ultra-Premium Cinematic 3D Portfolio - Asset Guide

## Required Assets

Place the following files in the appropriate directories:

### Profile Image
- **Location**: `public/profile.jpg`
- **Size**: 300x300px minimum
- **Format**: JPG/PNG
- **Description**: Your profile photo (will be circular hologram)

### Sound Effects

Place in `public/sounds/`:

1. **system-boot.mp3** (2 seconds)
   - Futuristic system startup sound
   - Used during initial boot sequence

2. **hologram-activate.mp3** (1.5 seconds)
   - Sci-fi hologram activation sound
   - Used when holographic elements appear

3. **radar-pulse.mp3** (0.8 seconds)
   - Radar scanning pulse sound
   - Used during world map scanning

4. **target-locked.mp3** (1 second)
   - Target lock notification sound
   - Used when target is locked on Gujarat

5. **ui-click.mp3** (0.3 seconds)
   - UI button click sound
   - Used for button interactions

6. **transition.mp3** (1.2 seconds)
   - Scene transition sound
   - Used when moving between sections

### Optional Background Music
- **Location**: `public/audio/ambient.mp3`
- **Format**: MP3/WAV
- **Description**: Ambient sci-fi background music (looping)

## Asset Directory Structure

```
public/
├── profile.jpg
├── favicon.ico
└── sounds/
    ├── system-boot.mp3
    ├── hologram-activate.mp3
    ├── radar-pulse.mp3
    ├── target-locked.mp3
    ├── ui-click.mp3
    └── transition.mp3
```

## Audio Recommendations

- All sounds should be in MP3 format for best compatibility
- Keep file sizes small (< 1MB each) for fast loading
- Use royalty-free sources like:
  - Freesound.org
  - Pixabay Sound Effects
  - Zapsplat
  - YouTube Audio Library

## Image Guidelines

- Profile image should be well-lit and professional
- Transparent PNG recommended for better hologram effect
- Recommended resolution: 400x400px (will be scaled to 300x300px)

## Background Image (Optional)

The command center environment uses procedural generation, but you can add:
- **Location**: `public/textures/environment.hdr`
- Adds realistic environment reflections

## Customization

To use your own assets:

1. Place files in `public/` folder
2. Update paths in components:
   - AudioManager.js - sound file paths
   - ProfileHologram.jsx - image src

## File Size Optimization

```bash
# Compress audio
ffmpeg -i input.mp3 -b:a 128k output.mp3

# Compress images
convert profile.jpg -quality 85 profile-optimized.jpg
```

## No Assets Setup

If you don't have assets yet:

1. Audio will gracefully degrade (no sound)
2. Use placeholder image from URL:
   ```javascript
   img src="https://via.placeholder.com/300x300"
   ```
3. System will still work perfectly

---

For free assets, check:
- Unsplash (images)
- Pixabay (images & sounds)
- Freesound.org (sounds)
- Zapsplat (sound effects)
