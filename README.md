1. Install

``` bash
npm i vitest happy-dom @vue/test-utils -D
```

- vitest: 测试框架，用于执行整个测试过程并提供断言库、mock、覆盖率；

- happy-dom: 用于提供在 Node 环境中的 Dom 仿真模型；

- @vue/test-utils: 工具库，Vue推荐的测试工具库。

2. 配置Vitest in `package.json`

```js

export default defineConfig({
  // ...
  test: {
    // enable jest-like global test APIs
    globals: true,
    // simulate DOM with happy-dom
    // (requires installing happy-dom as a peer dependency)
    environment: 'happy-dom',
    // 支持tsx组件，很关键
    transformMode: {
      web: [/.[tj]sx$/]
    }
  }
})
```

