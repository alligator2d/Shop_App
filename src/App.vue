<template>
	<div class="wrapper">
		<header>
			<div class="navbar">
				<div class="container">
					<div class="navbar-content">
						<div class="logo">Shop App</div>
						<ul class="navbar-list">
							<li class="navbar-item" v-for="link in links" :key="link.title">
								<router-link class="navbar-link" :title="link.title" :to="link.url">{{link.title}}</router-link>
							</li>
						</ul>
					</div>
				</div>
				
			</div>
		</header>
		<router-view></router-view>
		
	</div>
</template>

<script>
export default {
	data() {
		return {
			links: [
				{
					title: "Home",
					url: "/"
				},
				{
					title: "Shop",
					url: "/shop"
				},
			]
		};
	}
	
};
</script>

<style lang="scss" scoped>
.navbar-link {
  &.router-link-exact-active {
	color: #444ce0;
  }
}
.navbar-link:hover{
  color: #444ce0;
  text-shadow: 1px 1px 2px blue;
  
}
</style>