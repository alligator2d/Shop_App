<template>
	<div class="new-note">
		<label >Title...</label>
		<input v-model="note.title" type="text">
		
		<label>Description...</label>
		<textarea v-model="note.descr"></textarea>
		
		<div class="priorityBtns">
			<input v-model="priority" class="radioBtn" type="radio" id="low"
					name="low" value="low">
			<label for="low">low</label>
			
			<input v-model="priority" class="radioBtn" type="radio" id="middle"
				   name="middle" value="middle">
			<label for="middle">middle</label>
			
			<input v-model="priority" class="radioBtn" type="radio" id="high"
				   name="high" value="high">
			<label for="high">high</label>
		</div>
		
		<button class="btn btnPrimary" @click="addNote">New note</button>
	</div>
</template>

<script>
export default {
	data() {
		return {
			note: {
				title: "",
				descr: ""
			},
			priority: 'low',
		}
	},
	computed: {
	},
	methods: {
		addNote() {
			this.$emit("addNote", this.note, this.priority);
		}
	}
};
</script>

<style lang="scss">
.new-note {
  text-align: center;
}

.btnPrimary {
  margin-top: 20px;
}
.priorityBtns {
  display: flex;
  justify-content: center;
}
.radioBtn {
  width: 30px;
  display: inline-block;
  margin-top: 5px;
}
</style>