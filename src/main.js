// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'ant-design-vue/dist/antd.css';  // or 'ant-design-vue/dist/antd.less'
import Antd from 'ant-design-vue'
Vue.use(Antd)
Vue.config.productionTip = false
import Authorized from "./components/Authorized";
import Auth from "./directives/auth";
Vue.use(Auth)
Vue.component("Authorized", Authorized);//全局注册Authorized组件
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
