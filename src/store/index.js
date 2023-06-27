//引入vuex实现子组件之间的数据共享

import Vue from 'vue'
import Vuex from 'vuex'
import state from './state.js'
import mutations from './mutations.js'
Vue.use(Vuex)



export default new Vuex.Store({
    state: state,
    mutations: mutations
})