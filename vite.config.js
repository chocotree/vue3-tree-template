import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import WindiCSS from 'vite-plugin-windicss';
import Layouts from 'vite-plugin-vue-layouts';
import Pages from 'vite-plugin-pages';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import eslint from 'vite-plugin-eslint';
import postcssNested from 'postcss-nested';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  css: {
    postcss: {
      plugins: [postcssNested],
    },
  },
  plugins: [
    vue(),
    Pages(),
    Layouts(),
    WindiCSS(),
    AutoImport({
      include: [
        /\.vue$/,
        /\.vue\?vue/, // .vue
      ],
      // global imports to register
      imports: [
        // presets
        'vue',
        'vue-router',
        // custom:
        // https://github.com/antfu/unplugin-auto-import#configuration
      ],
      dts: 'src/auto-imports.js',
    }),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), 'src/assets/svg')],
      symbolId: '[dir]/[name]',
    }),
    Components({
      extensions: ['vue'],
      include: [/\.vue$/],
      dirs: 'src/components/autoImport',
      dts: 'src/auto-components.js',
    }),
    // eslint(),
  ],
});

console.log('import.meta.env:', process.env.ENV);

// const addEslint = () => {
//   if (process.env === 'local')
// }
