const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = dir + '/' + file;
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      if (!file.includes('node_modules') && !file.includes('.next')) {
        results = results.concat(walk(file));
      }
    } else { 
      if (file.endsWith('.ts') || file.endsWith('.tsx')) results.push(file);
    }
  });
  return results;
}

const files = walk('./sinpetca-website/src');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // 1. Remove OMAC-related terms
  content = content.replace(/, OMAC-N 667/g, '');
  content = content.replace(/ y OMAC-N 667/g, '');
  content = content.replace(/OMAC-N 667/g, '');
  content = content.replace(/ y OMAC/g, '');
  content = content.replace(/, OMAC/g, '');
  content = content.replace(/OMAC/g, '');
  
  // 2. Fix Acreditada / Acreditación
  content = content.replace(/Acreditados bajo ISO 17020/g, 'Trabajamos bajo un sistema de gestión de calidad bajo la norma ISO 17020');
  content = content.replace(/Acreditación ISO 17020/g, 'Sistema de Gestión de Calidad ISO 17020');
  content = content.replace(/Acreditación/g, 'Certificación');
  content = content.replace(/acreditaciones/g, 'certificaciones');
  content = content.replace(/acreditados/g, 'certificados');
  content = content.replace(/Acreditados/g, 'Certificados');
  content = content.replace(/acreditación/g, 'certificación');
  
  // 3. Cleanup spacing and punctuation after replacements
  content = content.replace(/ y \./g, '.');
  content = content.replace(/ ,/g, ',');
  content = content.replace(/ \./g, '.');

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log('Updated: ' + file);
  }
});
