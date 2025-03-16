const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

async function convertSvgToPng() {
  try {
    const svgPath = path.join(__dirname, '../src/assets/logo.svg');
    const pngPath = path.join(__dirname, '../src/assets/logo.png');

    const svgBuffer = await fs.readFile(svgPath);
    
    await sharp(svgBuffer)
      .resize(512, 512)
      .png()
      .toFile(pngPath);

    console.log('✅ SVG convertido para PNG com sucesso!');
  } catch (error) {
    console.error('❌ Erro ao converter SVG para PNG:', error);
    process.exit(1);
  }
}

convertSvgToPng(); 