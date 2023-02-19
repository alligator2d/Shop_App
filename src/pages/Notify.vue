<template>
	<div class="wrapper-content wrapper-content--fixed">
		<section>
			<div class="container">
				<div class="notify__wrapper">
					<div class="notify-title">
						<p>Notify App</p>
						<img src="../assets/reload.svg" alt="update" @click="fetchMessagesLazy">
					</div>
					<div class="notify__content">
						<Preloader v-if="loading" :width="100" :height="100">
						</Preloader>
						<div class="error" v-if="error">{{ error }}</div>
						<MyNotify
							v-if="!loading && !error "
							:messages="messages"
						></MyNotify>
					
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
import { client } from "@/api/client";
import MyNotify from "@/components/Notify/myNotify.vue";
import Preloader from "@/components/Notify/Preloader.vue";
import axios from "axios";
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions, mapGetters, mapMutations } = createNamespacedHelpers("notifyModule");


export default {
	name: "Notify",
	data() {
		return {
			loading: true,
			error: null
		};
	},
	methods: {
		fetchMessagesLazy() {
			this.loading = true;
			setTimeout(() => {
				this.fetchMessages()
			}, 2000)
		},
		async fetchMessages() {
			this.loading = true;
			try {
				const response = await client.get("/notifyApi.php");
				let res = response.data.notify;
				let messages = [];
				let messagesMain = [];
				res.forEach((i => {
					if(i.main) {
						messagesMain.push(i);
					} else {
						messages.push(i);
					}
				}));
				await this.$store.dispatch("setMessages", messages);
				await this.$store.dispatch("setMessagesMain", messagesMain);
			} catch (e) {
				console.log(e);
				this.error = e.name;
			} finally {
				this.loading = false;
			}
		}
	},
	mounted() {
		this.fetchMessagesLazy();
	},
	computed: {
		messages() {
			return this.$store.getters.getMessagesMain;
		}
	},
	components: { Preloader, MyNotify }
};
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
  box-shadow: 0 12px 22px 0 rgba(0, 0, 0, .1);
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
.error {
  color: darkred
}
</style>