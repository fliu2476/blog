/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.SITE_URL || 'https://blog.talented.ltd',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
}

module.exports = config
