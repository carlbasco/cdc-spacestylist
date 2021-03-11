const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'scss')],
  },
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  images: {
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
}
