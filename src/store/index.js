import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    goodsImg: {},
  },
  mutations: {
    goodsImgInfo(state, Img) {
      state.goodsImg = Img;
    }
  },
  actions: {
  },
  modules: {
  }
})
