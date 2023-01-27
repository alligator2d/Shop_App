<template>
	<div class="wrapper-content wrapper-content--fixed">
		<section>
			<div class="container">
				<h1 class="title">Shop page</h1>
				<ShopItem></ShopItem>
			</div>
		</section>
	</div>
</template>

<script>
import ShopItem from "@/components/ShopItem.vue";
export default {
	data() {
		return {
			shopList: null
			
		};
	},
	created() {
		this.shopList = this.$store.getters.getShopList;
	
		console.log(this.shopList);
	},
	components: {
		ShopItem
	}
	
};
</script>

<style scoped>

</style>