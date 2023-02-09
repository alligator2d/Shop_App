<template>
	<div class="notes">
		<div :style="{ 'background-color': getTextColorByPriority(note.priority)}" class="note" :class="{full: !grid}" v-for="(note) in notes" :key="note.id">
			<div class="note-header" :class="{full: !grid}">
				<p >{{ note.title }}</p>
				<p class="delete" @click="removeNote(note.id)">x</p>
			</div>
			<div class="note-body">
				<p>{{ note.descr }}</p>
				<span>{{ note.date }}</span>
			</div>
		</div>
	</div>
</template>

<script>
import { createNamespacedHelpers} from "vuex";
const {mapState, mapActions, mapGetters, mapMutations} = createNamespacedHelpers('notesModule')

export default {
	props: {
		grid: {
			type: Boolean,
			required: true,
		}
		
	},
	computed: {
		...mapState({
			notes: state => state.notes,

		}),
	},
	methods: {
		
		removeNote(id) {
			this.$emit('remove', id)
			console.log(`Node id - ${id} removed`);
		},
		
		getTextColorByPriority(priority) {
			if(priority === 'low'){
				return '#02FFC8'
			}
			if(priority === 'middle'){
				return '#FFD670'
			}
			if(priority === 'high'){
				return '#FF6F6F'
			}
		}
	}
};
</script>

<style lang="scss">
.notes {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 40px 0;
}
.note {
  width: 48%;
  padding: 18px 20px;
  margin-bottom: 20px;
  background-color: white;
  transition: all .25s cubic-bezier(.02,.01,.47,1);
  box-shadow: 0 30px 30px rgba(0,0,0,.02);
  &:hover {
	box-shadow: 0 30px 30px rgba(0,0,0,0.4);
	transform: translate(0,-6px);
	transition-delay: 0s !important;
  }
  &.full {
	width: 100%;
	text-align: center;
  }
}
.note-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
	font-size: 22px;
  }
  p {
	font-size: 22px;
	color: #402caf;
  }
  svg{
	margin-right: 12px;
	color: #999999;
	&.active {
	  color: #402caf;
	}
	&:last-child {
	  margin-right: 6px;
	}
  }
  &.full {
	justify-content: center;
	p {
	  margin-right: 16px;
	  &:last-child {
		margin-right: 0;
	  }
	}
  }
}
.note-body {
  p {
	margin: 20px 0;
  }
  span {
	font-size: 14px;
	color: #999999;
  }
}
.delete {
  cursor: pointer;
}

</style>