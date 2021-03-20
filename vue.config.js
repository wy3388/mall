module.exports = {
    devServer: {
        //https: false,
        //host: 'localhost',
        //port: '2000',
        proxy: {
            '/api': {
                target: 'http://kelly.cn1.utools.club/api/',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}
