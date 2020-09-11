const withCSS = require('@zeit/next-css')

module.exports = withCSS({
  async exportPathMap(defaultPathMap) {
    pathMap = {
      '/': { page: "/index", query: {} },
    }
    return pathMap
  },
})
