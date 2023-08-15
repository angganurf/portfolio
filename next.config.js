/** @type {import('next').NextConfig} */

module.exports = {
  async rewrites() {
    return [
      {
        source: "/public/api/:path*",
        destination: "https://api.angganurf.com/:path*",
      },
    ];
  },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "vjy.me",
        port: "",
        pathname: "/_next/**",
      },
    ],
  },
};
