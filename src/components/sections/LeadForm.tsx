import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/config/site";

const GOALS = [
  "Fat loss",
  "Muscle gain",
  "Body recomposition",
  "Athletic performance",
  "Habits & accountability",
];

export function LeadForm() {
  const [sent, setSent] = useState(false);
  const [goal, setGoal] = useState(GOALS[0]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Wire this up to your backend / email service.
    setSent(true);
    toast.success("Application received. I'll be in touch within 24 hours.");
  };

  return (
    <section id="apply" className="py-20 md:py-28 bg-[var(--surface)]/40">
      <div className="container-page grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <div className="lg:sticky lg:top-28">
          <p className="text-xs tracking-[0.2em] text-primary mb-4">APPLY FOR COACHING</p>
          <h2 className="font-display text-5xl md:text-6xl leading-[0.95]">
            Let's see if
            <br />
            we're a fit.
          </h2>
          <p className="mt-5 text-muted-foreground md:text-lg max-w-md">
            Fill out the form and I'll personally review it. If it looks like a match, you'll get a
            link to book a free 30-minute call.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2">
              <CheckCircle2 className="size-4 text-primary mt-0.5" /> No high-pressure sales — ever.
            </li>
            <li className="flex gap-2">
              <CheckCircle2 className="size-4 text-primary mt-0.5" /> Reply within 24 hours.
            </li>
            <li className="flex gap-2">
              <CheckCircle2 className="size-4 text-primary mt-0.5" /> Limited spots open monthly.
            </li>
          </ul>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface)] p-6 md:p-8 space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Name" htmlFor="name">
              <Input
                id="name"
                name="name"
                required
                placeholder="Your full name"
                className="bg-[var(--surface-elevated)] border-[var(--border-subtle)] h-11"
              />
            </Field>
            <Field label="Email" htmlFor="email">
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@email.com"
                className="bg-[var(--surface-elevated)] border-[var(--border-subtle)] h-11"
              />
            </Field>
          </div>
          <Field label="Phone" htmlFor="phone">
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+1 (555) 000-0000"
              className="bg-[var(--surface-elevated)] border-[var(--border-subtle)] h-11"
            />
          </Field>
          <Field label="Primary goal" htmlFor="goal">
            <div className="flex flex-wrap gap-2">
              {GOALS.map((g) => (
                <button
                  type="button"
                  key={g}
                  onClick={() => setGoal(g)}
                  className={
                    "text-xs px-3 py-2 rounded-full border transition-colors " +
                    (goal === g
                      ? "bg-primary text-primary-foreground border-primary"
                      : "border-[var(--border-subtle)] text-muted-foreground hover:text-foreground")
                  }
                >
                  {g}
                </button>
              ))}
            </div>
            <input type="hidden" name="goal" value={goal} />
          </Field>
          <Field label="Tell me about yourself" htmlFor="message">
            <Textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Current situation, what you've tried, what you want to change…"
              className="bg-[var(--surface-elevated)] border-[var(--border-subtle)]"
            />
          </Field>
          <Button type="submit" size="lg" className="w-full rounded-full h-12" disabled={sent}>
            {sent ? (
              "Application sent"
            ) : (
              <>
                Send application <ArrowRight />
              </>
            )}
          </Button>
          <p className="text-[11px] text-muted-foreground text-center">
            We respect your privacy. Goes straight to {siteConfig.coach.email}.
          </p>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={htmlFor} className="text-xs tracking-wide text-muted-foreground uppercase">
        {label}
      </Label>
      {children}
    </div>
  );
}
