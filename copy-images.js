const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, 'src/content/images');
const targetDir = path.join(__dirname, 'public/images');

function copyDir(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

if (fs.existsSync(sourceDir)) {
  copyDir(sourceDir, targetDir);
  console.log('已复制图片到 public/images');
} else {
  console.log('src/content/images 不存在，跳过复制');
}
