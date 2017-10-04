import Vue from 'vue';
import VueI18n from 'vue-i18n';

import VueMaterial from 'vue-material';

import VueScrollTo from 'vue-scrollto';
import VueScrollReveal from 'vue-scroll-reveal';

import VueLazyload from 'vue-lazyload';

import 'vue-awesome/icons/slack';
import 'vue-awesome/icons/telegram';
import 'vue-awesome/icons/github';
import 'vue-awesome/icons/reddit';
import 'vue-awesome/icons/medium';
import 'vue-awesome/icons/twitter';
import 'vue-awesome/icons/facebook';
import Icon from 'vue-awesome/components/Icon';

import 'vue-material/dist/vue-material.css';

import App from './App';
import router from './router';

import messages from './locales';
import { BROWSER_LANGUAGE } from './constants';

Vue.config.productionTip = false;
Vue.use(VueMaterial);
Vue.use(VueI18n);
Vue.use(VueScrollTo);
Vue.use(VueLazyload);
Vue.use(VueScrollReveal);

Vue.component('icon', Icon);

// Create VueI18n instance with options
export const i18n = new VueI18n({
  locale: BROWSER_LANGUAGE,
  fallbackLocale: 'en',
  messages, // set locale messages
});

Vue.prototype.$locale = {
  change(language) {
    i18n.locale = language;
  },
  current() {
    return i18n.locale;
  },
};

/* eslint-disable no-new */
export default new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  i18n,
});
