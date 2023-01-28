export default {
	state: {
		shopList: [
			{
				id: 1,
				title: "Nike AirMax 270",
				descr: "Возьмите комфорт на тропах. Вдохновленные человеческим телом и топографическими ландшафтами, Nike Air Max 95 UL с увеличенными ушками и синтетической кожей создают образ, готовый к приключениям.",
				img: require("../assets/img/1.png"),
				gallery: [
					{ name: "Nike boots First", img: require("../assets/img/1.png") },
					{ name: "Nike boots Second", img: require("../assets/img/2.png") },
					{ name: "Nike boots Third", img: require("../assets/img/3.png") }
				]
			},
			{
				id: 2,
				title: "Nike Quest 5",
				descr: "Возьмите комфорт на тропах. Вдохновленные человеческим телом и топографическими ландшафтами, Nike Air Max 95 UL с увеличенными ушками и синтетической кожей создают образ, готовый к приключениям.",
				img: require("../assets/img/4.png"),
				gallery: [
					{ name: "Nike boots Four", img: require("../assets/img/4.png") },
					{ name: "Nike boots Five", img: require("../assets/img/5.png") },
					{ name: "Nike boots Six", img: require("../assets/img/6.png") }
				]
				
			},
			{
				id: 3,
				title: "Nike Green",
				descr: "Одет в пепельно-зеленую и серебристо-металлическую цветовую гамму. Эта модель Nike Air Max 90 имеет верх из зеленого бархата с логотипом в тон. Прочная белая резиновая подошва с талисманами lucky charms для придания блеска завершает дизайн.",
				img: require("../assets/img/7.png"),
				gallery: [
					{ name: "Nike boots Seven", img: require("../assets/img/7.png") },
					{ name: "Nike boots Eight", img: require("../assets/img/8.png") },
					{ name: "Nike boots Nine", img: require("../assets/img/9.png") }
				]
				
			},
			{
				id: 4,
				title: "Nike Street",
				descr: "Air Force 1 — кроссовки, вышедшие в свет в 1982 году, на создание которых дизайнера Брюса Килгора вдохновил президентский одноимённый самолёт. Модель не только успела побывать самой неубиваемой баскетбольной обувью, но и стала самой популярной и продаваемой моделью бренда Nike. Air Force 1 — классика для любого гардероба. .",
				img: require("../assets/img/10.png"),
				gallery: [
					{ name: "Nike boots Ten", img: require("../assets/img/10.png") },
					{ name: "Nike boots Eleven", img: require("../assets/img/11.png") },
					{ name: "Nike boots Twelve", img: require("../assets/img/12.png") }
				]
				
			}
		]
	},
	mutations: {},
	action: {},
	getters: {
		getShopList(state) {
			return state.shopList;
		},
		getProduct: (state) => (id) => {
			return state.shopList.find(product => product.id == id);
		}
	}
	
};