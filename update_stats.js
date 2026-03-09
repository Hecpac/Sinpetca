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

  content = content.replace(/35\+/g, '12+');
  content = content.replace(/\+35 Años/g, '+12 Años');
  content = content.replace(/Más de 35 años/gi, 'Más de 12 años');
  content = content.replace(/1988/g, '2012');
  content = content.replace(/5,000\+/g, '127');
  content = content.replace(/Más de 5,000/gi, '127');
  content = content.replace(/\+500/g, '127');
  content = content.replace(/value: 35/g, 'value: 12');
  content = content.replace(/value: 5000/g, 'value: 127');

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log('Updated stats in: ' + file);
  }
});
