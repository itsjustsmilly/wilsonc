// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import rehypeFigures from './src/lib/rehype-figures.mjs';

export default defineConfig({
	site: 'https://wilsonc.dev',
	integrations: [mdx(), sitemap()],
	markdown: {
		rehypePlugins: [rehypeFigures],
	},
	redirects: {
		'/contact': '/about#contact',
	},
});
