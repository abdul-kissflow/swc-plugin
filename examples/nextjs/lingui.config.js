// use nextjs config as single source of truth for defining locales
const nextConfig = require("./next.config");
const { formatter } = require("@lingui/format-json");

/** @type {import('@lingui/conf').LinguiConfig} */
module.exports = {
  locales: nextConfig.i18n.locales,
  sourceLocale: nextConfig.i18n.defaultLocale,
  catalogs: [
    {
      path: "<rootDir>/locales/{locale}/messages",
      include: ["<rootDir>/src"],
      exclude: ["**/node_modules/**"],
    },
  ],
  format: formatter({
    style: "minimal",
  }),
};
