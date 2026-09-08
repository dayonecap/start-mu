import type { ReactNode } from "react";
import type { ImageSlot } from "@/content/images";
import { Figure } from "./Figure";
import { Container } from "./Container";

export function PageHero({
  title,
  lead,
  children,
  compact = false,
  image,
}: {
  title: string;
  lead?: string;
  children?: ReactNode;
  compact?: boolean;
  image?: ImageSlot;
}) {
  return (
    <section className={`${compact ? "py-14 lg:py-20" : "py-20 lg:py-28"}`}>
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
          <div className={image ? "lg:col-span-7" : "lg:col-span-9"}>
            <h1 className="t-h1">{title}</h1>
            {lead ? <p className="t-lead mt-6 max-w-[58ch]">{lead}</p> : null}
            {children}
          </div>
          {image ? (
            <div className="lg:col-span-4 lg:col-start-9">
              <Figure slot={image} priority />
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
