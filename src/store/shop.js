export default {
	state: {
		shopList: [
			{
				id: 1,
				title: "Nke AirMax",
				descr: "Возьмите комфорт на тропах. Вдохновленные человеческим телом и топографическими ландшафтами, Nike Air Max 95 UL с увеличенными ушками и синтетической кожей создают образ, готовый к приключениям.",
				img: require("../assets/img/1.png")
			}
		]
	},
	mutations: {},
	action: {},
	getters: {
		getShopList(state) {
			return state.shopList;
		}
	}
	
};