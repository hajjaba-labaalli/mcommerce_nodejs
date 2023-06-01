import { createProxyMiddleware } from 'http-proxy-middleware';

export default function (app) {
  app.use(
    '/api/products',
    createProxyMiddleware({
      target: 'http://localhost:5000', // Définissez l'URL de votre serveur backend
      changeOrigin: true,
    }),
  );
  app.use(
    '/api/commandes',
    createProxyMiddleware({
      target: 'http://localhost:3001', // Définissez l'URL de votre serveur backend
      changeOrigin: true,
    })
  );
};