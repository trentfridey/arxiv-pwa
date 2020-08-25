import Vue from "vue";
import App from "./App.vue";
import axios from "axios";
import VueAxios from "vue-axios";
import "./registerServiceWorker";
import store from "./store";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import {
  faCaretUp,
  faCaretDown,
  faDownload,
  faExternalLinkAlt
} from "@fortawesome/free-solid-svg-icons";

import router from "./router";

Vue.use(VueAxios, axios);

library.add(faCaretUp, faCaretDown, faDownload, faExternalLinkAlt);

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
