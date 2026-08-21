import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // The production Pages site is served from the custom domain root.
  basePath: "",
  trailingSlash: true,
  images: {
    // GitHub Pages serves static files and cannot run Next.js's image optimizer.
    loader: "custom",
    loaderFile: "./image-loader.ts",
  },
};

export default nextConfig;
