import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      // Regra para Localhost (IPv4)
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: "/uploads/**",
      },
      // Regra para IP Local (IPv4)
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "1337",
        pathname: "/uploads/**",
      },
      // Regra para IPv6 (O erro que deu antes)
      {
        protocol: "http",
        hostname: "::1",
        port: "1337",
        pathname: "/uploads/**",
      },
    ],
  },
};

export default nextConfig;