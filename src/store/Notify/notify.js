export const notifyModule = {
	// namespaced: true,
	state: {
		messages:[]		
	},
	getters: {
		getMessages(state) {
			return state.messages
		}
		
	},
	actions: {
		setMessages ({commit}, payload) {
			commit('SET_MESSAGES', payload)
		}
	},
	mutations: {
		SET_MESSAGES(state, payload) {
			state.messages = payload
		}
	}
} 