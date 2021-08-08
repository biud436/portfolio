// ignored by nuxt.js, but used by IDE
const path = require('path');

module.exports = {
  resolve: {
    // for IDE (WebStorm, PyCharm, etc)
    alias: {
      '@': path.resolve(__dirname),
      '~': path.resolve(__dirname),
    },
  },
};
