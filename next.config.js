/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.qatar2022.qa',
        port: '',
        pathname: '/sites/**',
      },
    ],
  },
};

module.exports = nextConfig;
