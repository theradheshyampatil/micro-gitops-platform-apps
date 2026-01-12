const express = require("express");
const pool = require("./db");

const app = express();
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.get("/health/db", async (req, res) => {
  try {
    await pool.query("select 1");
    res.json({ db: "ok" });
  } catch (err) {
    res.status(500).json({ db: "error", detail: err.message });
  }
});

app.get("/products", async (req, res) => {
  try {
    const result = await pool.query(
      "select * from products order by created_at desc"
    );
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/products", async (req, res) => {
  const { name, description, price } = req.body;

  try {
    const result = await pool.query(
      "insert into products (name, description, price) values ($1, $2, $3) returning *",
      [name, description, price]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`product-service running on port ${port}`);
});

