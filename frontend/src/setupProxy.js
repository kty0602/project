const { createProxyMiddleware } = require('http-proxy-middleware');
const { API_BASE_URL } = require('./lib/api/OAuth');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: `${API_BASE_URL}`,
      changeOrigin: true,
    })
  );
};