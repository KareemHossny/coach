import { siteConfig } from "@/config/site";
import { SectionHeader } from "./SectionHeader";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";

export function Transformations() {
  const { transformations, transformationsSection: s } = siteConfig;
  return (
    <section id="results" className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeader eyebrow={s.eyebrow} title={s.title} description={s.description} />
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {transformations.map((t) => (
            <article
              key={t.name}
              className="group rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface)] overflow-hidden transition-all hover:border-primary/40"
            >
              <BeforeAfterSlider
                before={t.before}
                after={t.after}
                beforeAlt={`${t.name} before`}
                afterAlt={`${t.name} after`}
                beforeLabel={s.beforeLabel}
                afterLabel={s.afterLabel}
              />
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{t.name}</h3>
                  <span className="text-xs text-primary">{t.timeframe}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">{t.result}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
