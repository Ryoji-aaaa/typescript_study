const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); 
     
module.exports = {
  mode: 'production',
  entry: './src/app.ts',
  output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/dist/',
    },
    //devtool:"none",
    module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  plugins: [
    new CleanWebpackPlugin(),  
  ],
};