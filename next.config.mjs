/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["uploadthing.com", "utfs.io"],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
