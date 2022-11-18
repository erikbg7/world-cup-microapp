/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['www.qatar2022.qa'],
  },
};

module.exports = nextConfig;
