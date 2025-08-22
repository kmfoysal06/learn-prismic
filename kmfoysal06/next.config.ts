import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  NEXT_PUBLIC_PRISMIC_ENVIRONMENT: process.env.NEXT_PUBLIC_PRISMIC_ENVIRONMENT
};

export default nextConfig;
