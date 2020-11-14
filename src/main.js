import Vue from 'vue'
import App from './App.vue'

import { sendSock } from './api/socket'
import proto from './proto/proto.js'

import Antd from 'ant-design-vue/es';
import 'ant-design-vue/dist/antd.css';

Vue.config.productionTip = false
Vue.use(Antd)

Vue.prototype.$socket = sendSock
Vue.prototype.$proto = proto

new Vue({
  render: h => h(App),
}).$mount('#app')
