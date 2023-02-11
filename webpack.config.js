const path = require('path');


module.exports = {

    entry: {
        boundle: path.resolve(__dirname,'src/js/script.js'),
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].js',
    },


   
    module: {
      rules: [
        {
          test: [/\.css$/i, /\.s[ac]ss$/i],
          use: ["style-loader", "css-loader", "sass-loader",],
        },
      ],
    },
    
  };


