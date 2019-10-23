const path = require('path');

module.exports = {
 entry: path.resolve(__dirname , 'src', 'index.js'),
 output: {
  //  onde ele joga o código
  path: path.resolve(__dirname , 'public'),
  filename: 'bundle.js'
 },
 devServer:{
   contentBase: path.resolve(__dirname , 'public')
 },
 module: {
   rules : [  
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use : {
        loader: 'babel-loader'
      }
    }
   ]
 }
};