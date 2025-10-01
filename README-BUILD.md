# Build Process Guide

## Automated Build Setup

The build process now automatically runs all optimization scripts before building the Next.js application.

### 🚀 Build Commands

#### Standard Build
```bash
npm run build
```

This command will automatically:
1. Check dependencies (Sharp, required files)
2. Generate PWA icons from your logo
3. Convert images to WebP format
4. Build the Next.js application

#### Development
```bash
npm run dev
```

#### Manual Scripts
```bash
# Generate PWA icons only
npm run generate-pwa-icons

# Convert images to WebP only
npm run convert-webp

# Complete PWA setup
npm run setup-pwa
```

### 📋 Build Process Steps

#### 1. Pre-build Checks (`scripts/check-dependencies.mjs`)
- ✅ Verifies Sharp is installed
- ✅ Checks required files exist
- ✅ Installs missing dependencies

#### 2. Build Setup (`scripts/build-setup.mjs`)
- 🎨 Generates PWA icons (192x192, 512x512, 180x180)
- 🖼️ Converts images to WebP format
- 🔍 Verifies all PWA files exist
- 📱 Ensures PWA is ready for installation

#### 3. Next.js Build
- 🏗️ Builds the optimized Next.js application
- 📦 Creates production-ready files
- 🚀 Ready for deployment

### 🎯 What Gets Optimized

#### Images
- `fish-plate-square.jpg` → `fish-plate-square.webp`
- `hot-fish-rack-landscape.jpg` → `hot-fish-rack-landscape.webp`
- `hot-fish-rack-portrait.jpg` → `hot-fish-rack-portrait.webp`
- `hot-spice-fish-rack-portrait.jpg` → `hot-spice-fish-rack-portrait.webp`
- `spiced-fish-plate-square.jpg` → `spiced-fish-plate-square.webp`

#### PWA Icons
- `icon-192x192.png` - Standard PWA icon
- `icon-512x512.png` - High-resolution PWA icon
- `apple-touch-icon.png` - iOS home screen icon

### 📊 Performance Benefits

- **25-50% smaller image files** (WebP format)
- **Faster page loading** (optimized images)
- **PWA ready** (installable app)
- **Offline support** (service worker)
- **Mobile optimized** (responsive design)

### 🔧 Build Scripts

#### `scripts/check-dependencies.mjs`
- Checks if Sharp is installed
- Verifies required files exist
- Installs missing dependencies

#### `scripts/build-setup.mjs`
- Generates PWA icons
- Converts images to WebP
- Verifies PWA files
- Provides build feedback

### 🚨 Troubleshooting

#### Sharp Installation Issues
```bash
npm install sharp
```

#### Missing Logo File
Ensure `public/kampala-fried-fish-logo-removed-bg.png` exists

#### Build Failures
Check console output for specific error messages

### 📱 PWA Features After Build

- **Installable**: Users can install the app
- **Offline Support**: Works without internet
- **Fast Loading**: Cached resources
- **App-like Experience**: Native app feel
- **Mobile Optimized**: Perfect for mobile devices

### 🎉 Build Success

After a successful build, you'll have:
- ✅ Optimized WebP images
- ✅ PWA icons generated
- ✅ Service worker ready
- ✅ Manifest configured
- ✅ Install prompt ready
- ✅ Production build complete

Your Kampala Fried Fish website is now fully optimized and ready for deployment!
