const express = require('express');
const { client, httpRequestsTotal } = require('./src/metrics');

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware to count requests
app.use((req, res, next) => {
  res.on('finish', () => {
    httpRequestsTotal.inc({
      method: req.method,
      route: req.route ? req.route.path : req.path,
      status: res.statusCode
    });
  });
  next();
});

// Health check
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// Prometheus metrics endpoint
app.get('/metrics', async (req, res) => {
  res.set('Content-Type', client.register.contentType);
  res.end(await client.register.metrics());
});

// Example API
app.get('/users', (req, res) => {
  res.json([{ id: 1, name: 'Radhe' }]);
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ user-service running on port ${PORT}`);
});
