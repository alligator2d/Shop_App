<template>
	<div class="wrapper-content wrapper-content--fixed">
		<section>
			<div class="container">
				<h1 class="title" v-if="!isPostLoading">usersCRM page</h1>
				<div v-else>Loading ...
					<img src="../assets/icons8-спиннер.gif" alt="loading">
				</div>
				<table>
					<thead>
					<tr>
						<th @click="sort('firstName')">Name &#8595</th>
						<th @click="sort('age')">Age &#8595</th>
						<th @click="sort('gender')">Gender &#8595</th>
					</tr>
					</thead>
					
					<tbody>
					<tr v-for="user in usersSort" :key="user.id">
						<td>
							<img class="img" :src="user.image" :alt="user.name">
							<span>{{ user.firstName }}</span>
						</td>
						<td>{{ user.age }}</td>
						<td>{{ user.gender }}</td>
					</tr>
					
					</tbody>
				</table>
				
			</div>
		</section>
		
		<section>
			<div class="container">
				<div class="button-list">
					<button class="btn btnDefaul" @click="prevPage">&#8592</button>
					<button class="btn btnDefaul" @click="nextPage">&#8594</button>
				</div>
			</div>
			<p class="debug">
				<span>debug... sort: {{ currentSort }}, dir: {{ currentSortDir }}</span>
				<br>
				<span>page: {{ this.page.current}}, length: {{this.page.length}}</span>
			</p>
		</section>
	</div>
</template>

<script>
import axios from "axios";

export default {
	name: "CRM",
	data() {
		return {
			users: [],
			isPostLoading: false,
			currentSort: "name",
			currentSortDir: "asc",
			page: {
				current:1,
				length:5,
			}
		};
	},
	methods: {
		async fetchUsers() {
			try {
				this.isPostLoading = true;
				setTimeout(async () => {
					const res = await axios.get("https://dummyjson.com/users?limit=20");
					this.users = res.data.users;
					// console.log(this.users);
					this.isPostLoading = false;
				}, 1000);
				
			} catch (e) {
				console.log("error");
			}
		},
		sort(e) {
			if(e === this.currentSort) {
				this.currentSortDir = this.currentSortDir === "asc" ? "desc" : "asc";
			}
			this.currentSort = e;
		},
		//Pagination
		prevPage() {
			if (this.page.current > 1) {
				this.page.current--
			}
		},
		nextPage() {
			if ((this.page.current * this.page.length) < this.users.length) {
				this.page.current++
			}
		},
	},
	
	computed: {
		usersSort() {
			return this.users.sort((a, b) => {
				let mod = 1;
				if(this.currentSortDir === "desc") mod = -1;
				if(a[this.currentSort] < b[this.currentSort]) return -1 * mod;
				if(a[this.currentSort] > b[this.currentSort]) return mod;
				return 0;
			}).filter((row, index) => {
				let start = (this.page.current-1) * this.page.length
				let end = this.page.current * this.page.length
				if (index >= start && index < end) return true
			});
		}
	},
	created() {
		this.fetchUsers();
	}
};
</script>

<style scoped>
.img {
	width: 50px;
	margin-right: 15px;
}
.btn {
	padding: 10px;
	margin: 5px;
	
}
.btnDefaul:hover {
	 box-shadow: 0 30px 30px rgba(0,0,0,0.4);
	 transform: translate(0,-3px);
	 transition-delay: 0s !important;
 }

.button-list {
	display: flex;
	justify-content: center;
}
.debug {
	margin-top: 10px;
	text-align: center;
}

</style>