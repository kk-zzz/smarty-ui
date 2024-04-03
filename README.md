<!-- https://zhuanlan.zhihu.com/p/659839223 -->

1. Install

``` bash
# eslint 检查代码语法，eg: 是否有声明但是并没有使用的变量
npm i eslint -D
# prettier 专注于代码格式的调整功能
npm i prettier -D

# eslint 专门解析 typescript 的解析器
npm i @typescript-eslint/parser -D
# 内置各种解析 typescript rules 插件
npm i @typescript-eslint/eslint-plugin -D

# 使 eslint 和 prettier 更好地集成
npm i eslint-plugin-prettier -D
npm i eslint-config-prettier -D

npm i eslint-plugin-vue -D

# 为 typescript 提供Vue推荐的 eslint 配置
npm i @vue/eslint-config-typescript -D
# 用于解决 eslint 与 prettier 之间可能的规则冲突
npm i @vue/eslint-config-prettier -D
```

```sh
# install eslint
npm i -D eslint eslint-plugin-vue @typescript-eslint/parser @typescript-eslint/eslint-plugin

# install prettier
npm i -D prettier eslint-config-prettier eslint-plugin-prettier  

npm i @vue/eslint-config-typescript @vue/eslint-config-prettier -D

```

2. Use husky

- [husky](https://typicode.github.io/husky/get-started.html)

```sh
npm i husky -D

npx husky init

# 修改 ./husky/pre-commit
```

3. commit type

- type：commit 的类型；
- feat：新功能、新特性；
- fix: 修改 bug；
- perf：更改代码，以提高性能；
- refactor：代码重构（重构，在不影响代码内部行为、功能下的代码修改）；
- docs：文档修改；
- style：代码格式修改, 注意不是 css 修改（例如分号修改）；
- test：测试用例新增、修改；
- build：影响项目构建或依赖项修改；
- revert：恢复上一次提交；
- ci：持续集成相关文件修改；
- chore：其他修改（不在上述类型中的修改）；
- release：发布新版本；
- workflow：工作流相关文件修改。

```sh
# 安裝自動化提示工具
npm i commitizen cz-conventional-changelog -D

# 初始化命令行
npx commitizen init cz-conventional-changelog --save-dev --save-exact

npm run commit
```

```sh
# 安裝 cz 适配器
npm i  commitlint-config-cz  cz-customizable -D
```

# Repair import

```sh
# 自动修复 import 的排序
npm i eslint-plugin-simple-import-sort -D
```