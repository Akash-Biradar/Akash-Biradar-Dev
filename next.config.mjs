/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
    // Enable SWC minification for better performance
    swcMinify: true,
  
    // Compiler options for better production build
    compiler: {
      removeConsole: process.env.NODE_ENV === 'production',
    },
};

export default nextConfig;
