const fs = require('fs');
const path = 'C:/Users/Samarth Mahajan/Desktop/internship/messenger-app-frontend-setup (1)/bstc-messenger-app-bstc-messenger-app-frontend-setup/package.json';
const p = JSON.parse(fs.readFileSync(path, 'utf8'));
if (!p.scripts) p.scripts = {};
p.scripts.storybook = 'storybook dev -p 6006';
fs.writeFileSync(path, JSON.stringify(p, null, 2), 'utf8');
console.log('updated package.json at', path);
