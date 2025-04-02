// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // ... other configurations
  serverExternalPackages: ['react-server-dom-webpack'], // Moved here
  // experimental: {
  //   // serverActions: true, // Removed
  //   // serverComponentsExternalPackages: ['react-server-dom-webpack'], // Removed
  //   // appDir: true, // Likely not needed
  //   forceSwcTransforms: true,
  // },
  // ... other configurations
};

export default nextConfig;