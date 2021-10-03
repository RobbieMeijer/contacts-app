const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/App.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        dependency: { not: ['url'] },
        use: 'url-loader', // this loader is depricated, must solve into webpack 5 way soon
        type: 'javascript/auto',
      },
    ],
  },
  mode: 'development',
  resolve: {
    extensions: ['.ts', '.js', 'scss', 'css'],
  },
  plugins: [new HtmlWebpackPlugin()],
};
