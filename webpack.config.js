const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  mode: 'development',  //使用场景，还可设置为production、none
  entry: path.join(__dirname, './src/main.js'), //配置打包入口文件以及输出文件名称
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'bundle.js'
  },
  plugins: [
    //自动在内存生成对应html
    new htmlWebpackPlugin({
      template: path.join(__dirname, './src/index.html'),
      filename: 'index.html'
    }),
    //通过babel-plugin-component达到按需引入mint-ui组件的效果
    new VueLoaderPlugin()
  ],
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
      { test: /\.(jpg|jpeg|gif|png|bmp)$/, use: 'url-loader?limit=102400&name=[hash]-[name]' },
      { test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader' },
      { test: /\.js$/, use: 'babel-loader', exclude: path.join(__dirname, './node_modules') },  //不转换node_modules中的js文件
      { test: /\.vue$/, use: 'vue-loader' }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'  //当导入的包是以.vue文件结尾的时候使用完整的包
    }
  }
}