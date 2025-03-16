const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

const ICONS_DIR = 'public/icons';
const SOURCE_ICON = 'src/assets/logo.png';

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
      await sharp(SOURCE_ICON)
        .resize(size, size)
        .toFile(path.join(ICONS_DIR, `icon-${size}x${size}.png`));
      
      // Gerar versão maskable
      await sharp(SOURCE_ICON)
        .resize(size, size)
        .toFile(path.join(ICONS_DIR, `maskable-icon-${size}x${size}.png`));
    }

    console.log('✅ Ícones gerados com sucesso!');
  } catch (error) {
    console.error('❌ Erro ao gerar ícones:', error);
    process.exit(1);
  }
}

generateIcons(); 