import { siteConfig } from "@/config/site";
import { Check } from "lucide-react";

export function Coach() {
  const { coachSection } = siteConfig;
  return (
    <section id="coach" className="py-20 md:py-28">
      <div className="container-page grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="relative order-2 lg:order-1">
          <div className="rounded-3xl overflow-hidden border border-[var(--border-subtle)]">
            <img
              src={coachSection.image}
              alt="Coach portrait"
              className="w-full aspect-[4/5] object-cover"
              loading="lazy"
            />
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <p className="text-xs tracking-[0.2em] text-primary mb-4">MEET YOUR COACH</p>
          <h2 className="font-display text-5xl md:text-6xl">{coachSection.title}</h2>
          <div className="mt-6 space-y-4 text-muted-foreground md:text-lg leading-relaxed">
            {coachSection.bio.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <ul className="mt-8 grid sm:grid-cols-2 gap-3">
            {coachSection.achievements.map((a) => (
              <li key={a} className="flex items-start gap-2.5 text-sm">
                <Check className="size-4 text-primary mt-0.5 shrink-0" />
                <span>{a}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
