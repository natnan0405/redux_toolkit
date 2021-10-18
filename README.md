<!--
 * @Author: SmartNan
 * @Date: 2021-10-18 16:01:11
 * @LastEditTime: 2021-10-18 16:17:44
 * @Description: 相关描述
-->
# redux_toolkit 概览
use @reduxjs/toolkit to produce React project


##  安装
```
# NPM
npm install @reduxjs/toolkit
# Yarn
yarn add @reduxjs/toolkit
```


## 目的

**Redux Toolkit**  它最初是为了帮助解决有关 Redux 的三个常见问题而创建的：

-   "配置 Redux store 过于复杂"
-   "我必须添加很多软件包才能开始使用 Redux 做事情"
-   "Redux 有太多样板代码"

## 为什么需要使用 Redux Toolkit

**React Toolkit**  使得编写良好的 Redux 应用程序和加快开发速度变得更加容易。 Redux工具包对**所有 Redux 用户都有帮助**无论技能水平或者经验如何。可以在新项目开始时添加它，也可以在现有项目中将其用作增量迁移的一部分。

请注意，**您不是_必须_使用 Redux Toolkit 才能使用Redux**。有许多现有的应用使用其他 Redux 封装库，或者**纯手写**  Redux 逻辑。**如果你希望使用其他方法，请继续！**

总体而言，无论您是开发第一个项目的全新 Redux 用户，还是想简化现有应用程序的经验丰富的用户，**使用 Redux Toolkit 都将使你的代码更好，更可维护**。

## 包含了什么

-   [`configureStore()`  函数](https://redux-toolkit.js.org/api/configureStore)  提供简化的配置选项。它可以自动组合切片 slice 的 reducer，添加你提供的任何 Redux 中间件，默认情况下包含  `redux-thunk`，并启用 Redux DevTools 扩展。
-   [`createReducer()`  工具](https://redux-toolkit.js.org/api/createReducer)  让你自动做 action type 到 reducer 的对应，而不是编写 switch...case 语句。另外，它会自动使用  [`immer`  库](https://github.com/mweststrate/immer)来让你使用普通的 mutable 代码编写更简单的 immutable 更新，例如  `state.todos[3].completed = true`。
-   [`createAction()`  工具](https://redux-toolkit.js.org/api/createAction)  返回给定 action type 字符串的 action creator 函数。该函数本身已定义了  `toString()`，因此可以代替常量类型使用。
-   [`createSlice()`  函数](https://redux-toolkit.js.org/api/createSlice)  接受一组化 reducer 函数，一个 slice 切片名和初始状态 initial state，并自动生成具有相应 action creator 和 action type 的 slice reducer。
-   [`createSelector`  工具](https://redux-toolkit.js.org/api/createSelector)  来源于  [Reselect](https://github.com/reduxjs/reselect)  库，重新 export 出来以方便使用。

## 文档

Redux Toolkit 完整的文档在这里 **[https://redux-toolkit.js.org](https://redux-toolkit.js.org/)**。
Redux Toolkit 中文文档 大牛翻译 **[https://redux-toolkit-cn.netlify.app](https://redux-toolkit-cn.netlify.app)**。
-   **简介**
    -   [快速开始](https://redux-toolkit.js.org/introduction/quick-start)
-   **教程**
    -   [基础教程](https://redux-toolkit.js.org/tutorials/basic-tutorial)
    -   [中级教程](https://redux-toolkit.js.org/tutorials/intermediate-tutorial)
    -   [高级教程](https://redux-toolkit.js.org/tutorials/advanced-tutorial)
-   **使用 Redux Toolkit**
    -   [入门](https://redux-toolkit.js.org/usage/usage-guide)
-   **API 文档**
    -   [`configureStore`](https://redux-toolkit.js.org/api/configureStore)
    -   [`getDefaultMiddleware`](https://redux-toolkit.js.org/api/getDefaultMiddleware)
    -   [`createReducer`](https://redux-toolkit.js.org/api/createReducer)
    -   [`createAction`](https://redux-toolkit.js.org/api/createAction)
    -   [`createSlice`](https://redux-toolkit.js.org/api/createSlice)
    -   [`createSelector`](https://redux-toolkit.js.org/api/createSelector)
    -   [其他 Export](https://redux-toolkit.js.org/api/other-exports)
