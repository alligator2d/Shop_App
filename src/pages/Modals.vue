 <template>
	<div class="wrapper-content wrapper-content--fixed">
		<section>
			<div class="container">
				<h1 class="title">Modals page</h1>
				
<!--				First modal-->
				<button class="btn btnPrimary" @click="modalFirst = !modalFirst">Show First modal</button>
				
				<modal title="First modal"
					   v-show="modalFirst"
					   @close="modalFirst = false">
					
					<div slot="body">
						<p>Hello this is first modal!!</p>
						<button class="btn btnPrimary" @click="modalFirst = !modalFirst">Click</button>
					
					</div>
				</modal>
				
				<!--				 Second modal with form-->
				<button class="btn btnPrimary" @click="modalSecond.show = !modalSecond.show">Second modal with Form</button>
				
				<modal title="Second Modal with Form"
					   v-show="modalSecond.show"
					   @close="modalSecond.show = false">
					
					<div slot="body">
						<form @submit.prevent="submitSecondForm">
							<label>Name:</label>
							<input type="text" required v-model="modalSecond.name">
							
							<label>Email:</label>
							<input type="email" required v-model="modalSecond.email">
							
							<button class="btn btnPrimary">Submit</button>
						</form>
					
					
					</div>
				</modal>
				
				
<!--				Modal validate-->
				<button class="btn btnPrimary"
						@click="modalValidate = !modalValidate">
					Modal with Validate
				</button>
				<modal-validate v-show="modalValidate" @close="modalValidate = false">
				</modal-validate>
			
			</div>
		</section>
	</div>
</template>

<script>
import modalValidate from "@/components/Modal/ModalValidate.vue";
import Modal from "@/components/Modal/UI/Modal.vue";
import axios from "axios";
export default {
name: "Modals",
	data() {
		return {
			modalValidate: false,
			modalFirst: false,
			ModalCheckIn: false,
			modalLogin: {
				show: false,
				login: '',
				password:'',
			},
			modalSecond: {
				show: false,
				name: "",
				email: ""
			}
		};
	},
	methods: {
		submitSecondForm() {
			axios
			.post('https://site.com/...', {
				name: this.modalSecond.name,
				email: this.modalSecond.email
			})
			console.log({
				name: this.modalSecond.name,
				email: this.modalSecond.email
			});
			this.modalSecond.name = "";
			this.modalSecond.email = "";
			this.modalSecond.show = false;
		},
	},
	components: {
	Modal, modalValidate
	}
}
</script>

<style scoped>
.btnPrimary {
	margin: 10px;
}
.titleFooter {
	font-size: 12px;

}
.descr {
	font-size: 12px;
	text-decoration: underline;
	cursor: pointer;
}
</style>