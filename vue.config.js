module.exports = {
    devServer: {
        proxy: {
            '/user': {
                target: 'http://192.168.220.141:2020/',
                //ws: true,
                changeOrigin: true
            },
            // '^/foo': {
            //     target: '<other_url>'
            // }
            'admin':{
                target: 'http://192.168.220.141:2020/',
                //ws: true,
                changeOrigin: true
            }
        }
    }
}