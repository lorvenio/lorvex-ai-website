import Section from "@/components/Section";
import ServiceCard from "@/components/ServiceCard";
import CTA from "@/components/CTA";

export default function ServicesPage() {
  return (
    <>
      <Section
        eyebrow="Services"
        title="Enterprise-grade AI consulting"
        description="We design, build, and govern AI systems with measurable impact."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <ServiceCard
            title="AI Strategy Consulting"
            description="Executive alignment, ROI prioritization, and AI operating models."
          />
          <ServiceCard
            title="LLM Engineering"
            description="Production-ready LLM stacks for secure, high-accuracy deployments."
            bullets={[
              "RAG systems",
              "Prompt pipelines",
              "Vector databases"
            ]}
          />
          <ServiceCard
            title="Agentic AI Systems"
            description="Autonomous agents that orchestrate complex workflows."
            bullets={[
              "Autonomous workflows",
              "Multi-agent systems"
            ]}
          />
          <ServiceCard
            title="AI Risk & Governance"
            description="Risk modeling, safety controls, and compliance tooling for regulated environments."
          />
          <ServiceCard
            title="Enterprise AI Architecture"
            description="Reference architectures, integration blueprints, and platform modernization."
          />
        </div>
      </Section>
      <Section title="Launch your AI program with confidence" description="">
        <CTA />
      </Section>
    </>
  );
}
