// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;

import type { NextConfig } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.assalammunazzam.com.pk";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  // Image optimization - allow your domain (and a couple fallback patterns)
  images: {
    // If partner logos are hosted externally, add their hostnames here.
    // Example: remotePatterns: [{ protocol: "https", hostname: "cdn.example.com" }]
    remotePatterns: [
      { protocol: "https", hostname: "assalammunazzam.com.pk", port: "", pathname: "/**" },
      { protocol: "https", hostname: "www.assalammunazzam.com.pk", port: "", pathname: "/**" },
    ],
    formats: ["image/avif", "image/webp"],
  },

  // i18n - helpful if you support Urdu in addition to English
  i18n: {
    locales: ["en", "ur"],
    defaultLocale: "en",
  },

  // Redirect non-www -> www (301) to keep a single canonical hostname
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "assalammunazzam.com.pk",
          },
        ],
        destination: `${SITE_URL}/:path*`,
        permanent: true,
      },
      // Optional: redirect root non-www to www root (covered by above)
    ];
  },

  // Security & privacy headers (basic set that helps SEO indirectly)
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "geolocation=(), microphone=()" },
        ],
      },
    ];
  },

  // If you want server-side caching / output settings for Vercel, add them here later.
};

export default nextConfig;
