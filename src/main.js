import Vue from 'vue';
import Template from './template';
import router from './router';
import * as components from './components';
import { makeServer } from './server';
import store from './store';
import './styles';

if (['development', 'test'].includes(process.env.NODE_ENV)) {
	makeServer();
}

// const app = createApp(template);

for (let component of Object.entries(components)) {
	app.component(component[1]?.name ?? component[0], components[component[0]]);
}
const app = new Vue({
	router,
	store,
	render: (h) => h(Template),
}).$mount('#app');
