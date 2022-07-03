const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  // babel node_moudules 进行转义，安全性， 缺点： 耗时
  transpileDependencies: true,

  // 关闭eslint， build serve将不会进行eslint检查
  lintOnSave: false,
  // 书写原生的webpack配置项
  configureWebpack: {
    devServer: {
      open: true,
      port: 8080,
      host: "localhost",
    },
  },
});
