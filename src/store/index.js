import { createStore } from 'vuex';

export default createStore({
	state: {
		plugins: Object,
		tabData: Object,
		tabs: Object,
		enableAll: Boolean,
	},
	getters: {
		tabData: (state) => state.tabData,
		activeTabs: (state) => state.tabs,
		pluginData: (state) => state.plugins,
	},
	actions: {
		async setServerData(state) {
			fetch('/api/plugins')
				.then((res) => res.json())
				.then((json) => {
					state.commit('setServerResult', json[0]);
				});
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
