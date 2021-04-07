import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    goodsImg: {},
    goodsitem: []
  },
  mutations: {
    goodsImgInfo(state, Img) {
      state.goodsImg = Img;
    },
    gooditem(state, goodlist) {
      state.goodsitem.push(goodlist);
    }
  },
  actions: {
  },
  modules: {
  }
})
