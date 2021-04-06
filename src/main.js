import Vue from 'vue';
import Amplify from 'aws-amplify';
import '@aws-amplify/ui-vue';
import awsconfig from '../awsconfig';
import './registerServiceWorker';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import App from './App.vue';

Amplify.configure(awsconfig);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render(h) {
    return h(App);
  },
}).$mount('#app');
