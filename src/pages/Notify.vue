<template>
	<div class="wrapper-content wrapper-content--fixed">
		<section>
			<div class="container">
				<div class="notify__wrapper">
					<div class="notify-title">
						<p>Notify App</p>
						<img src="../assets/reload.svg" alt="update" @click="fetchMessage">
					</div>
					<div class="notify__content">
					<Preloader v-if="loading" :width="100" :height="100">
					</Preloader>
						<MyNotify
							v-if="!loading"
							:messages="messages"
						></MyNotify>
					</div>
				</div>
			</div> 
		</section>
	</div>
</template>
 
<script>
import MyNotify from "@/components/Notify/myNotify.vue";
import Preloader from "@/components/Notify/Preloader.vue";
import axios from "axios";
import { createNamespacedHelpers } from "vuex";
const {mapState, mapActions, mapGetters, mapMutations } = createNamespacedHelpers('notifyModule')


export default {
name: "Notify",
	data() {
		return {
			// messages: [],
			loading: false
		};
	},
	methods: {
		async fetchMessage() {
			try {
				this.loading = true;
				setTimeout(async () => {
					const res = await axios.get("http://localhost:8888/notifyApi.php");
					// this.messages = res.data.notify
					await this.$store.dispatch('setMessages', res.data.notify)
					this.loading = false;
				}, 2000);
				
			} catch (error) {
				console.log(error);
			} finally {
			}
		},
	},
	mounted() {
		this.fetchMessage()
	},
	computed: {
		messages () {
			return this.$store.getters.getMessages
		}
	},
	components: { Preloader, MyNotify },
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  //height: 90vh;
}
.notify__wrapper {
  width: 400px;
  background-color: white;
  padding: 30px;
  border-radius: 16px;
  box-shadow: 0 12px 22px 0 rgba(0,0,0,.1);
}
.notify__content {
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 300px;
}
.notify-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
	font-size: 24px;
  }
  img {
	cursor: pointer;
  }
}
</style>