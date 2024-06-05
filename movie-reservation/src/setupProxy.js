const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/backend",
    createProxyMiddleware({
      target: "http://3.37.251.140:8080",
      changeOrigin: true,
    })
  );
};
