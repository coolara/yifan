import App from './App'
import Vue from 'vue'
import './uni.promisify.adaptor'
// 引入全局TuniaoUI
import TuniaoUI from 'tuniao-ui'
// 引入store
import store from './store'
// 引入TuniaoUI提供的vuex简写方法
let vuexStore = require('@/store/$tn.mixin.js')
Vue.mixin(vuexStore)
Vue.use(TuniaoUI)
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
	store,
  ...App
})
app.$mount()

