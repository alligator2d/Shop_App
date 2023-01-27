import Vue, { h } from "vue";
import Router from 'vue-router'

Vue.use(Router)

import Home from "@/pages/Home.vue";
import Shop from "@/pages/Shop.vue";
import NotFound from '@/pages/404.vue'


const routes = [
	{
		path: '/',
		name: 'home',
		component: Home,
	},
	{
		path: '/shop',
		name: 'shop',
		component: Shop,
	},
	{
		path: '*',
		name: 'notFound',
		component: NotFound,
	},
]
const router = new Router({
	mode: 'history',
	routes,
})
export default router