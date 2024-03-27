import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import UnoCSS from './config/unocss'

// https://vitejs.dev/config/

const rollupOptions = {
  external: ['vue', 'vue-router'],
  output: {
    globals: {
      vue: 'Vue'
    }
  }
}

export default defineConfig({
  // 插件
  plugins: [
    vue(),
    vueJsx(),
    UnoCSS()
  ],
  // build 配置
  build: {
    rollupOptions,
    minify: false,
    lib: {
      entry: './src/entry.ts',
      name: 'SmartUI',
      fileName: 'smarty-ui',
      // 导出模块格式
      formats: ['es', 'umd', 'iife']
    }
  }
})