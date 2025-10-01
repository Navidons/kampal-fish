import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Icon sizes needed for PWA
const iconSizes = [
  { size: 192, name: 'icon-192x192.png' },
  { size: 512, name: 'icon-512x512.png' },
  { size: 180, name: 'apple-touch-icon.png' }
];

// Logo files in public folder
const logoFiles = [
  'kampala-fried-fish-logo-removed-bg.png',
  'kampala-fried-fish-logo.png',
  'kampala-fried-fish-logo-bacground-for-yt.png'
];

async function generatePWAIcons() {
  console.log('🔄 Generating PWA icons from all logos...');
  
  // Find the first available logo
  let logoPath = null;
  let selectedLogo = null;
  
  for (const logoFile of logoFiles) {
    const fullPath = path.join(__dirname, 'public', logoFile);
    if (fs.existsSync(fullPath)) {
      logoPath = fullPath;
      selectedLogo = logoFile;
      break;
    }
  }
  
  if (!logoPath) {
    console.error('❌ No logo files found in public folder');
    console.log('Available logo files:', logoFiles);
    return;
  }
  
  console.log(`📸 Using logo: ${selectedLogo}`);
  
  for (const icon of iconSizes) {
    try {
      const outputPath = path.join(__dirname, 'public', icon.name);
      
      await sharp(logoPath)
        .resize(icon.size, icon.size, {
          fit: 'contain',
          background: { r: 255, g: 255, b: 255, alpha: 1 }
        })
        .png()
        .toFile(outputPath);
      
      console.log(`✅ Generated: ${icon.name} (${icon.size}x${icon.size}) from ${selectedLogo}`);
      
    } catch (error) {
      console.error(`❌ Error generating ${icon.name}:`, error.message);
    }
  }
  
  console.log('🎉 PWA icons generated successfully!');
}

// Run the icon generation
generatePWAIcons().catch(console.error);
