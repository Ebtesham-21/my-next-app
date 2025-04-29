/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    compiler: {
      styledComponents: true,
    },
    images: {
      domains: ['res.cloudinary.com'], // ✅ Allow Cloudinary images
    },
  };
  
  export default nextConfig;
  