/** Company details shared by metadata, structured data and the page. */
export const site = {
  name: "Anchorblock Technology",
  legalName: "Anchorblock Technology LLC",
  title: "Anchorblock Technology — Software & Data Systems Studio",
  description:
    "Anchorblock Technology LLC is a software, web platform and data systems studio in Mirpur DOHS, Dhaka. High-throughput platforms, telemetry architecture and automation for fintech and logistics.",
  themeColor: "#F5F5F7",
  foundingYear: "2022",
  telephone: "+8801757049684",
  logo: "/anchorblock_logo.jpeg",
  address: {
    streetAddress: "House 432, Road 6, Mirpur DOHS",
    addressLocality: "Dhaka",
    postalCode: "1216",
    addressCountry: "BD",
  },
  geo: { latitude: 23.83719, longitude: 90.36898 },
} as const;

/**
 * Canonical origin for absolute URLs (Open Graph, sitemap, structured data).
 * Set NEXT_PUBLIC_SITE_URL once a custom domain is live; on Vercel the production domain is used otherwise.
 */
export const siteUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "https://anchorblock-technology.vercel.app"),
);
