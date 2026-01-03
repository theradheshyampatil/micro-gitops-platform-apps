const express = require("express");
const app = express();

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.get("/orders", (req, res) => {
  res.json([
    { id: 101, item: "Book" },
    { id: 102, item: "Pen" }
  ]);
});

app.listen(4000, () => {
  console.log("Order service running on port 4000");
});
