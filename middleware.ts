import { NextResponse, type NextRequest } from "next/server";
import { locales, defaultLocale } from "@/lib/i18n";

// English lives at the root; /fr and /de are real prefixes. Internally every page is under app/[locale].
export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const first = pathname.split("/")[1];
  if ((locales as readonly string[]).includes(first)) {
    if (first === defaultLocale) {
      // /en/... is not a public URL; send it to the root form
      const url = req.nextUrl.clone();
      url.pathname = pathname.replace(/^\/en/, "") || "/";
      return NextResponse.redirect(url, 308);
    }
    return NextResponse.next();
  }
  const url = req.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/((?!api|_next|images|favicon.ico|robots.txt|sitemap.xml|opengraph-image|.*\\..*).*)"],
};
