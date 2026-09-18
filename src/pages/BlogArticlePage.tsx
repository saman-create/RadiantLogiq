import { ArrowLeft } from "lucide-react";
import { posts } from "./blogContent";
import { PageIntro } from "./Shared";
import { NotFound } from "./NotFound";

export function BlogArticlePage({ slug }: { slug: string }) {
  const post = posts.find((item) => item.slug === slug);
  if (!post) return <NotFound />;
  return (
    <article className="blog-article">
      <a className="text-link article-back" href="/blog"><ArrowLeft size={18} aria-hidden="true" />Back to the blog</a>
      <PageIntro title={post.title} description={post.introduction} />
      <div className="story-byline article-byline">
        <span className="story-category">{post.category}</span>
        <span>{post.date}</span><span>{post.author}</span><span>{post.readTime}</span>
      </div>
      <img className="article-cover" src={post.image} alt={post.imageAlt} />
      <div className="article-layout">
        <div className="article-prose">
          {post.blocks.map((block, index) => {
            if (block.kind === "heading") return <h2 key={index}>{block.text}</h2>;
            if (block.kind === "quote") return <blockquote key={index}>{block.text}</blockquote>;
            return <p key={index} className={block.kind === "disclaimer" ? "article-disclaimer" : undefined}>{block.text}</p>;
          })}
          <a className="text-link" href="/blog">Return to all stories <ArrowLeft size={18} aria-hidden="true" /></a>
        </div>
        <aside className="article-takeaways" aria-label="Key ideas">
          <h2>Key ideas</h2>
          <ul>{post.takeaways.map((idea) => <li key={idea}>{idea}</li>)}</ul>
        </aside>
      </div>
    </article>
  );
}
