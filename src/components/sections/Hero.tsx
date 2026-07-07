import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck } from "lucide-react";

export function Hero() {
  const { hero, stats } = siteConfig;
  return (
    <section id="top" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-70"
        style={{ background: "var(--gradient-radial)" }}
      />
      <div className="container-page grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center">
        <div>
          <p className="text-xs md:text-sm tracking-[0.2em] text-primary mb-6 animate-fade-in">
            {hero.eyebrow}
          </p>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] whitespace-pre-line animate-fade-in">
            {hero.headline}
          </h1>
          <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl">
            {hero.subheadline}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button
              asChild
              size="lg"
              className="rounded-full px-7 h-12 shadow-[var(--shadow-glow)]"
            >
              <a href={hero.primaryCta.href}>
                {hero.primaryCta.label} <ArrowRight className="ml-1" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="ghost"
              className="rounded-full px-6 h-12 text-foreground hover:bg-[var(--surface)]"
            >
              <a href={hero.secondaryCta.href}>{hero.secondaryCta.label}</a>
            </Button>
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            {hero.badges.map((b) => (
              <li key={b} className="flex items-center gap-1.5">
                <ShieldCheck className="size-4 text-primary" />
                {b}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="relative rounded-3xl overflow-hidden border border-[var(--border-subtle)] shadow-[var(--shadow-elevated)]">
            <img
              src={hero.image}
              alt={hero.imageAlt}
              className="w-full aspect-[4/5] object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent" />
          </div>
          <div
            aria-hidden
            className="absolute -inset-6 -z-10 rounded-[2rem] blur-3xl opacity-50 animate-float-glow"
            style={{ background: "var(--gradient-primary)" }}
          />
        </div>
      </div>

      <div className="container-page mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-px bg-[var(--border-subtle)] rounded-2xl overflow-hidden border border-[var(--border-subtle)]">
        {stats.map((s) => (
          <div key={s.label} className="bg-[var(--surface)] p-6 md:p-8">
            <div className="font-display text-4xl md:text-5xl text-primary">{s.value}</div>
            <div className="text-xs md:text-sm text-muted-foreground mt-1">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
