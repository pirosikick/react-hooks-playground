const path = require("path");

module.exports = {
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "babel-loader",
        include: path.join(__dirname, "../src")
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx"]
  }
};
