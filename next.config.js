/** @type {import('next').NextConfig} */
const nextConfig = {
    // Remove exportPathMap if you have it
    // ...
  
    // Use generateStaticParams for defining your static paths
    async generateStaticParams() {
      // Define your static paths here
      return {
        '/': { page: '/' },
        '/about': { page: '/about' },
        // Add more paths as needed
      };
    },
  };
  
  module.exports = nextConfig;
  