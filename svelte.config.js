import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const config = {
	extensions: ['.svelte', '.svx'],
	preprocess: [
		mdsvex({
			extensions: ['.svx'],
			layout: {
				'*': path.resolve(__dirname, 'src/lib/Layouts/PostLayout.svelte')
			}
		})
	],
	kit: {
		adapter: adapter(),
		prerender: {
			entries: ['*']
		}
	}
};

export default config;
