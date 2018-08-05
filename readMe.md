# 多页面开发环境搭建模版

> 本模版采用了 gulp 作为前端工程化工具旨在提升开发环境搭建效率

## 创建项目

    yarn install 或者 npm i 安装项目依赖
    npm run create 项项目中创建 src/ 目录作为开发目录

## 开发环境

    npm start 即可开启开发服务器，默认集成了开发服务器，支持 hot-reloading

## 生产环境

    npm run build 会基于开发代码在项目跟目录下创建 dist 目录，和 vue-cli 方法类似，可以那么理解

## 开发规范

    程序员可以直接从 src/index.html 中进行开发
    项目中默认引入了 jq 和 swiper，如果有其他库的需求可以从网上拷贝相关资源。方式和传统开发方式一模一样。

    拷贝相关库的 js 源代码，放到 js 目录下即可
