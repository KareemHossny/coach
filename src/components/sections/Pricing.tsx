import { siteConfig } from "@/config/site";
import { SectionHeader } from "./SectionHeader";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export function Pricing() {
  const { pricing } = siteConfig;
  return (
    <section id="pricing" className="py-20 md:py-28 bg-[var(--surface)]/40">
      <div className="container-page">
        <SectionHeader
          eyebrow="Pricing"
          title="Pick the level of support\nyou actually need."
          description={pricing.note}
        />
        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {pricing.plans.map((p) => (
            <div
              key={p.name}
              className={
                "relative rounded-2xl p-7 md:p-8 border flex flex-col " +
                (p.featured
                  ? "border-primary/60 bg-[var(--surface)] shadow-[var(--shadow-glow)]"
                  : "border-[var(--border-subtle)] bg-[var(--surface)]")
              }
            >
              {p.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] tracking-widest font-semibold px-3 py-1 rounded-full bg-primary text-primary-foreground">
                  MOST POPULAR
                </span>
              )}
              <h3 className="font-display text-3xl">{p.name}</h3>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="font-display text-5xl">{p.price}</span>
                <span className="text-muted-foreground text-sm">{p.cadence}</span>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{p.description}</p>
              <ul className="mt-6 space-y-3 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <Check className="size-4 text-primary mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                asChild
                size="lg"
                variant={p.featured ? "default" : "outline"}
                className={
                  "mt-8 rounded-full h-12 " +
                  (p.featured
                    ? ""
                    : "border-[var(--border-subtle)] bg-transparent hover:bg-[var(--surface-elevated)] text-foreground")
                }
              >
                <a href="#apply">{p.cta}</a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
