import { defineConfig } from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import UnoCSS from '../config/unocss'

export default defineConfig({
  plugins: [
    // 添加 JSX 插件
    vueJsx(),
    UnoCSS()
  ]
})