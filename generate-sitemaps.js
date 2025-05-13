const fs = require('fs');
const path = require('path');

// Define the base URL and routes
const baseUrl = 'https://made-in-germany.global';
const routes = [
  '/',
  '/membership',
  '/madeingermanyaboutus',
  '/buyers',
  '/pricing',
  '/madeingermanyformanufacturers',
  '/contactform',
  '/recruitingform',
  '/careers',
  '/comingsoon',
  '/madeingermanyhistory',
  '/presscontact',
  '/legalandprotection',
  '/strategicinvestments',
  '/madeingermanybread',
  '/onehundredpercentmadeingermany',
  '/madeingermanyforbuyers',
];

// Define languages for hreflang
const languages = ['en', 'de'];

// Current date for lastmod
const lastmod = new Date().toISOString().split('T')[0]; // e.g., 2025-04-25

// Generate sitemap XML
const generateSitemap = () => {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">`;

  routes.forEach((route) => {
    // Determine priority and changefreq based on route
    const isHome = route === '/';
    const isMainPage = [
      '/membership',
      '/madeingermanyaboutus',
      '/buyers',
      '/pricing',
      '/madeingermanyformanufacturers',
      '/onehundredpercentmadeingermany',
      '/madeingermanyforbuyers',
    ].includes(route);
    const priority = isHome ? '1.0' : isMainPage ? '0.8' : '0.6';
    const changefreq = isHome ? 'weekly' : 'monthly';

    // Full URL for the route
    const loc = `${baseUrl}${route}`;

    // Start URL entry
    xml += `
  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>`;

    // Add hreflang links for each language
    languages.forEach((lang) => {
      xml += `
    <xhtml:link rel="alternate" hreflang="${lang}" href="${loc}" />`;
    });

    // Close URL entry
    xml += `
  </url>`;
  });

  // Close urlset
  xml += `
</urlset>`;

  return xml;
};

// Write sitemap to public/sitemap.xml
try {
  const sitemapXml = generateSitemap();
  const outputPath = path.resolve(__dirname, '../public/sitemap.xml');
  fs.writeFileSync(outputPath, sitemapXml, 'utf8');
  console.log(`Sitemap written to ${outputPath}`);
} catch (error) {
  console.error('Error writing sitemap:', error);
  process.exit(1);
}