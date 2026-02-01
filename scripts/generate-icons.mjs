import sharp from 'sharp';
import { writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, '..', 'public');

// Create SVG with "S" logo
function createSvg(size) {
  const fontSize = Math.round(size * 0.625);
  const yPos = Math.round(size * 0.75);
  const rx = Math.round(size * 0.1875);

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <defs>
    <linearGradient id="orangeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#F5A623"/>
      <stop offset="100%" style="stop-color:#E09000"/>
    </linearGradient>
  </defs>
  <rect width="${size}" height="${size}" rx="${rx}" fill="url(#orangeGradient)"/>
  <text x="${size/2}" y="${yPos}" font-family="system-ui, -apple-system, BlinkMacSystemFont, sans-serif" font-size="${fontSize}" font-weight="700" fill="#121212" text-anchor="middle">S</text>
</svg>`;
}

const sizes = [
  { name: 'favicon-16x16.png', size: 16 },
  { name: 'favicon-32x32.png', size: 32 },
  { name: 'apple-touch-icon.png', size: 180 },
  { name: 'icon-192x192.png', size: 192 },
  { name: 'icon-512x512.png', size: 512 },
];

async function generateIcons() {
  for (const { name, size } of sizes) {
    const svg = createSvg(size);
    const outputPath = join(publicDir, name);

    await sharp(Buffer.from(svg))
      .png()
      .toFile(outputPath);

    console.log(`Generated: ${name}`);
  }

  // Also create favicon.ico from 32x32
  console.log('All icons generated successfully!');
}

generateIcons().catch(console.error);
