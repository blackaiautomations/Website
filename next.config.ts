import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export — GitHub Pages serves files only, no Node server at runtime.
  output: "export",

  // Project site lives at https://blackaiautomations.github.io/Website/,
  // so every asset/link must resolve under /Website.
  // If you move to a root user-site or a custom domain, delete this line.
  basePath: "/Website",

  // Emit /about/index.html instead of /about.html — cleaner routing on Pages.
  trailingSlash: true,
};

export default nextConfig;
