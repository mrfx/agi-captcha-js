const path = require('path');


module.exports = {
  entry: './src/captcha.js',
  output: {
    filename: 'captcha.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'agiCaptcha',
    libraryTarget: "umd"
  },

};
