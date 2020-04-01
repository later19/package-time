import Vue from 'vue'
import App from './App.vue'
import vuePicker from "./plugins/index.js"
// import VueRouter from 'vue-router';
import 'vant/lib/index.css';
import { Checkbox ,CheckboxGroup  } from 'vant';
import router from './plugins/route.js';
import less from 'less'
Vue.use(less)
Vue.use(Checkbox )
    .use(CheckboxGroup);
Vue.use(vuePicker);
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
