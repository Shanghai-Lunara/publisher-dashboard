import Vue from 'vue'
import App from './App.vue'
import router from './router'

import { initWebSocket } from './api/socket'
import { sendSock } from './api/socket'
import proto from './proto/proto.js'

import Antd from 'ant-design-vue/es';
import 'ant-design-vue/dist/antd.css';

import vueCookies from 'vue-cookies';
import axios from 'axios';
import vueAxios from 'vue-axios';
import vuex from 'vuex';

Vue.config.productionTip = false
Vue.use(Antd)
Vue.use(vueAxios,axios)
//Vue.use(vueCookies)
Vue.use(vuex)

Vue.prototype.$initWebSocket = initWebSocket
Vue.prototype.$socket = sendSock
Vue.prototype.$proto = proto

Vue.prototype.$cookies = vueCookies;
Vue.prototype.$axios = axios;

//axios.defaults.withCredentials = true

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
