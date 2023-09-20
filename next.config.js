/** @type {import('next').NextConfig} */
const nextConfig = {
    // ... other configurations ...
  
    // Use generateStaticParams for defining your static paths
    async generateStaticParams() {
      // Define your static paths here
      return {
        '/': { page: '/' },
        '/about': { page: '/about' },
        // Add more paths as needed
      };
    },
  
    // Add the output configuration for export
    output: {
      // Set the value to "export" for static HTML export
      export: true,
    },
  
    // ... other configurations ...
  };
  
  module.exports = nextConfig;
  