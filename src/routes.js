import Vue, { h } from "vue";
import Router from 'vue-router'

Vue.use(Router)

import Home from "@/pages/Home.vue";
import Example from "@/pages/Example.vue";

const routes = [
	{
		path: '/',
		name: 'home',
		component: Home,
	},
	{
		path: '/example',
		name: 'example',
		component: Example,
	},
]
const router = new Router({
	routes,
})
export default router