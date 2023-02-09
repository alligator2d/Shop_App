import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import {shopModule} from '@/store/Shop/shop'
import {notesModule} from "@/store/Notes/Notes";

export default new Vuex.Store({
	modules:{
		shopModule,
		notesModule
	}
});
