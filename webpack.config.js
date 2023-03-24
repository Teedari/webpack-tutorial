const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
  entry: {
    index: './src/index.js',
    print: './src/print.js',
    book: './src/book.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack Output Management',
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  }
}