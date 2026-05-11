import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  typescript: {
    tsconfigPath: './tsconfig.json',
  },
  allowedDevOrigins: [
    'vm-78foes7rrff8d88ppfe075pz.vusercontent.net',
    'localhost:3000',
    '127.0.0.1:3000',
  ],
};

export default nextConfig;
