import fs from 'fs';
import path from 'path';

const pagesDir = './pages';

// Función recursiva nativa para encontrar todos los archivos .html
function getHtmlFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat && stat.isDirectory()) {
      results = results.concat(getHtmlFiles(filePath));
    } else if (file.endsWith('.html')) {
      results.push(filePath);
    }
  });
  
  return results;
}

if (!fs.existsSync(pagesDir)) {
  console.error(`❌ La carpeta "${pagesDir}" no existe.`);
  process.exit(1);
}

const files = getHtmlFiles(pagesDir);
let modifiedCount = 0;

files.forEach(filePath => {
  let content = fs.readFileSync(filePath, 'utf-8');
  let originalContent = content;

  // Inserción de atributos en etiquetas <img> que apuntan a archivos .webp
  content = content.replace(
    /<img([^>]+src=["'][^"']+\.webp["'])([^>]*)>/gi,
    (match, p1, p2) => {
      let extraAttrs = '';
      if (!match.includes('loading=')) extraAttrs += ' loading="lazy"';
      if (!match.includes('decoding=')) extraAttrs += ' decoding="async"';
      if (!match.includes('width=')) extraAttrs += ' width="300"';
      if (!match.includes('height=')) extraAttrs += ' height="300"';
      return `<img${p1}${p2}${extraAttrs}>`;
    }
  );

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`✔ Actualizado: ${filePath}`);
    modifiedCount++;
  }
});

console.log(`\n🎉 Refactorización completada en ${modifiedCount} archivos.`);