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
						<th @click="sort('firstName')">Name</th>
						<th @click="sort('age')">Age</th>
						<th @click="sort('gender')">Gender</th>
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
				<p>debug: sort: {{ currentSort }}, dir: {{ currentSortDir }}</p>
			</div>
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
			currentSortDir: "asc"
		};
	},
	methods: {
		async fetchUsers() {
			try {
				console.log("loading");
				this.isPostLoading = true;
				setTimeout(async () => {
					const res = await axios.get("https://dummyjson.com/users?limit=20");
					this.users = res.data.users;
					console.log(this.users);
					console.log("loading over");
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
		}
	},
	computed: {
		usersSort() {
			return this.users.sort((a, b) => {
				let mod = 1;
				if(this.currentSortDir === "desc") mod = -1;
				if(a[this.currentSort] < b[this.currentSort]) return -1 * mod;
				if(a[this.currentSort] > b[this.currentSort]) return mod;
				return 0;
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
</style>