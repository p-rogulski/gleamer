const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const  CheckerPlugin  = require('awesome-typescript-loader')

module.exports = {
  entry: {
    app: './src/gleamer.ts'
  },
  devtool: 'inline-source-map',
  devServer: {
     contentBase: './dist'
   },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Development'
    })
  ],
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      }
    ]
  },
  output: {
    filename: 'gleamer.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
  extensions: ['.ts', '.tsx', '.js', '.jsx']
}
};
