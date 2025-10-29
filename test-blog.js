const fs = require('fs');
const path = require('path');

const postsDirectory = path.join(process.cwd(), 'content/blog');

console.log('Blog directory exists:', fs.existsSync(postsDirectory));

if (fs.existsSync(postsDirectory)) {
  const files = fs.readdirSync(postsDirectory);
  console.log('Files in blog directory:', files.length);
  files.forEach(file => {
    if (file.endsWith('.md')) {
      console.log('- ' + file);
    }
  });
} else {
  console.log('Blog directory does not exist');
}

