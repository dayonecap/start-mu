import type { Download } from "@/content/downloads";
import { ui } from "@/content/ui";
import type { Locale } from "@/lib/i18n";

/** Checklist download, placed under the fact table on a service page. A plain anchor: the PDF is a static file, not a localised route. */
export function DownloadCta({ locale = "en", download, title }: { locale?: Locale; download: Download; title: string }) {
  const t = ui[locale].download;
  return (
    <aside className="mt-10 border-t border-ink pt-6" aria-labelledby="download-heading">
      <p className="t-small font-medium uppercase tracking-[0.08em] text-green">{t.label}</p>
      <h3 id="download-heading" className="t-h3 mt-2">
        {t.heading}
      </h3>
      <p className="mt-3 max-w-[44ch] text-[1.05rem] leading-[1.55] text-slate">{t.body}</p>
      <p className="mt-5">
        <a href={download.file} download className="btn btn-solid" aria-label={`${t.button}: ${title}`}>
          {t.button}
        </a>
      </p>
      <p className="t-small mt-3">
        {t.meta(download.pages)}
      </p>
    </aside>
  );
}
