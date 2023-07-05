import rss from '@astrojs/rss';
import { getCollection } from "astro:content";

export async function get() {
    const posts = await getCollection('posts');
    return rss({
        title: 'Picnic MTB | Blog',
        description: 'Ride your mountain bike, share with the community &amp; live a stoked life',
        site: 'https://www.picnicmtb.com',
        items: posts.map((post) => ({
            title: post.data.title,
            pubDate: post.data.pubDate,
            description: post.data.description,
            link: `/posts/${post.slug}/`,
        })),
        customData: `<language>en-us</language>`,
    });
}