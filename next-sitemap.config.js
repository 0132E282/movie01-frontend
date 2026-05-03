/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://phimmoi01-frontend.vercel.app', // Update with your actual domain
  generateRobotsTxt: true,
  sitemapSize: 7000,
  exclude: ['/server-sitemap.xml'], // Exclude dynamic sitemaps if you use them
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://phimmoi01-frontend.vercel.app/server-sitemap.xml',
    ],
  },
}
