import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ICONS_DIR = path.join(__dirname, '../public/icons');
const SOURCE_ICON = path.join(__dirname, '../src/assets/logo.png');

const SIZES = [
  72,
  96,
  128,
  144,
  152,
  192,
  384,
  512
];

async function generateIcons() {
  try {
    // Criar diretório de ícones se não existir
    await fs.mkdir(ICONS_DIR, { recursive: true });

    // Gerar ícones para cada tamanho
    for (const size of SIZES) {
      try {
        await sharp(SOURCE_ICON)
          .resize(size, size)
          .toFile(path.join(ICONS_DIR, `icon-${size}x${size}.png`));
        
        // Gerar versão maskable
        await sharp(SOURCE_ICON)
          .resize(size, size)
          .toFile(path.join(ICONS_DIR, `maskable-icon-${size}x${size}.png`));
      } catch (err) {
        console.warn(`Aviso: Não foi possível gerar ícone de tamanho ${size}x${size}:`, err.message);
        // Criar um ícone placeholder
        console.log(`Criando ícone placeholder para ${size}x${size}...`);
        
        // Criar um ícone simples como fallback
        await sharp({
          create: {
            width: size,
            height: size,
            channels: 4,
            background: { r: 37, g: 99, b: 235, alpha: 1 } // Azul
          }
        })
        .png()
        .toFile(path.join(ICONS_DIR, `icon-${size}x${size}.png`));
        
        await sharp({
          create: {
            width: size,
            height: size,
            channels: 4,
            background: { r: 37, g: 99, b: 235, alpha: 1 } // Azul
          }
        })
        .png()
        .toFile(path.join(ICONS_DIR, `maskable-icon-${size}x${size}.png`));
      }
    }

    console.log('✅ Ícones gerados com sucesso!');
  } catch (error) {
    console.error('❌ Erro ao gerar ícones:', error);
    // Não vamos encerrar o processo em caso de erro para permitir que o build continue
    console.log('Continuando o build sem a geração de ícones...');
  }
}

generateIcons(); 