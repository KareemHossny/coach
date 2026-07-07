import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";

export function Nav() {
  const { coach, nav } = siteConfig;
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-[var(--border-subtle)] bg-[color-mix(in_oklab,var(--background)_80%,transparent)] backdrop-blur-xl">
      <div className="container-page flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="grid place-items-center h-8 w-8 rounded-md bg-primary text-primary-foreground font-display text-base">
            {coach.initials}
          </span>
          <span className="font-semibold tracking-tight">{coach.name}</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {nav.links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <Button asChild size="sm" className="rounded-full px-5">
          <a href={nav.cta.href}>{nav.cta.label}</a>
        </Button>
      </div>
    </header>
  );
}
