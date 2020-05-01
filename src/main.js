// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue from 'vue'
import 'babel-polyfill'
import 'url-search-params-polyfill';

import App from './App'
import Route from './router'
// import '@/assets/styles/gl.scss'
// import axios from "axios"
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// import 'element-ui/lib/theme-chalk/display.css';  // Element 隐藏


// import live2d from 'live2d-vue'
// Vue.use(live2d);
axios.defaults.baseURL = 'https://my.houlai.fun:444/'; //上线
// axios.defaults.baseURL = 'http://localhost/';   //测试
Vue.prototype.$axios= axios
axios.defaults.withCredentials=true;


Vue.config.productionTip = false




// Vue.use(ElementUI);




/* eslint-disable no-new */
new Vue({
  el: '#app',
  router:Route,
  components: { App },
  template: '<App/>',
  mounted() {

    //          var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串  
    //          var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器  
    //          var isEdge = userAgent.indexOf("Edge") > -1 && !isIE; //判断是否IE的Edge浏览器  
    //          var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;// 判断是否为IE11浏览器
    //          if(isIE){
    //             alert('使用高版本浏览器 可以获得更好的体验o');
    //          }
  }
})
