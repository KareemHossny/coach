import { siteConfig } from "@/config/site";
import { SectionHeader } from "./SectionHeader";
import {
  Dumbbell,
  Apple,
  Activity,
  MessageSquare,
  Target,
  Heart,
  type LucideIcon,
} from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  Dumbbell,
  Apple,
  Activity,
  MessageSquare,
  Target,
  Heart,
};

export function Services() {
  const { services } = siteConfig;
  return (
    <section id="services" className="py-20 md:py-28 bg-[var(--surface)]/40">
      <div className="container-page">
        <SectionHeader eyebrow="What you get" title="Every system you need.\nNothing you don't." />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s) => {
            const Icon = ICONS[s.icon] ?? Dumbbell;
            return (
              <div
                key={s.title}
                className="group p-7 rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface)] hover:border-primary/40 transition-colors"
              >
                <div className="grid place-items-center size-11 rounded-xl bg-primary/10 text-primary mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Icon className="size-5" />
                </div>
                <h3 className="font-semibold text-lg">{s.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                  {s.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
