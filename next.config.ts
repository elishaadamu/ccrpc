import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: '/overview', destination: '/overview/introduction', permanent: true },
      { source: '/existing-conditions', destination: '/existing-conditions/demographics', permanent: true },
      { source: '/goals', destination: '/goals/overview', permanent: true },
      { source: '/vision', destination: '/vision/futureprojects', permanent: true },
      { source: '/process', destination: '/process/public-involvement', permanent: true },
      { source: '/data', destination: '/data/tpm', permanent: true },
    ];
  },
};

export default nextConfig;
