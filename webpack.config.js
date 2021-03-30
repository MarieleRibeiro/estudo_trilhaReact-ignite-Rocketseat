const path = require("path"); // coloca o endereço conforme o sistema operacional
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const loader = require("sass-loader");

//Configurar um ambiente de desenvolvimento e um de produção -> para o Webpack funcionar de formas diferentes quando esta em desenvolvimento e quando for rodar online, estiver em produção.
const isDelopment = process.env.NODE_ENV !== "production";

module.exports = {
  mode: isDelopment ? "development" : "production",
  devtool: isDelopment ? "eval-source-map" : "source-map", // para debugar melhor os erros do codigo
  entry: path.resolve(__dirname, "src", "index.tsx"), // fala qual é o arquivo principal da minha aplicação
  // qual arquivo eu vou gerar com o webpack
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  devServer: {
    contentBase: path.resolve(__dirname, "public", "index.html"), //yarn webpack server=> observar as mudanças feitas na aplicação
    hot: true,
  },
  plugins: [
    isDelopment && new ReactRefreshWebpackPlugin(), // executar somente em desenvolvimento
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
    }),
  ].filter(Boolean), //
  module: {
    rules: [
      {
        test: /\.(j|t)sx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader", // é a integração entre o babel e o webpack
          options: {
            plugins: [
              isDelopment && require.resolve("react-refresh/babel"),
            ].filter(Boolean),
          },
        },
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"], // é a integração entre o babel e o webpack
      },
    ],
  },
};
