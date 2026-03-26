import Section from "@/components/Section";
import BlogCard from "@/components/BlogCard";
import { getAllPosts } from "@/utils/posts";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <Section
      eyebrow="Blog"
      title="Technical insights and AI strategy"
      description="Practical guidance on agentic AI, LLM engineering, and enterprise governance."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {posts.map((post) => (
          <BlogCard
            key={post.slug}
            slug={post.slug}
            title={post.title}
            excerpt={post.excerpt}
            date={post.date}
          />
        ))}
      </div>
    </Section>
  );
}
