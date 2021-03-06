import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import bus from '@/utils/bus'

// import '@/utils/filters'
// import '@/utils/directives'

Vue.prototype.$bus = bus
Vue.config.devtools = process.env.NODE_ENV === "development";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
