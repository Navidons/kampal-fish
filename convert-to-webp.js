const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Images to convert
const images = [
  'fish-plate-square.jpg',
  'hot-fish-rack-landscape.jpg',
  'hot-fish-rack-portrait.jpg',
  'hot-spice-fish-rack-portrait.jpg',
  'spiced-fish-plate-square.jpg'
];

async function convertToWebP() {
  console.log('🔄 Starting image conversion to WebP...');
  
  for (const image of images) {
    try {
      const inputPath = path.join('public', image);
      const outputPath = path.join('public', image.replace(/\.(jpg|jpeg|png)$/i, '.webp'));
      
      // Check if input file exists
      if (!fs.existsSync(inputPath)) {
        console.log(`⚠️  File not found: ${inputPath}`);
        continue;
      }
      
      // Convert to WebP with optimization
      await sharp(inputPath)
        .webp({ 
          quality: 85,
          effort: 6,
          smartSubsample: true
        })
        .toFile(outputPath);
      
      // Get file sizes for comparison
      const originalSize = fs.statSync(inputPath).size;
      const webpSize = fs.statSync(outputPath).size;
      const savings = ((originalSize - webpSize) / originalSize * 100).toFixed(1);
      
      console.log(`✅ Converted: ${image} → ${path.basename(outputPath)}`);
      console.log(`   Size: ${(originalSize / 1024).toFixed(1)}KB → ${(webpSize / 1024).toFixed(1)}KB (${savings}% smaller)`);
      
    } catch (error) {
      console.error(`❌ Error converting ${image}:`, error.message);
    }
  }
  
  console.log('🎉 Image conversion completed!');
}

// Run the conversion
convertToWebP().catch(console.error);
