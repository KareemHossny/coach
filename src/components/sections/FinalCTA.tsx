import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  const { finalCta } = siteConfig;
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-60"
        style={{ background: "var(--gradient-radial)" }}
      />
      <div className="container-page text-center max-w-3xl">
        <p className="text-xs tracking-[0.3em] text-primary mb-6">{finalCta.eyebrow}</p>
        <h2 className="font-display text-5xl sm:text-6xl md:text-7xl leading-[0.95] whitespace-pre-line">
          {finalCta.headline}
        </h2>
        <p className="mt-6 text-muted-foreground md:text-lg">{finalCta.description}</p>
        <Button
          asChild
          size="lg"
          className="mt-10 rounded-full px-8 h-14 text-base shadow-[var(--shadow-glow)]"
        >
          <a href={finalCta.cta.href}>
            {finalCta.cta.label} <ArrowRight />
          </a>
        </Button>
      </div>
    </section>
  );
}
