import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		ispc: true,
		user_info:false,
		md:''
	},
	mutations: {
		pe(state) {
			state.ispc=false
		},
		chageUserInfo(state,arr){
			state.user_info=arr
		},
		exit_login(state){
			state.user_info=false
		}
	},
	actions: {},
	modules: {}
})
