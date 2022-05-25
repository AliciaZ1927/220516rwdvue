// 在開頭引入webpack，後面的plugins那裡需要
var webpack = require('webpack')
// resolve
module.exports = {
// 其他程式碼...
resolve: {
extensions: ['', '.js', '.vue'],
fallback: [path.join(__dirname, '../node_modules')],
alias: {
'src': path.resolve(__dirname, '../src'),
'assets': path.resolve(__dirname, '../src/assets'),
'components': path.resolve(__dirname, '../src/components'),
// webpack 使用 jQuery，如果是自行下載的
// 'jquery': path.resolve(__dirname, '../src/assets/libs/jquery/jquery.min'),
// 如果使用NPM安裝的jQuery
'jquery': 'jquery' 
}
},
// 增加一個plugins
plugins: [
new webpack.ProvidePlugin({
$: "jquery",
jQuery: "jquery"
})
],
// 其他程式碼...
}