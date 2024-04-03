import { App } from 'vue'
import MyButton from './button'
import JSXButton from './JSXButton'
import SFCButton from './SFCButton.vue'

// 导出单独组件
export { MyButton, SFCButton, JSXButton }

// 编写一个插件，实现一个 install 方法
export default {
  install(app: App): void {
    app.component(MyButton.name, MyButton)
    app.component(SFCButton.name, SFCButton)
    app.component(JSXButton.name, JSXButton)
  }
}
