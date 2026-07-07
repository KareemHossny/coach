import { siteConfig } from "@/config/site";

export function Footer() {
  const { coach, footer } = siteConfig;
  return (
    <footer className="border-t border-[var(--border-subtle)] bg-[var(--surface)]/40">
      <div className="container-page py-14 grid md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid place-items-center h-8 w-8 rounded-md bg-primary text-primary-foreground font-display text-base">
              {coach.initials}
            </span>
            <span className="font-semibold">{coach.name}</span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-xs">{footer.blurb}</p>
          <div className="mt-5 text-xs text-muted-foreground space-y-1">
            <div>{coach.email}</div>
            <div>{coach.phone}</div>
            <div>{coach.location}</div>
          </div>
        </div>
        {footer.columns.map((col) => (
          <div key={col.title}>
            <h4 className="text-xs tracking-widest text-muted-foreground uppercase">{col.title}</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {col.links.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="hover:text-primary transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div>
          <h4 className="text-xs tracking-widest text-muted-foreground uppercase">Follow</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {footer.social.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-[var(--border-subtle)]">
        <div className="container-page py-5 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <div>
            © {new Date().getFullYear()} {coach.name}. All rights reserved.
          </div>
          <div>Designed for results.</div>
        </div>
      </div>
    </footer>
  );
}
