import Vue from 'vue'
import App from './App.vue'
import store from './Vuex/Store';
import router from './Router/Index';
import VueAwesomeSwiper from 'vue-awesome-swiper';

Vue.config.productionTip = false

Vue.use(VueAwesomeSwiper);

// import style
import 'swiper/css/swiper.min.css';

new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app')
