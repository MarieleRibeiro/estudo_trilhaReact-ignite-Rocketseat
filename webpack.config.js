const path = require("path"); // coloca o endereço conforme o sistema operacional
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "src", "index.jsx"), // fala qual é o arquivo principal da minha aplicação
  // qual arquivo eu vou gerar com o webpack
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: "babel-loader", // é a integração entre o babel e o webpack
      },
    ],
  },
};
