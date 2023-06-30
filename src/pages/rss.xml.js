import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function get() {
    return rss({
        title: 'Picnic MTB | Blog',
        description: 'Ride your mountain bike, share with the community &amp; live a stoked life',
        site: 'https://www.picnicmtb.com',
        items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
        customData: `<language>en-us</language>`,
    });
}