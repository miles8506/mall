const path = require('path');
//需引入path模塊 npm i path
const resolve = dir => path.join(__dirname, dir);
module.exports = {
  chainWebpack: config => {
    config.resolve.alias.set('@', resolve('src'))
      .set('components', resolve('src/components'))
      .set('common', resolve('src/common'))
      .set('network', resolve('src/network'))
      .set('views', resolve('src/views'))
      .set('assets', resolve('src/assets'))
    //set第一个参数：设置的别名，第二个参数：设置的路径　　　
  },
};