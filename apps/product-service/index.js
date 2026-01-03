const express = require("express");
const app = express();

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.get("/products", (req, res) => {
  res.json([
    { id: 1, name: "Laptop" },
    { id: 2, name: "Keyboard" }
  ]);
});

app.listen(3000, () => {
  console.log("Product service running on port 3000");
});
