import Vue from 'vue'
import Vuex from 'vuex'
import datesModule from './modules/dates'
import matchesModule from './modules/matches'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    dates: datesModule,
    matches: matchesModule
  }
});
