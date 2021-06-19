import { Server } from 'miragejs';
import plugins from './fixtures/plugins';

export function makeServer({ environment = 'development' } = {}) {
	let server = new Server({
		environment,
		fixtures: {
			plugins,
		},
		seeds(server) {
			server.loadFixtures();
			server.create('plugin');
		},
		routes() {
			this.namespace = 'api';
			this.get('/plugins', (schema) => {
				return schema.db.plugins;
			});
			this.post('/plugins', () => {
				return true;
			});
		},
	});
	return server;
}
