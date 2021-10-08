import Vue from 'vue'
import Vuex from 'vuex'
import education from './education'
import news from './news'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    education,
    news
  }
})
