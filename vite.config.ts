import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import Icons from 'unplugin-icons/vite';
import { threeMinifier } from '@yushijinhun/three-minifier-rollup';

export default defineConfig({
	plugins: [
		{ ...threeMinifier(), enforce: 'pre' },
		sveltekit(),
		Icons({
			compiler: 'svelte'
		})
	],
	server: {
		watch: {
			usePolling: true
		}
	},
	ssr: {
		noExternal: ['three']
	}
});
