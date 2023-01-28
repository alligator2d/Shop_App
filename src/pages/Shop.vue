<template>
	<div class="wrapper-content wrapper-content--fixed">
		<section>
			<div class="container">
				<h1 class="title">Shop page</h1>
				<div class="item--wrapper">
					<ShopItem
						v-for="product in shopList" :key="product.id"
						:product='product'>
					</ShopItem>
				</div>
				
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
	},
	components: {
		ShopItem
	}
	
};
</script>

<style scoped>

</style>