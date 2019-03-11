import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './assets/css/index.css'
import 'swiper/dist/css/swiper.css'
import 'lib-flexible'

// 导入vue的懒加载
import VueLazyload from 'vue-lazyload';
Vue.use(VueLazyload,{
  loading:require("./assets/images/loading.gif")
})

global.storage = window.localStorage
// 导入mint-ui
import Mint from  'mint-ui';
Vue.use(Mint);
import 'mint-ui/lib/style.css'

//  http 拦截器
import Axios from 'axios';
Vue.prototype.$axios = Axios;

// request 请求拦截器
Axios.interceptors.request.use(function (req) {
  // 显示loading
  Mint.Indicator.open('加载...');
  return req;
})
// response响应拦截器
Axios.interceptors.response.use(function (res) {
  // 隐藏loading

  Mint.Indicator.close();
  return res;

})
// Mint.Indicator.open('加载...');

Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
