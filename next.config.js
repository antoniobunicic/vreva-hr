const path = require('path');

const nextConfig = {
  trailingSlash: true,
  outputFileTracingRoot: path.join(__dirname),
  images: {
    loader: 'custom',
    loaderFile: './netlify-image-loader.js',
  },
};

module.exports = nextConfig;
