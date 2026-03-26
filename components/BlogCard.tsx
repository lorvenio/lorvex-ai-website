import Link from "next/link";

export default function BlogCard({
  slug,
  title,
  excerpt,
  date
}: {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
}) {
  return (
    <article className="glass rounded-2xl p-6">
      <p className="text-xs uppercase tracking-[0.3em] text-secondary/60">
        {date}
      </p>
      <h3 className="mt-3 text-xl font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm text-secondary/80">{excerpt}</p>
      <Link href={`/blog/${slug}`} className="mt-4 inline-block text-primary">
        Read article →
      </Link>
    </article>
  );
}
