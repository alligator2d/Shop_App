<template>
	<div class="wrapper">
		<header>
			<div class="navbar">
				<div class="container">
					<div class="navbar-content">
						<div class="logo"><img src="@/assets/alligator-low-resolution-logo-black-on-transparent-background.png" alt="logo">
						</div>
						<div>Apps on Vue</div>
						<ul class="navbar-list">
							<li class="navbar-item" v-for="link in links" :key="link.title">
								<router-link class="navbar-link" :title="link.title" :to="link.url">{{ link.title }}</router-link>
							</li>
						</ul>
					</div>
				</div>
			
			</div>
		</header>
		<transition name="slide-fade">
			<router-view></router-view>
		</transition>
	
	</div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
import { gettersTypes, actionTypes, mutationTypes } from "@/store/Shop/types";
const { mapState, mapActions, mapGetters, mapMutations } = createNamespacedHelpers("shopModule");

export default {
	data() {
		return {};
	},
	computed: {
		...mapState({
			links: state => state.links
		})
	}
};
</script>

<style lang="scss" scoped>
.logo {
  width: 80px;
}

.navbar-link {
  &.router-link-exact-active {
	color: #444ce0;
  }
}

.navbar {
  background-color: oldlace;
}

.navbar-link:hover {
  color: #444ce0;
  text-shadow: 1px 1px 2px blue;
}

.slide-fade-enter-active {
  transition: all .3s ease;
}

.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>