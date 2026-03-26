import { notFound } from "next/navigation";
import Section from "@/components/Section";
import { getAllPosts, getPostContent } from "@/utils/posts";

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export default async function BlogPost({
  params
}: {
  params: { slug: string };
}) {
  const post = getAllPosts().find((p) => p.slug === params.slug);
  if (!post) return notFound();

  const html = await getPostContent(params.slug);

  return (
    <Section eyebrow="Blog" title={post.title} description={post.excerpt}>
      <article
        className="prose prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Section>
  );
}
