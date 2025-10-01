import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🚀 Starting build setup...');

try {
  // Check if Sharp is installed
  try {
    require.resolve('sharp');
    console.log('✅ Sharp is installed');
  } catch (error) {
    console.log('📦 Installing Sharp...');
    execSync('npm install sharp', { stdio: 'inherit' });
  }

  // Generate PWA icons
  console.log('🎨 Generating PWA icons...');
  execSync('node generate-pwa-icons.mjs', { stdio: 'inherit' });

  // Convert images to WebP
  console.log('🖼️ Converting images to WebP...');
  execSync('node convert-to-webp.mjs', { stdio: 'inherit' });

  // Check if all required files exist
  const requiredFiles = [
    'public/manifest.json',
    'public/sw.js',
    'public/icon-192x192.png',
    'public/icon-512x512.png',
    'public/apple-touch-icon.png'
  ];

  console.log('🔍 Verifying PWA files...');
  for (const file of requiredFiles) {
    const filePath = path.join(__dirname, '..', file);
    if (fs.existsSync(filePath)) {
      console.log(`✅ ${file} exists`);
    } else {
      console.log(`⚠️ ${file} missing`);
    }
  }

  console.log('🎉 Build setup completed successfully!');
  console.log('📱 PWA is ready for installation');
  console.log('🖼️ Images optimized for fast loading');

} catch (error) {
  console.error('❌ Build setup failed:', error.message);
  process.exit(1);
}
