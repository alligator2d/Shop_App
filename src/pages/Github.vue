<template>
	<div class="wrapper-content wrapper-content--fixed">
		<section>
			<div class="container">
				<div class="github__wrapper">
					<div class="github-title">
						<p>GitHub Finder App</p>
					</div>
					
					<div class="error" v-if="error">{{ error }}</div>
					
					<search :value="search"
							placeholder="Search userName..."
							@search="search = $event"
					></search>
					<button class="btn btnPrimary"
							@click="fetchRepos"
					>Search repos
					</button>
					<button class="btn btnWhite"
							@click="fetchUsers">Search User
					</button>
					
					<div class="repos__wrapper" v-if="repos">
						
						<div class="sort-item">
						<p @click="sort('name')">Name &#8595</p>
						<p @click="sort('stargazers_count')">Stars &#8595</p>
						</div>
						
						<div class="repos-item" v-for="repo in reposSort" :key="repo.id">
							<div class="repos-info">
								<a class="link" target="_blank" :href="repo.html_url">{{ repo.name }}</a>
								<span> {{ repo.stargazers_count }} ⭐</span>
							</div>
						</div>
					</div>
					<div class="users__wrapper" v-if="users">
						
						<div class="users-info">
							<span><strong>{{ users.name }}</strong></span>
							<p>{{users.location}}</p>
							<p>{{users.bio}}</p>
							<p>Count of repos: {{ users.public_repos }}</p>
							
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
import { github } from "@/api/github";
import Search from "@/components/Notes/Search.vue";

export default {
	name: "Github",
	data() {
		return {
			search: "",
			repos: null,
			error: null,
			users: null,
			currentSort: "name",
			currentSortDir: "asc",
		};
	},
	methods: {
		
		fetchUsers() {
			github.get(`/${this.search}`).then(res => {
				this.users = res.data;
				console.log(this.users);
				this.error = null;
			}).catch(err => {
				console.log(err);
				this.users = null;
				this.error = "Can`t find this user";
			});
			
		},
		fetchRepos() {
			github.get(`/${this.search}/repos`).then(res => {
				this.repos = res.data;
				console.log(this.repos);
				this.error = null;
			}).catch(err => {
				console.log(err);
				this.repos = null;
				this.error = "Can`t find this user";
			});
		},
		sort(e) {
			console.log('sorting');
			if(e === this.currentSort) {
				this.currentSortDir = this.currentSortDir === "asc" ? "desc" : "asc";
			}
			this.currentSort = e;
		},
	},
	computed: {
		reposSort() {
			return this.repos.sort((a, b) => {
				let mod = 1;
				if(this.currentSortDir === "desc") mod = -1;
				if(a[this.currentSort] < b[this.currentSort]) return -1 * mod;
				if(a[this.currentSort] > b[this.currentSort]) return mod;
				return 0;
			})
		}
	},
	
	components: { Search }
};
</script>

<style lang="scss" scoped>
.github__wrapper {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.repos__wrapper {
  margin-top: 20px;
  width: 400px;

}
.btn {
  margin-top: 10px;
}
.repos-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 10px 0;
  border-bottom: 1px solid #dbdbdb;
}

.repos-item:hover {
}

.error {
  color: darkred;
}
.users-info {
  display: flex;
  width: 400px;
  margin-top: 20px;
  align-items: center;
  flex-direction: column;
}
.sort-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
}
</style>