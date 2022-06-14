const { name } = require('./package.json')
const path = require("path");

module.exports = {
    configureWebpack: {
        output: {
            // 把子应用打包成 umd 库格式
            library: `${name}-[name]`,
            libraryTarget: 'umd',
            jsonpFunction: `webpackJsonp_${name}`
        },
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "src"),
            },
        },
    },
    devServer: {
        port: 8001,
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    }
}