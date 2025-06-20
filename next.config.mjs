/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        hostname: "utfs.io",
      },
    ],
  },
  experimental: {
    serverComponentsExternalPackages: ["bcryptjs"],
  },
};

export default nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "lh3.googleusercontent.com",
//       },
//       {
//         hostname: "utfs.io",
//       },
//     ],
//   },
//   experimental: {
//     serverComponentsExternalPackages: ["bcryptjs"],
//   },
//   env: {
//     DATABASE_URL: process.env.DATABASE_URL,
//     RESEND_API_KEY: process.env.RESEND_API_KEY,
//   },
// };

// export default nextConfig;
