import { Module } from "vuex";
import { gettersTypes, actionTypes, mutationTypes } from "./types";

export const notesModule = {
	namespaced: true,
	state: {
		notes: [
			{
				id: 1,
				priority: "low",
				title: "First note",
				descr: "Description for first note",
				date: new Date(Date.now()).toLocaleString()
			},
			{
				id: 2,
				priority: "middle",
				title: "Second note",
				descr: "Description for second note",
				date: new Date(Date.now()).toLocaleString()
			},
			{
				id: 3,
				priority: "high",
				title: "Third note",
				descr: "Description for third note",
				date: new Date(Date.now()).toLocaleString()
			}
		],
		title: "Notes App",
		// message: null,
		
	},
	getters: {},
	actions: {
		[actionTypes.removeNote]({commit, state}, value) {
			const newNotes = state.notes.filter(i => i.id !== value);
			commit(mutationTypes.SET_NOTES, newNotes)
		}
	},
	mutations: {
		[mutationTypes.SET_NOTES](state, value) {
			state.notes = value
		}
	}
};