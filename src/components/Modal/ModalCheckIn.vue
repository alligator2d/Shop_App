<template>
	<modal title="Регистрация"
		   @close="$emit('close')">
		
		<div slot="body">
			<form @submit.prevent="checkIn">
				<input type="text" placeholder="Имя" required v-model="ModalCheckIn.name">
				<input type="text" placeholder="Логин" required v-model="ModalCheckIn.login">
				<input type="email" placeholder="Почта" required v-model="ModalCheckIn.email">
				<input type="text" placeholder="Пароль" required v-model="ModalCheckIn.password">
				
				<button class="btn btnPrimary">Зарегистрироваться</button>
<!--				<p class="titleFooter">У вас уже есть аккаунт?</p>-->
<!--				<p class="descr" @click="openLogin"><strong>Войти</strong></p>-->
			</form>
		
		
		</div>
	</modal>
</template>

<script>
import Modal from "@/components/Modal/UI/Modal.vue";

export default {
	name: "ModalCheckIn",
	data() {
		return {
			ModalCheckIn: {
				name: "",
				login: "",
				email: "",
				password: ""
			}
		};
	},
	methods: {
		checkIn() {
			const user = {
				name: this.ModalCheckIn.name,
				login: this.ModalCheckIn.login,
				email: this.ModalCheckIn.email,
				password: this.ModalCheckIn.password,
			}
			console.log(user);
			this.ModalCheckIn.name ='';
			this.ModalCheckIn.login ='';
			this.ModalCheckIn.email ='';
			this.ModalCheckIn.password ='';
			this.$emit('close');
			
				
		},
		
	},
	components: {
		Modal
	}
};
</script>

<style scoped>

</style>