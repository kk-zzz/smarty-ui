import { createApp } from 'vue/dist/vue.esm-bundler.js'
import SmartyUI from './entry'

/**
 *  UnoCSS默认是按需生成，只有生成代码中使用过的样式，
 * 如果在 class 属性中使用变量，是无法分析变量的取值的，也就无法动态生成样式了。
 * 
 * Method：
 * 将样式定义中的变量的取值添加到 Safelist 中去，UnoCSS会根据 Safelist 生成样式
 * 
 * 考虑到后续会在 Safelist 中添加大量配置，所以将 UnoCSS 配置拆成一个新的 ts 模块，并在 `vite.config.ts` 中引入
 * */

createApp({
  template:`
    <div>
      <SButton>普通按钮</SButton>
      <SButton color="blue">蓝色按钮</SButton>
      <SButton color="green">绿色按钮</SButton>
      <SButton color="gray">灰色按钮</SButton>
      <SButton color="yellow">黄色按钮</SButton>
      <SButton color="red">红色按钮</SButton>
    </div>
  `
}).use(SmartyUI).mount('#app')
