import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://neonafriq.example'
  return [
    { url: base + '/', lastModified: new Date() },
    { url: base + '/read', lastModified: new Date() },
    { url: base + '/submit', lastModified: new Date() },
  ]
}
