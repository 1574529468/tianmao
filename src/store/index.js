import Vue from 'vue'
import Vuex from 'vuex'
import cart from './modules/cart'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

// 存放着组件中信息的状态
const state = {
  // 商品列表 ： 20 40 ...数据
  goodsList: [],
  // 一个商品的信息
  productInfo: {}
}
export default new Vuex.Store({
  state,
  actions,
  mutations,
  modules: {
    cart
  }
})
