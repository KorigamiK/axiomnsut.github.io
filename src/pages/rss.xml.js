import rss from '@astrojs/rss';

const postImportResult = import.meta.glob(
  './*.md?(x)',
  { eager: true }
);
const posts = Object.values(postImportResult).filter((post) => !post.frontmatter.draft);

export const get = () => rss({
  title: 'Axiom | The Philosophy Society',
  description: 'life, philosophy, and everything in-between',
  site: import.meta.env.SITE,
  items: posts.map((post) => ({
    link: post.url,
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    pubDate: post.frontmatter.pubDate,
  })),
  customData: `<language>en-us</language>`,
});
