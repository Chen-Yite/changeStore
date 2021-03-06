import Vue from 'vue';
import Vuex from 'vuex';
import vuexI18n from 'vuex-i18n';

import translationsEn from './locales/en';
import translationszhHant from './locales/zh-hant';
import translationszhHans from './locales/zh-hans';
// import translationsDe from './locale/de';

Vue.use(Vuex);

let state = {
  curLanguage: null,
  languages: [
    {
      short: 'zh-hant',
      long: '繁體'
    },
    {
      short: 'zh-hans',
      long: '簡體'
    },
    {
      short: 'en',
      long: 'English'
    }
  ]
};

state.curLanguage = state.languages[0];

const mutations = {
  setLanguage(state, lang) {
    state.curLanguage = lang;
  }
}

const store = new Vuex.Store({
  state,
  mutations
});


// initialize the internationalization plugin on the vue instance. note that
// the store must be passed to the plugin. the plugin will then generate some
// helper functions for components (i.e. this.$i18n.set, this.$t) and on the vue
// instance (i.e. Vue.i18n.set).
Vue.use(vuexI18n.plugin, store);


// add some translations (could also be loaded from a separate file)
// note that it is possible to use placeholders. translations can also be
// structured as object trees and will automatically be flattened by the the
// plugin
/*const translationsEn = {
  "content": "This is some {type} content"
};*/

// translations can be kept in separate files for each language
// i.e. resources/i18n/de.json.
/*const translationsDe = {
  "My nice title": "Ein schöner Titel",
  "content": "Dies ist ein toller Inhalt"
};*/

// add translations directly to the application
Vue.i18n.add('en', translationsEn);
Vue.i18n.add('zh-hant', translationszhHant);
Vue.i18n.add('zh-hans', translationszhHans);
// Vue.i18n.add('de', translationsDe);

export default store;