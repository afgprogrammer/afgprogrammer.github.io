/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  // basePath: "/afgprogrammer.github.io",
};

export default nextConfig;
