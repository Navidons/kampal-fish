# Image Optimization Guide

## Converting Images to WebP

### Prerequisites
Install Sharp for image processing:
```bash
npm install sharp
```

### Run the Conversion Script
```bash
node convert-to-webp.js
```

### What the Script Does
- Converts all images in the `public` folder to WebP format
- Optimizes images with 85% quality and smart subsampling
- Shows file size comparison and savings
- Creates `.webp` versions of all images

### Images Converted
- `fish-plate-square.jpg` → `fish-plate-square.webp`
- `hot-fish-rack-landscape.jpg` → `hot-fish-rack-landscape.webp`
- `hot-fish-rack-portrait.jpg` → `hot-fish-rack-portrait.webp`
- `hot-spice-fish-rack-portrait.jpg` → `hot-spice-fish-rack-portrait.webp`
- `spiced-fish-plate-square.jpg` → `spiced-fish-plate-square.webp`

### Benefits
- **Smaller file sizes**: 25-50% reduction in file size
- **Faster loading**: WebP format loads faster than JPEG/PNG
- **Better performance**: Improved Core Web Vitals scores
- **Modern format**: Supported by all modern browsers

### Next.js Image Optimization
The `next.config.mjs` has been updated to:
- Support WebP and AVIF formats
- Optimize images for different device sizes
- Cache images for better performance
- Provide responsive image sizes

### Usage
After running the conversion script, all image references in the code have been updated to use `.webp` extensions for optimal performance.
