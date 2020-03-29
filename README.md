# my-blogs

> 个人博客 Vue+Element

## Project Address
> 47.100.99.23

## Bug
> 1.因为模块live2d-vue不能转为ES5导致IE浏览器不能使用，需要使用文件中的 live-2d-vue.common.js(已经手动转化为ES5) 替换掉 node_modules 下的 live2d-vue 下的文件.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:80
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

