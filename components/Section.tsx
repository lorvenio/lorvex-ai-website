export default function Section({
  eyebrow,
  title,
  description,
  children
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="section">
      <div className="mx-auto w-full max-w-6xl px-6">
        {eyebrow && (
          <p className="mb-3 text-xs uppercase tracking-[0.35em] text-secondary/70">
            {eyebrow}
          </p>
        )}
        <h2 className="text-3xl font-semibold text-white md:text-4xl">
          {title}
        </h2>
        {description && (
          <p className="mt-4 max-w-2xl text-secondary/80">{description}</p>
        )}
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
