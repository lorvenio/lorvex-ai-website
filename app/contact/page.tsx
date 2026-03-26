import Section from "@/components/Section";

export default function ContactPage() {
  return (
    <Section
      eyebrow="Contact"
      title="Start your AI transformation"
      description="Tell us about your AI initiative and we will respond within two business days."
    >
      <form className="glass grid gap-6 rounded-2xl p-8 md:max-w-2xl">
        <div className="grid gap-2">
          <label htmlFor="name" className="text-sm text-secondary/70">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className="rounded-lg border border-secondary/20 bg-background px-4 py-3 text-white outline-none focus:border-primary"
            placeholder="Your name"
            required
          />
        </div>
        <div className="grid gap-2">
          <label htmlFor="email" className="text-sm text-secondary/70">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="rounded-lg border border-secondary/20 bg-background px-4 py-3 text-white outline-none focus:border-primary"
            placeholder="you@company.com"
            required
          />
        </div>
        <div className="grid gap-2">
          <label htmlFor="message" className="text-sm text-secondary/70">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className="rounded-lg border border-secondary/20 bg-background px-4 py-3 text-white outline-none focus:border-primary"
            placeholder="Tell us about your project goals"
            required
          />
        </div>
        <button type="submit" className="btn-primary w-fit">
          Send Message
        </button>
      </form>
    </Section>
  );
}
