import type { NextConfig } from "next";

const legacy: [string, string][] = [
  ["/mauritius-residency-programmes", "/residency"],
  ["/mauritius-occupation-permits", "/residency"],
  ["/mauritius-investor-permit-100000", "/residency/investor-permit"],
  ["/mauritius-occupation-permit-professional", "/residency/professional-permit"],
  ["/mauritius-occupation-permit-self-employed", "/residency/self-employed-permit"],
  ["/mauritius-retired-residence-permit", "/residency/retired-residence-permit"],
  ["/innovator-residence-permit", "/residency/innovator-permit"],
  ["/mauritius-company-formation", "/establishment"],
  ["/mauritius-domestic-company", "/establishment/domestic-company"],
  ["/mauritius-global-business-license", "/establishment/global-business-company"],
  ["/mauritius-authorised-company", "/establishment/authorised-company"],
  ["/bank-account-opening", "/establishment/bank-account-opening"],
  ["/mauritius-secretarial-services", "/establishment/registered-office-and-secretary"],
  ["/mauritius", "/mauritius"],
  ["/mauritius-property-development-scheme", "/property/property-development-scheme"],
  ["/mauritius-real-estate-scheme", "/property/real-estate-scheme"],
  ["/mauritius-integrated-resort-scheme", "/property/integrated-resort-scheme"],
  ["/mauritius-invest-hotel-scheme", "/property/invest-hotel-scheme"],
  ["/mauritius-ground-plus-2-appartments", "/property/ground-plus-two"],
  ["/mauritius-smart-city", "/property/smart-city-scheme"],
  ["/mauritius-property-acquisition", "/residency/property-acquisition"],
  ["/enquire-now", "/contact"],
  ["/blog", "/insights"],
  ["/resources", "/insights"],
  ["/essential", "/mauritius"],
  ["/terms-and-conditions", "/terms"],
];

// Applied to every response. Conservative by design: the site loads Google Fonts and
// nothing else third-party, so the policy can stay tight until analytics is added.
const securityHeaders = [
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), interest-cohort=()" },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
  async redirects() {
    return legacy
      .filter(([from, to]) => from !== to)
      .map(([source, destination]) => ({ source, destination, permanent: true }));
  },
};

export default nextConfig;
