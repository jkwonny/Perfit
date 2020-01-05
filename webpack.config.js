const path = require('path');

module.exports = {
    entry: './client/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    devServer: {
        publicPath: 'build/',
    },
    mode: 'development',
    module: {
        rules: [
          {
            test: /\.css/,
            use: ['style-loader', 'css-loader']
          },
          {
            test: /\.jsx?/, 
            exclude: /(node_modules)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: [`@babel/preset-env`, `@babel/preset-react` ]
              }
            }
          }
        ]
      }
}