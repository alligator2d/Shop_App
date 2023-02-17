<template>
	<div class="wrapper-content wrapper-content--fixed">
		<section>
			<div class="container">
				<div class="notify__wrapper">
					<div class="notify-title">
						<p>Notify App</p>
					</div>
					
					<div class="notify__content">
						<MyNotify
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
export default {
name: "Notify",
	data() {
		return {
			messages: [
				{ title: 'message 1' },
				{ title: 'message 2' },
				{ title: 'message 3' },
				{ title: 'message 4' },
				{ title: 'message 5' },
				{ title: 'message 6' },
			]
		};
	},
	components: { MyNotify },
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
.notify-item {
  p {
	font-size: 24px;
  }
}
</style>