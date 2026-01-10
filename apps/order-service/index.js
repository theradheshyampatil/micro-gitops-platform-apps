const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ service: "order-service", status: "ok" });
});

app.listen(4000, () => {
  console.log("Order service running on port 4000");
});
