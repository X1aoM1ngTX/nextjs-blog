import https from 'https';
import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 确保目录存在
const iconsDir = path.join(__dirname, '../public/skills-icons');
if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir, { recursive: true });
}

// 技能图标URL映射
const skillIcons = {
  'java.svg': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
  'spring.svg': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg',
  'mybatis-plus.svg': 'https://baomidou.com/assets/asset.cIbiVTt_.svg',
  'mysql.svg': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
  'redis.svg': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg',
  'vue.png': 'https://vuejs.org/images/logo.png',
  'typescript.svg': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
  'html5.svg': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
  'css3.svg': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
  'antdesign.svg': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/antdesign/antdesign-original.svg',
  'git.svg': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
  'maven.svg': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/maven/maven-original.svg',
  'nginx.svg': 'https://www.svgrepo.com/show/373924/nginx.svg',
  'linux.svg': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg',
  'intellij.svg': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/intellij/intellij-original.svg',
  'cursor.png': 'https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/cursor.png'
};

// 下载文件函数
function downloadFile(url, filepath) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    const file = fs.createWriteStream(filepath);

    protocol.get(url, (response) => {
      if (response.statusCode === 302 || response.statusCode === 301) {
        // 处理重定向
        downloadFile(response.headers.location, filepath).then(resolve).catch(reject);
        return;
      }

      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
        return;
      }

      response.pipe(file);

      file.on('finish', () => {
        file.close();
        console.log(`✅ Downloaded: ${path.basename(filepath)}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filepath, () => {}); // 删除部分下载的文件
      console.error(`❌ Error downloading ${url}:`, err.message);
      reject(err);
    });
  });
}

// 下载所有图标
async function downloadAllIcons() {
  console.log('🚀 Starting to download skill icons...\n');

  for (const [filename, url] of Object.entries(skillIcons)) {
    const filepath = path.join(iconsDir, filename);
    try {
      await downloadFile(url, filepath);
    } catch (error) {
      console.error(`Failed to download ${filename}:`, error.message);
    }
  }

  console.log('\n✨ Download complete!');
}

downloadAllIcons().catch(console.error);
