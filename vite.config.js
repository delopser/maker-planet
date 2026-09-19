import { defineConfig } from 'vite';
import { resolve } from 'path';
import { readdirSync } from 'fs';

const getHtmlInputs = () => {
  try {
    const files = readdirSync('./_site');
    const inputs = {};
    files.forEach(file => {
      if (file.endsWith('.html')) {
        const name = file.replace('.html', '');
        inputs[name] = resolve(__dirname, `_site/${file}`);
      }
    });
    return inputs;
  } catch (e) {
    return { main: resolve(__dirname, '_site/index.html') };
  }
};

export default defineConfig({
  root: '_site',
  appType: 'mpa',

  server: {
    strictPort: true,
    fs: {
      allow: ['..'] 
    },
    watch: {
      ignored: ['!**/sass/**']
    }
  },

  build: {
    rollupOptions: {
      input: getHtmlInputs()
    }
  }
});
