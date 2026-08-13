import type { NextConfig } from "next";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  images: {
    // GitHub Pages serves static files and cannot run Next.js's image optimizer.
    loader: "custom",
    loaderFile: "./image-loader.ts",
  },
};

export default nextConfig;
