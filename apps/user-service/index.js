const express = require("express");
const { register } = require("./src/metrics");

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());

// health
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

// metrics
app.get("/metrics", async (req, res) => {
  res.set("Content-Type", register.contentType);
  res.end(await register.metrics());
});

app.listen(PORT, () => {
  console.log(`User-service listening on ${PORT}`);
});
