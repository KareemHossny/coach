export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={align === "center" ? "max-w-2xl mx-auto text-center" : "max-w-2xl"}>
      {eyebrow && (
        <p className="text-xs tracking-[0.2em] text-primary mb-4">{eyebrow.toUpperCase()}</p>
      )}
      <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[0.95] whitespace-pre-line">
        {title}
      </h2>
      {description && <p className="mt-5 text-muted-foreground md:text-lg">{description}</p>}
    </div>
  );
}
