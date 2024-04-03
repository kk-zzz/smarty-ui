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
  template: `
    <div style="margin-bottom:20px;">
      <SButton color="blue">主要按钮</SButton>
      <SButton color="green">绿色按钮</SButton>
      <SButton color="gray">灰色按钮</SButton>
      <SButton color="yellow">黄色按钮</SButton>
      <SButton color="red">红色按钮</SButton>
    </div>
    <div style="margin-bottom:20px;"
    >
      <SButton color="blue" plain>朴素按钮</SButton>
      <SButton color="green" plain>绿色按钮</SButton>
      <SButton color="gray" plain>灰色按钮</SButton>
      <SButton color="yellow" plain>黄色按钮</SButton>
      <SButton color="red" plain>红色按钮</SButton>
    </div>
    <div style="margin-bottom:20px;">
      <SButton size="small" plain>小按钮</SButton>
      <SButton size="medium" plain>中按钮</SButton>
      <SButton size="large" plain>大按钮</SButton>
    </div>
    <div style="margin-bottom:20px;">
      <SButton color="blue" round plain icon="search">搜索按钮</SButton>
      <SButton color="green" round plain icon="edit">编辑按钮</SButton>
      <SButton color="gray" round plain icon="check">成功按钮</SButton>
      <SButton color="yellow" round plain icon="message">提示按钮</SButton>
      <SButton color="red" round plain icon="delete">删除按钮</SButton>
    </div>
    <div style="margin-bottom:20px;">
      <SButton color="blue" round plain icon="search"></SButton>
      <SButton color="green" round plain icon="edit"></SButton>
      <SButton color="gray" round plain icon="check"></SButton>
      <SButton color="yellow" round plain icon="message"></SButton>
      <SButton color="red" round plain icon="delete"></SButton>
    </div>
  `
  // template:`
  //   <div>
  //     <SButton>普通按钮</SButton>
  //     <SButton color="blue">蓝色按钮</SButton>
  //     <SButton color="green">绿色按钮</SButton>
  //     <SButton color="gray">灰色按钮</SButton>
  //     <SButton color="yellow">黄色按钮</SButton>
  //     <SButton color="red">红色按钮</SButton>
  //   </div>
  // `
})
  .use(SmartyUI)
  .mount('#app')
