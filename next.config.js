/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const withRemoveImports = require("next-remove-imports")();

const path = require("path");

const baseSecurityHeaders = [
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "Cross-Origin-Opener-Policy",
    value: "same-origin",
  },
];

module.exports = withRemoveImports(
  withBundleAnalyzer({
    reactStrictMode: true,
    swcMinify: true,
    output: "standalone",
    headers() {
      return [
        {
          source: "/:path*",
          headers: [
            {
              key: "Content-Security-Policy",
              value: `frame-ancestors 'self' http://localhost http://localhost:3000 https://angganurf.com https://www.angganurf.com https://*.angganurf.com https://api.angganurf.com ;`,
            },
            ...baseSecurityHeaders,
          ],
        },
      ];
    },
  })
);
