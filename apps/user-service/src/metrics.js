const client = require('prom-client');

// Enable default metrics (CPU, memory, event loop, etc.)
client.collectDefaultMetrics({
  prefix: 'user_service_'
});

// Custom HTTP request counter
const httpRequestsTotal = new client.Counter({
  name: 'user_service_http_requests_total',
  help: 'Total number of HTTP requests',
  labelNames: ['method', 'route', 'status']
});

module.exports = {
  client,
  httpRequestsTotal
};
