import {defineConfig, sharpImageService} from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    site: 'https://www.picnicmtb.com',
    integrations: [mdx(), sitemap()],
    experimental: {
        assets: true
    },
    image: {
        service: sharpImageService(),
    },
});