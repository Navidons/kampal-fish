import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🔍 Checking build dependencies...');

// Check if Sharp is installed
try {
  require.resolve('sharp');
  console.log('✅ Sharp is installed');
} catch (error) {
  console.log('📦 Sharp not found, but continuing build...');
  console.log('⚠️  Note: Image optimization will be handled by Next.js');
}

// Check if required files exist
const requiredFiles = [
  'convert-to-webp.mjs',
  'generate-pwa-icons.mjs'
];

// Check if any logo file exists
const logoFiles = [
  'public/kampala-fried-fish-logo-removed-bg.png',
  'public/kampala-fried-fish-logo.png',
  'public/kampala-fried-fish-logo-bacground-for-yt.png'
];

console.log('🔍 Checking required files...');
for (const file of requiredFiles) {
  const filePath = path.join(__dirname, '..', file);
  if (fs.existsSync(filePath)) {
    console.log(`✅ ${file} exists`);
  } else {
    console.log(`⚠️ ${file} missing`);
  }
}

console.log('🔍 Checking logo files...');
let logoFound = false;
for (const logoFile of logoFiles) {
  const filePath = path.join(__dirname, '..', logoFile);
  if (fs.existsSync(filePath)) {
    console.log(`✅ ${logoFile} exists`);
    logoFound = true;
  } else {
    console.log(`⚠️ ${logoFile} missing`);
  }
}

if (!logoFound) {
  console.error('❌ No logo files found! Please ensure at least one logo file exists in the public folder.');
  process.exit(1);
}

console.log('✅ Dependency check completed');
