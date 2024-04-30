/// <reference types="vitest" />
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { defineConfig } from 'vite'
import UnoCSS from './config/unocss'

// https://vitejs.dev/config/

const rollupOptions = {
  // external 作用：将模块保留在 bundle 之外，比如 vue，是为了不让vue打包到组件库中
  external: ['vue', 'vue-router'],
  // output 作用于 umd/iife 包中，即global中某个组件库叫什么名字
  output: {
    globals: {
      vue: 'Vue',
      SmartyUI: 'SmartyUI'
    }
  }
}

export default defineConfig({
  // 插件
  plugins: [vue(), vueJsx(), UnoCSS()],
  // build 配置
  build: {
    rollupOptions,
    minify: 'terser', // boolean | 'terser' | 'esbuild'
    sourcemap: true, // 输出单独 source文件
    reportCompressedSize: true, // default: true，启用gzip压缩大小报告。
    cssCodeSplit: true, // default: true, 启用 css 代码拆分，若为 false，则整个项目中所有css将被提取到一个css文件中
    lib: {
      entry: './src/entry.ts',
      name: 'SmartyUI',
      fileName: 'smarty-ui',
      formats: ['es', 'umd', 'iife'] // 导出模块类型
    }
  },
  // vitest config
  test: {
    // enable jest-like global test APIs
    globals: true,
    // simulate DOM with happy-dom
    // (requires installing happy-dom as a peer dependency)
    environment: 'happy-dom'
  }
})
