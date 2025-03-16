import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
    // Não vamos encerrar o processo em caso de erro para permitir que o build continue
    console.log('Continuando o build sem a conversão de SVG para PNG...');
  }
}

convertSvgToPng(); 