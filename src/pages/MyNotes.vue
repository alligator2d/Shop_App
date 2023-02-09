<template>
	<div class="wrapper-content wrapper-content--fixed">
		<section>
			<div class="container">
				<Message v-if="message" :message="message"></Message>
				
				<new-note @addNote="addNote"></new-note>
				
				<div class="note-header">
					
					<h1>{{ title }}</h1>
					
					<Search :value="search"
							placeholder="Find your note by title"
							@search="search = $event"></Search>
					
					<div class="icons">
						<svg :class="{active:grid}" @click="grid=true" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
							 viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
							 stroke-linejoin="round">
							<rect x="3" y="3" width="7" height="7"></rect>
							<rect x="14" y="3" width="7" height="7"></rect>
							<rect x="14" y="14" width="7" height="7"></rect>
							<rect x="3" y="14" width="7" height="7"></rect>
						</svg>
						<svg :class="{active:!grid}" @click="grid=false" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
							 viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
							 stroke-linejoin="round">
							<line x1="8" y1="6" x2="21" y2="6"></line>
							<line x1="8" y1="12" x2="21" y2="12"></line>
							<line x1="8" y1="18" x2="21" y2="18"></line>
							<line x1="3" y1="6" x2="3" y2="6"></line>
							<line x1="3" y1="12" x2="3" y2="12"></line>
							<line x1="3" y1="18" x2="3" y2="18"></line>
						</svg>
					</div>
				
				</div>
				
				<Notes :notes="notesFilter" :grid="grid" @remove="removeNote"></Notes>
			
			
			
			</div>
		</section>
	</div>
</template>

<script>
import Message from "@/components/Notes/Message.vue";
import NewNote from "@/components/Notes/NewNote.vue";
import Notes from "@/components/Notes/Notes.vue";
import Search from "@/components/Notes/Search.vue";
import { createNamespacedHelpers } from "vuex";
import { mutationTypes, actionTypes } from "@/store/Notes/types";
const { mapState, mapActions, mapGetters, mapMutations } = createNamespacedHelpers("notesModule");
export default {
name: "MyNotes",
	data() {
		return {
			search: "",
			message: null,
			grid: true		
		};
	},
	computed: {
		...mapState({
			notes: state => state.notes,
			title: state => state.title,
			// message: state => state.message
		}),
		
		notesFilter() {
			let array = this.notes;
			let search = this.search;
			
			if(!search) return array;
			
			search = search.trim().toLowerCase();
			
			array = array.filter(item => {
				if(item.title.toLowerCase().indexOf(search) !== -1) {
					return item;
				}
			});
			return array;
		}
	},
	methods: {
		...mapActions({
			removeNote: actionTypes.removeNote,
		}),
		...mapMutations({
			
		}),
		addNote(note, priority) {
			console.log(note);
			let { title, descr } = note;
			if(title === "") {
				this.message = "Error - note is empty =(";
				return false;
			}
			this.notes.push({
				id: new Date(Date.now()),
				priority,
				title,
				descr,
				date: new Date(Date.now()).toLocaleString()
			});
			note.title = "";
			note.descr = "";
			this.message = null;
		}
		// removeNote(id){
		// 	this.notes = this.notes.filter(i => i.id !== id);
		// }
	},
	components: {
		Search,
		Notes,
		NewNote,
		Message
	}
};
</script>

<style>
.icons {
	cursor: pointer;
}
</style>