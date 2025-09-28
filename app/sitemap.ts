export const runtime = "edge";

export default function sitemap() {
  const base = "https://neonafriq.pages.dev";
  return [
    { url: `${base}/`, lastModified: new Date() },
    { url: `${base}/read`, lastModified: new Date() },
    { url: `${base}/submit`, lastModified: new Date() },
  ];
}
