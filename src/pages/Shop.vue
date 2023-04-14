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
import { createNamespacedHelpers } from "vuex";
import {gettersTypes, actionTypes, mutationTypes} from "@/store/Shop/types";
const {mapState, mapActions, mapGetters, mapMutations } = createNamespacedHelpers('shopModule')

export default {
	data() {
		return {};
	},
	computed: {
		...mapState({
			shopList: state => state.shopList
		}),
		...mapGetters({
			getProduct: actionTypes.getProduct
		})
	},

	components: { ShopItem }
	
};
</script>

<style scoped>

</style>