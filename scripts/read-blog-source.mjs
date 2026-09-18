import { readFileSync } from 'node:fs';
import { resolve, basename } from 'node:path';
import { JSDOM } from 'jsdom';

// Extract editorial text only; never import source scripts, styles, or raw HTML.
const source = process.argv[2];
if (!source) throw new Error('Provide the supplied blog folder path.');
const read = (path) => new JSDOM(readFileSync(resolve(source, path), 'utf8')).window.document;
const index = read('index.html');
const text = (node) => node.textContent.trim();
const posts = [...index.querySelectorAll('#stories article')].map((card) => {
  const file = card.querySelector('a').getAttribute('href');
  const article = read(file);
  const image = article.querySelector('.article-image');
  const meta = [...article.querySelectorAll('.article-hero .meta span')].map(text);
  return {
    slug: basename(file, '.html'),
    title: text(article.querySelector('h1')),
    category: text(card.querySelector('.eyebrow')),
    description: text(card.querySelector('p')),
    introduction: text(article.querySelector('.dek')),
    date: meta[0], author: meta[1], readTime: meta[2],
    image: '/blog/images/' + basename(image.getAttribute('src')),
    imageAlt: image.getAttribute('alt'),
    blocks: [...article.querySelector('.prose').children].map((node) => ({
      kind: node.matches('h2') ? 'heading' : node.matches('.pullquote') ? 'quote' : node.matches('.disclaimer') ? 'disclaimer' : 'paragraph',
      text: text(node),
    })),
    takeaways: [...article.querySelectorAll('.takeaways li')].map(text),
  };
});
console.log(JSON.stringify({description: text(index.querySelector('.page-intro p')), posts}));
