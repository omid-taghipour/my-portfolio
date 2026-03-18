const fs = require('fs');
const path = require('path');
const yaml = require('yaml');

const CONTENT_DIR = path.join(__dirname, '../src/content');
const LOCALES_DIR = path.join(__dirname, '../public/locales');

function compileYaml() {
  console.log('Compiling YAML content...');
  
  if (!fs.existsSync(CONTENT_DIR)) {
    console.log('No src/content directory found. Skipping.');
    return;
  }

  const languages = fs.readdirSync(CONTENT_DIR).filter(file => {
    return fs.statSync(path.join(CONTENT_DIR, file)).isDirectory();
  });

  languages.forEach(lng => {
    const lngDir = path.join(CONTENT_DIR, lng);
    const files = fs.readdirSync(lngDir).filter(f => f.endsWith('.yml') || f.endsWith('.yaml'));
    
    let combinedContent = {};

    files.forEach(file => {
      const filePath = path.join(lngDir, file);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const namespace = path.basename(file, path.extname(file));
      
      try {
        const parsed = yaml.parse(fileContent);
        combinedContent[namespace] = parsed;
      } catch (e) {
        console.error(`Error parsing ${filePath}:`, e.message);
      }
    });

    const outDir = path.join(LOCALES_DIR, lng);
    if (!fs.existsSync(outDir)) {
      fs.mkdirSync(outDir, { recursive: true });
    }

    const outFile = path.join(outDir, 'translation.json');
    fs.writeFileSync(outFile, JSON.stringify(combinedContent, null, 2));
    console.log(`Successfully compiled content for language: ${lng}`);
  });
}

compileYaml();
