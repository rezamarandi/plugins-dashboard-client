import { createApp } from 'vue';
import template from './template';
import router from './router';
import { makeServer } from './server';
import store from './store';
import * as components from './components';
import './styles';

const app = createApp(template);

if (['development', 'test'].includes(process.env.NODE_ENV)) {
	makeServer();
}

for (let component of Object.entries(components)) {
	app.component(component[1]?.name ?? component[0], components[component[0]]);
}

app.use(store);
app.use(router);
app.mount('#app');
