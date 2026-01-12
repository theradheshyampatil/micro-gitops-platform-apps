const express = require("express");
const pool = require("./db");

const app = express();
const PORT = 3000;

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.get("/health/db", async (req, res) => {
  try {
    await pool.query("select 1");
    res.json({ db: "ok" });
  } catch (err) {
    res.status(500).json({
      db: "error",
      detail: err.message
    });
  }
});

app.listen(PORT, () => {
  console.log(`Product service running on port ${PORT}`);
});
