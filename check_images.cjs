const fs = require('fs');
const path = require('path');
const srcDir = path.join(__dirname, 'src');

function findImages(dir) {
  let images = new Set();
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      findImages(fullPath).forEach(img => images.add(img));
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      const content = fs.readFileSync(fullPath, 'utf-8');
      const matches = content.match(/(?:src|image):\s*["']([^"']+)["']/g);
      if (matches) {
        for (const match of matches) {
          const srcMatch = match.match(/["'](.*?)["']/);
          if (srcMatch && srcMatch[1]) {
             const src = srcMatch[1];
             if (src.startsWith('/src/assets/images/') || src.startsWith('src/assets/images/')) {
               images.add(src);
             }
          }
        }
      }
      
      const inlineMatches = content.match(/src=["'](.*?)["']/g);
      if (inlineMatches) {
        for (const match of inlineMatches) {
          const srcMatch = match.match(/["'](.*?)["']/);
          if (srcMatch && srcMatch[1]) {
             const src = srcMatch[1];
             if (src.startsWith('/src/assets/images/') || src.startsWith('src/assets/images/')) {
               images.add(src);
             }
          }
        }
      }
    }
  }
  return images;
}

const allImages = findImages(srcDir);
for (const img of allImages) {
  const localPath = path.join(__dirname, img.startsWith('/') ? img.substring(1) : img);
  if (!fs.existsSync(localPath)) {
    console.log(`MISSING: ${img}`);
  }
}
