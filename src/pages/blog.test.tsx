import { afterEach, expect, it } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { BlogPage } from './CompanyPages';
import { BlogArticlePage } from './BlogArticlePage';
import { posts } from './blogContent';

afterEach(cleanup);
it('links each supplied story with its local image and current metadata', () => {
  render(<BlogPage />);
  for (const post of posts) {
    expect(screen.getByRole('link', { name: post.title })).toHaveAttribute('href', `/blog/${post.slug}`);
    expect(screen.getByRole('img', { name: post.imageAlt })).toHaveAttribute('src', post.image);
    expect(screen.getByText(post.date)).toBeInTheDocument();
  }
});
it.each(posts)('renders every supplied paragraph and takeaway for $slug', (post) => {
  render(<BlogArticlePage slug={post.slug} />);
  for (const block of post.blocks) expect(screen.getByText(block.text)).toBeInTheDocument();
  for (const idea of post.takeaways) expect(screen.getByText(idea)).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'Back to the blog' })).toHaveAttribute('href', '/blog');
});
