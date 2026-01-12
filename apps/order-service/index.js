const express = require("express");
const pool = require("./db");

const app = express();
const PORT = 3000;

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.get("/health/db", async (req, res) => {
  try {
    const client = await pool.connect();
    await client.query("SELECT 1");
    client.release();
    res.json({ db: "ok" });
  } catch (err) {
    res.status(500).json({
      db: "error",
      detail: err.message
    });
  }
});

app.get("/orders", (req, res) => {
  res.json([
    { id: 1, product: "Laptop", qty: 1 },
    { id: 2, product: "Phone", qty: 2 }
  ]);
});

app.listen(PORT, () => {
  console.log(`order-service running on port ${PORT}`);
});
