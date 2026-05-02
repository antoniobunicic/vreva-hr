const path = require('path');

const nextConfig = {
  trailingSlash: true,
  outputFileTracingRoot: path.join(__dirname),
};

module.exports = nextConfig;
