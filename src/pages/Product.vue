<template>
	<div class="wrapper-content wrapper-content--fixed">
		<section>
			<div class="container">
				<div class="product__wrapper">
					
					<div class="product-slider">
						<carousel 
							:perPage="1"
							:pagination-enabled="true"
							pagination-color="#b3b3b3"
							pagination-active-color="#494ce8">
							<slide v-for="(slide,index) in product.gallery" :key="index">
								<img :src="slide.img" :alt="slide.name">
							</slide>
						
						</carousel>
					</div>
					
					<div class="product-content">
						<h1 class="title">{{product.title}}</h1>
						<p>{{product.descr}}</p>
					</div>
				</div>
			</div>
		</section>
	</div>
	
</template>

<script>
import { createNamespacedHelpers } from "vuex";
import {gettersTypes, actionTypes, mutationTypes} from "@/store/Shop/types";
const {mapState, mapActions, mapGetters, mapMutations } = createNamespacedHelpers('shopModule')

export default {
	data() {
		return {
			product: null,
		};
	},
	methods: {
		addId() {
			let id = this.$route.params.id;
			this.product = this.getProduct(id);
		}
	},
	created() {
		this.addId()
		// let id = this.$route.params.id;
		//  this.product = this.$store.getters.getProduct(id);
		
		// this.product = this.getProduct(id);
		
		// console.log(this.product);
	},
	computed: {
		...mapState({
			links: state => state.links
		}),
		...mapGetters({
			getProduct: gettersTypes.getProduct
		}),
		
	},
};
</script>

<style lang="scss">
.product__wrapper {
	display: flex;
  justify-content: space-between;
  align-items: center;  
}
.product-slider,
.product-content {
  max-width: 48%;
  text-align: center;
}
.VueCarousel-inner {
  visibility: visible!important;
  flex-basis: 100%!important;
  width: 100%!important;
}
</style>