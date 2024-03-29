import { defineConfig } from 'vitepress'
import vueJsx from '@vitejs/plugin-vue-jsx'
// https://www.npmjs.com/package/vitepress-theme-demoblock
import { demoblockPlugin, demoblockVitePlugin } from 'vitepress-theme-demoblock'

const sidebar = {
  '/': [
    { text: '快速开始', link: '/' },
    {
      text: '通用',
      items: [
        { text: 'Button 按钮', link: '/components/button/' },
        { text: 'Button 按钮222' },
      ]
    },
    { text: '导航' },
    { text: '反馈' },
    { text: '数据录入' },
    { text: '数据展示' },
    { text: '布局' }
  ]
}

export default defineConfig({
  themeConfig: {
    sidebar
  },
  markdown: {
    config: md => {
      md.use(demoblockPlugin)
    }
  },
  vite: {
    plugins: [demoblockVitePlugin(), vueJsx()]
  }
})