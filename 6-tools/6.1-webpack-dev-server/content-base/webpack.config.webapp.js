module.exports = {
  entry: "./src/webapp.js",
  output: {
    path: './dist',
    filename: "bundle.js"
  },
  devServer: {
    contentBase: "./webapp"
  }
};
