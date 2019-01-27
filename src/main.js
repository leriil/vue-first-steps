import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);

Vue.config.productionTip = false;
// Vue.component ('another-status', Home);

// this bus is used for siblings communication
// we can write data and methods inside this Vue instance and use them whenever we import this busEvent
export const eventBus = new Vue();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

