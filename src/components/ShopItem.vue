<template>
	
	<router-link class="item" :to="/shop/ + product.id">
		<div class="item__product">
			<img :src="product.img" :alt="product.title" >
		<div class="product__text"> {{product.title}}</div>	
		</div>
		</router-link>
	
</template>

<script>
export default {
	props:{
		product: {
			type: Object,
			required: true,
		}
	}
}
</script>

<style lang="scss" >
.item--wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}
.item {
  max-width: 48%;
  text-align: center;
}
p {
  font-size: 22px;
}

.item__product {
  padding: 18px 20px;
  margin-bottom: 20px;
  transition: all .25s cubic-bezier(.02,.01,.47,1);
  box-shadow: 0 30px 30px rgba(0,0,0,.02);
}
.product__text {
  color: #444ce0;
}
.item__product:hover {
  color: #444ce0;
  text-shadow: 1px 1px 1px blue;
  box-shadow: 0 30px 30px rgba(0,0,0,0.4);
  transform: translate(0,-6px);
  transition-delay: 0s !important;
  
}
</style>