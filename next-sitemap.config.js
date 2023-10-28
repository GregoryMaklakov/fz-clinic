/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env.SITE_URL || "https://fz-clinic.com",
  generateRobotsTxt: true, // (optional)
  sitemapSize: 7000,
};
