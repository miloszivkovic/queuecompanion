import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import Vue from "vue";
import App from "./App.vue";

import './styles/global.scss'
import router from './router'

Vue.use(BootstrapVue);
Vue.use(IconsPlugin)
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App)
}).$mount("#app");
