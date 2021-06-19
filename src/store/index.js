import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		plugins: Object,
		tabData: Object,
		tabs: Object,
	},
	getters: {
		tabData: (state) => state.tabData,
		activeTabs: (state) => state.tabs,
		pluginData: (state) => state.plugins,
	},
	actions: {
		async setCurrentData(state) {
			const result = await fetch('/api/plugins');
			const serverResponse = await result.json();
			state.commit('setServerResult', serverResponse);
		},
	},
	mutations: {
		setServerResult(state, payload) {
			state.tabData = payload.tabdata;
			state.tabs = payload.tabs;
			state.plugins = payload.plugins;
		},
	},
});
