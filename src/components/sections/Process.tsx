import { siteConfig } from "@/config/site";
import { SectionHeader } from "./SectionHeader";

export function Process() {
  const { process } = siteConfig;
  return (
    <section id="process" className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeader eyebrow="How it works" title="A simple, proven\nfour-step process." />
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--border-subtle)] rounded-2xl overflow-hidden border border-[var(--border-subtle)]">
          {process.map((p, i) => (
            <div key={p.step} className="relative bg-[var(--surface)] p-7 md:p-8">
              <div className="font-display text-primary text-sm tracking-widest">STEP {p.step}</div>
              <h3 className="font-display text-3xl mt-3">{p.title}</h3>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{p.description}</p>
              {i < process.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 size-6 rounded-full bg-[var(--surface)] border border-[var(--border-subtle)]" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
