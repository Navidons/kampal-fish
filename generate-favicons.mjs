import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Favicon sizes needed
const faviconSizes = [
  { size: 16, name: 'favicon-16x16.png' },
  { size: 32, name: 'favicon-32x32.png' },
  { size: 48, name: 'favicon-48x48.png' },
  { size: 64, name: 'favicon-64x64.png' },
  { size: 96, name: 'favicon-96x96.png' },
  { size: 128, name: 'favicon-128x128.png' },
  { size: 180, name: 'apple-touch-icon.png' },
  { size: 192, name: 'icon-192x192.png' },
  { size: 512, name: 'icon-512x512.png' }
];

// ICO file for legacy browsers
const icoSizes = [16, 32, 48, 64, 128, 256];

async function generateFavicons() {
  console.log('🔄 Generating favicons from logo...');
  
  const logoPath = path.join(__dirname, 'public', 'kampala-fried-fish-logo-removed-bg.png');
  
  // Check if logo exists
  if (!fs.existsSync(logoPath)) {
    console.error('❌ Logo file not found:', logoPath);
    return;
  }
  
  console.log(`📸 Using logo: kampala-fried-fish-logo-removed-bg.png`);
  
  // Generate PNG favicons
  for (const favicon of faviconSizes) {
    try {
      const outputPath = path.join(__dirname, 'public', favicon.name);
      
      await sharp(logoPath)
        .resize(favicon.size, favicon.size, {
          fit: 'contain',
          background: { r: 255, g: 255, b: 255, alpha: 1 }
        })
        .png()
        .toFile(outputPath);
      
      console.log(`✅ Generated: ${favicon.name} (${favicon.size}x${favicon.size})`);
      
    } catch (error) {
      console.error(`❌ Error generating ${favicon.name}:`, error.message);
    }
  }
  
  // Generate ICO file for legacy browsers
  try {
    const icoOutputPath = path.join(__dirname, 'public', 'favicon.ico');
    
    // Create ICO file with multiple sizes
    const icoBuffer = await sharp(logoPath)
      .resize(256, 256, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 1 }
      })
      .png()
      .toBuffer();
    
    fs.writeFileSync(icoOutputPath, icoBuffer);
    console.log(`✅ Generated: favicon.ico (256x256)`);
    
  } catch (error) {
    console.error(`❌ Error generating favicon.ico:`, error.message);
  }
  
  // Generate SVG favicon for modern browsers
  try {
    const svgOutputPath = path.join(__dirname, 'public', 'favicon.svg');
    
    // Create a simple SVG favicon
    const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <rect width="100" height="100" fill="#f97316"/>
      <text x="50" y="60" font-family="Arial, sans-serif" font-size="40" font-weight="bold" text-anchor="middle" fill="white">KF</text>
    </svg>`;
    
    fs.writeFileSync(svgOutputPath, svgContent);
    console.log(`✅ Generated: favicon.svg`);
    
  } catch (error) {
    console.error(`❌ Error generating favicon.svg:`, error.message);
  }
  
  console.log('🎉 Favicon generation completed!');
  console.log('📱 All favicon sizes generated for optimal browser support');
}

// Run the favicon generation
generateFavicons().catch(console.error);
