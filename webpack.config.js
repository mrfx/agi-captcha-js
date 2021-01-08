const webpack = require ( "webpack" );
const fs = require ( "fs" );
const path = require('path');


module.exports = {
  entry: './src/captcha.js',
  output: {
    filename: 'captcha.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'agiCaptcha',
    libraryTarget: "umd"
  },
  plugins: [
    new webpack.BannerPlugin({ banner: fs.readFileSync('./license.txt', { encoding: 'utf8' }) })
    ]


};
