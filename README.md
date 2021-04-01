# Vue plugin project

## v-touch

> 下载自定义指令依赖

npm install vTouch --save -dev

> 引入指令

npm run dist ==== 生成打包的JS文件, 直接引入即可

> 使用指令参数说明

1. v-tap        // 点击触发

2. v-longTap    // 长按1秒触发

3. v-swipe      // 移动触发

4. v-swipeup    // 上移动10px触发

5. v-swipedown  // 下移动10px触发

6. v-swipeleft  // 左移动10px触发

7. v-swiperight // 右移动10px触发

> dom 组件使用

`<div v-tap="fn" v-swipeleft="(e) => fn(...)"></div>`

### extra

npm run build ---- vue-cli 打包项目
npm run dev   ---- 启动项目
npm run dist  ---- webpack-cli 打包插件生成JS文件 - 根据 vue.dist.config.js 配置来生成
    package.json -- main.js  // 决定 import xxx from “vue-plugin” 它默认就会去找 dist下的 JS 文件

npm login   --- 登录 npm 插件库 输入 用户 密码
npm publish --- 发布插件
