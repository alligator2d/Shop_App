import loadMore from "@/assets/js/loadMore";

export const notifyModule = {
	// namespaced: true,
	state: {
		messages:[]	,
		messagesMain:[]	,
	},
	getters: {
		getMessages(state) {
			return state.messages
		},
		getMessagesMain(state) {
			return state.messagesMain
		},
		getMessagesFilter(state) {
			return state.messages.filter(mes => {
				return mes.main === false 
			})
		},
	},
	actions: {
		setMessages ({commit}, payload) {
			commit('SET_MESSAGES', payload)
		},
		setMessagesMain ({commit}, payload) {
			commit('SET_MESSAGES_MAIN', payload)
		},
		loadMessages ({commit, getters}) {
		let res = getters.getMessagesFilter
			commit('LOAD_MESSAGES', loadMore(res))
		}
	},
	mutations: {
		SET_MESSAGES(state, payload) {
			state.messages = payload
		},
		SET_MESSAGES_MAIN(state, payload) {
			state.messagesMain = payload
		},
		LOAD_MESSAGES (state, payload) {
			state.messagesMain = [...state.messagesMain, ...payload]
		}
	}
} 