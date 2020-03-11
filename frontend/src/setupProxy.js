const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api/users',
        createProxyMiddleware({
            target: 'http://service1:8081',
            changeOrigin: true,
        })
    );
};
