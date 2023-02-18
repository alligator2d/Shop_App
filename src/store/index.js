import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import {shopModule} from '@/store/Shop/shop'
import {notesModule} from "@/store/Notes/Notes";
import {notifyModule} from "@/store/Notify/notify";

export default new Vuex.Store({
	modules:{
		shopModule,
		notesModule,
		notifyModule
	}
});
