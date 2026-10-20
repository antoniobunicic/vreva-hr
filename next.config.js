const path = require('path');

const nextConfig = {
  trailingSlash: true,
  outputFileTracingRoot: path.join(__dirname),
  images: {
    loader: 'custom',
    loaderFile: './netlify-image-loader.js',
  },
  experimental: {
    // Inline the (small, ~12 KB gzipped) stylesheet into the HTML so first
    // paint doesn't wait on a separate render-blocking CSS request.
    inlineCss: true,
  },
};

module.exports = nextConfig;
