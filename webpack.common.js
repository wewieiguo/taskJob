const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const isDev = process.env.NODE_ENV === 'development'
module.exports = {
  entry: {
    main: './src/main.js' // 入口文件
  },
  // 定义打包的出口
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: '[name].js',
    // publicPath: '/'
  },
  module: { // 配置loader
    rules: [{
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          preserveWhitepace: true, //清除文本换行等情况空格
          extractCSS: isDev ? false : true, // 把vue的css提取到单独的文件，默认
          cssModules: {
            localIndetName: '[xxx]',
            camcelcase: true
          }, // 用法：<style module>
          hotReload: true, // 热更新，默认会自动判断是否开发环境自动开启关闭，其实关闭后也会刷新页面更新
        },
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime']
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'less-loader'
        ]
      },
      {
        test: /.png$/,
        use: 'file-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ // 打包输出HTML
      title: 'test',
      url: "/public/",
      // minify: { // 压缩HTML文件
      //   removeAttributeQuotes: true, // 移除属性的引号
      //   removeComments: true, // 移除HTML中的注释
      //   collapseWhitespace: true, // 删除空白符与换行符
      //   minifyCSS: true // 压缩内联css
      // },
      inject: true, // true 或body 默认值，script标签位于html文件的 body 底部; head script 标签位于 head 标签内
      // hash: true, // 引入 js 文件后面紧跟一个独特的 hash 值
      // // filename: 'huangbiao.html', // 文件名
      // filename: 'index.html', // 带hash 值的文件名
      template: './public/index.html' // 模板地址
    }),
    new VueLoaderPlugin()
  ],
  resolve: {
    extensions: ['.js', '.vue'], // 通过import 引入的模块可省略的后缀
    alias: {
      vue: 'vue/dist/vue.esm.js',
      '@': path.resolve('src'),
    },
  },
}