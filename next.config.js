/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports =  { nextConfig,
    // Other configuration options
    target: 'serverless', // This is required for static export
    exportPathMap: async function () {
      return {
        '/': { page: '/' },
      };
    },
    // Add any other necessary configuration
  };