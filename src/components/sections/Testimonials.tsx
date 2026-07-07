import { siteConfig } from "@/config/site";
import { SectionHeader } from "./SectionHeader";
import { Quote } from "lucide-react";

export function Testimonials() {
  const { testimonials } = siteConfig;
  return (
    <section className="py-20 md:py-28 bg-[var(--surface)]/40">
      <div className="container-page">
        <SectionHeader eyebrow="What clients say" title="People who showed up\nfor themselves." />
        <div className="mt-14 grid md:grid-cols-2 gap-5">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="p-7 md:p-8 rounded-2xl bg-[var(--surface)] border border-[var(--border-subtle)] flex flex-col"
            >
              <Quote className="size-6 text-primary" />
              <blockquote className="mt-4 text-base md:text-lg leading-relaxed text-foreground/90">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 pt-5 border-t border-[var(--border-subtle)]">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="size-10 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <div className="font-medium text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.meta}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
