import { siteConfig } from "@/config/site";
import { SectionHeader } from "./SectionHeader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  const { faqs } = siteConfig;
  return (
    <section id="faq" className="py-20 md:py-28">
      <div className="container-page max-w-3xl">
        <SectionHeader eyebrow="FAQ" title="Questions, answered." align="center" />
        <Accordion type="single" collapsible className="mt-12">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-[var(--border-subtle)]">
              <AccordionTrigger className="text-left text-base md:text-lg py-5 hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm md:text-base leading-relaxed">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
