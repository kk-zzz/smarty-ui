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