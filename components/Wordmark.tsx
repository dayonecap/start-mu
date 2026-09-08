import Link from "@/components/Link";

export function Wordmark({ onDark = false }: { onDark?: boolean }) {
  return (
    <Link href="/" aria-label="start.mu by Intrasia, home" className="inline-flex items-center gap-3">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={onDark ? "/brand/mark-bone.png" : "/brand/mark-green.png"} alt="" width={28} height={28} className="h-7 w-7" />
      <span className="flex flex-col leading-none">
        <span className="font-serif text-[1.55rem] tracking-[-0.015em]" style={{ color: onDark ? "var(--color-bone)" : "var(--color-ink)" }}>
          start<span style={{ color: onDark ? "var(--color-stone)" : "var(--color-green)" }}>.mu</span>
        </span>
        <span className="t-small mt-1 tracking-[0.02em]" style={{ color: onDark ? "var(--color-stone)" : "var(--color-slate)" }}>
          by Intrasia
        </span>
      </span>
    </Link>
  );
}
