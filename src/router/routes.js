import Vue from "vue";
import Router from 'vue-router'
Vue.use(Router)

import Home from "@/pages/Home.vue";

import Shop from "@/pages/Shop.vue";
import Product from "@/pages/Product.vue";
import NotFound from '@/pages/404.vue'
import Modals from "@/pages/Modals.vue";
import MyNotes from "@/pages/MyNotes.vue";
import UsersCRM from "@/pages/usersCRM.vue";


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
		path: '/shop/:id',
		name: 'product',
		component: Product,
	},
	{
		path: '/modals',
		name: 'modals',
		component: Modals,
	},
	{
		path: '/notes',
		name:'notes',
		component: MyNotes,
	},
	{
		path: '/usersCRM',
		name:'usersCRM',
		component: UsersCRM
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