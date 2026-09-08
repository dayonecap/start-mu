import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import type { ImageSlot } from "@/content/images";

function exists(src: string) {
  try {
    return fs.existsSync(path.join(process.cwd(), "public", src));
  } catch {
    return false;
  }
}

/**
 * Renders the image if the file exists in public/, otherwise a quiet placeholder with the brief.
 * Server component only.
 */
export function Figure({
  slot,
  className = "",
  priority = false,
  sizes = "(min-width: 1024px) 50vw, 100vw",
}: {
  slot: ImageSlot;
  className?: string;
  priority?: boolean;
  /** Match the rendered width, or the browser downloads a far larger file than the slot shows. */
  sizes?: string;
}) {
  const has = exists(slot.src);
  return (
    <figure className={className}>
      <div className="relative w-full overflow-hidden bg-stone-light" style={{ aspectRatio: slot.aspect }}>
        {has ? (
          <Image src={slot.src} alt={slot.alt} fill sizes={sizes} className="object-cover" priority={priority} />
        ) : (
          <div className="absolute inset-0 flex flex-col justify-between p-5" aria-hidden="true">
            <span className="t-small">Image: {slot.src.replace("/images/", "")}</span>
            <p className="t-small max-w-[36ch]">{slot.brief}</p>
          </div>
        )}
      </div>
      {slot.caption ? <figcaption className="t-small mt-3">{slot.caption}</figcaption> : null}
    </figure>
  );
}
