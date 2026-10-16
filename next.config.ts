import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  images: {
    // AVIF first: noticeably smaller than WebP for the photos and screenshots.
    // Browsers that cannot show AVIF get WebP instead.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
