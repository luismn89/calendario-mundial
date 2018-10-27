import 'es6-promise/auto'

// Libraries
import Vue from 'vue'
import VueKnob from 'vue-knob'
import Vuex from 'vuex'

Vue.component(VueKnob)
// Elements Vue
import { store } from './store/store'

// Main Page
import App from './components/App.vue'

new Vue({
  store,
  render: h => h(App)
}).$mount('#appFixture')
