/** @type {import('next').NextConfig} */

module.exports = {
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
