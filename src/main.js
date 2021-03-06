import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAweSomeSwiper from 'vue-awesome-swiper'

Vue.config.productionTip = false
Vue.use(VueAweSomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
/* eslint-enable no-new */
