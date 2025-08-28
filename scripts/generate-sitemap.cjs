const fs = require('fs');
const path = require('path');

const siteUrl = 'https://vixel.ge';
const currentDate = new Date().toISOString().split('T')[0];

const pages = [
  {
    url: '/',
    changefreq: 'weekly',
    priority: 1.0
  },
  {
    url: '/#services',
    changefreq: 'monthly',
    priority: 0.8
  },
  {
    url: '/#portfolio',
    changefreq: 'monthly',
    priority: 0.8
  },
  {
    url: '/#pricing',
    changefreq: 'monthly',
    priority: 0.7
  },
  {
    url: '/#contact',
    changefreq: 'monthly',
    priority: 0.9
  }
];

const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${siteUrl}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

// Write sitemap to dist folder
const distPath = path.join(__dirname, '..', 'dist');
if (!fs.existsSync(distPath)) {
  fs.mkdirSync(distPath, { recursive: true });
}

fs.writeFileSync(path.join(distPath, 'sitemap.xml'), sitemapContent);
console.log('✅ Sitemap generated successfully at dist/sitemap.xml');

// Copy robots.txt to dist folder
const robotsContent = `User-agent: *
Allow: /
Sitemap: ${siteUrl}/sitemap.xml`;

fs.writeFileSync(path.join(distPath, 'robots.txt'), robotsContent);
console.log('✅ Robots.txt generated successfully at dist/robots.txt');
