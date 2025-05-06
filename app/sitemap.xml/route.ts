import { NextResponse } from 'next/server'

export async function GET() {
  const baseUrl = 'https://weavedev.co'
  const staticPages = [
    '',
    '/about',
    '/services',
    '/projects',
    '/contact',
  ]
  const serviceSlugs = [
    'custom-software',
    'web-applications',
    'branding-research',
    'low-no-code-apps',
    'ui-ux-design',
    'ai-integration',
  ]
  const urls = [
    ...staticPages.map((page) => `${baseUrl}${page}`),
    ...serviceSlugs.map((slug) => `${baseUrl}/services#${slug}`),
  ]
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
    .map(
      (url) => `  <url><loc>${url}</loc></url>`
    )
    .join('\n')}
</urlset>`
  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
} 