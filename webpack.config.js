const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        boundle: path.resolve(__dirname,'src/script.js')
    },
      output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].js',
    },
    
  };


