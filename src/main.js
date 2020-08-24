import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

import VueSwing from "vue-swing";
Vue.component("vue-swing", VueSwing);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

