import { createApp } from 'vue/dist/vue.esm-bundler.js'
import SmartyUI from './entry'

// 若要在 createApp 中使用 `template` 需要从 `vue/dist/vue.esm-bundler.js` 引入 `createApp`
createApp({
  template:`
    <div>
      <SButton>普通按钮</SButton>
    </div>
  `
}).use(SmartyUI).mount('#app')
