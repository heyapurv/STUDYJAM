/** @type {import('next').NextConfig} */
const nextConfig = {
    // Add the following line to enable static HTML export
    exportPathMap: function () {
      return {
        '/': { page: '/' }, // Add more paths as needed
      };
    },
  };
  
  module.exports = nextConfig;
  