<template>
	<div class="message">
		<p>{{message}}</p>
	</div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions, mapGetters, mapMutations } = createNamespacedHelpers("notesModule");

export default {
	props: {
		message: {
			type: String,
			required: true,
		}
	},
	computed: {
		...mapState({
			// message: state => state.message
		}),
	}
};
</script>

<style lang="scss" scoped>
p {
  color: red;
}
.message {
  text-align: center;
  padding: 20px;
}
</style>