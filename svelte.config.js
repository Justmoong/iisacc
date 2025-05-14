import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';
import sveltePreprocess from 'svelte-preprocess'; // 임포트 이름을 sveltePreprocess로 명확히 할 수 있습니다 (선택 사항)

const config = {
	extensions: ['.svelte', '.svx'],
	preprocess: [
		mdsvex({ extensions: ['.svx'] }), // mdsvex를 먼저 실행
		sveltePreprocess() // 그 다음 svelte-preprocess 실행
	],
	kit: {
		adapter: adapter({ fallback: 'index.html' }),
		prerender: {
			entries: ['*']
		}
	}
};

export default config;