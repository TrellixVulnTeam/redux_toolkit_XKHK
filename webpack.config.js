const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  entry: path.join(__dirname, "src", "index.tsx"),
  output: {
    path: path.join(__dirname, "build"),
    filename: "index.bundle.js"
  },
  mode: process.env.NODE_ENV || 'development',
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    //절대경로를 위한 설정
    alias: {
      'src': path.resolve(__dirname, 'src'),
      'hooks': path.resolve(__dirname, 'src/hooks'),
      'store': path.resolve(__dirname, 'src/store'),
      'utils': path.resolve(__dirname, 'src/utils'),
      'routes': path.resolve(__dirname, 'src/routes'),
      'components': path.resolve(__dirname, 'src/components'),
    },
  },
  devServer: {
    contentBase: path.join(__dirname, "src"),
    historyApiFallback: true,
    hot: true
  },
  module: {
    rules: [
      { 
          test: /\.(js|jsx)$/, 
          exclude: /node_modules/, 
          use: ["babel-loader"] 
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ["ts-loader"],
      },
      {
          test: /\.(css|scss)$/,
          use: ["style-loader", "css-loader"],
      },
      { 
          test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
          use: ["file-loader"] 
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html")
    })
  ]
}