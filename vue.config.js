const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  lintOnSave:false,
  transpileDependencies: true,
  devServer:{
    proxy:{
      '/api':{
        target:"http://39.98.123.211",
        // pathRewrite:{'^/api':''}
      }
    }
  }
})
