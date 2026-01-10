const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({
    service: "user-service",
    status: "ok",
    endpoints: ["/health"]
  });
});

app.listen(3000, () => {
  console.log("Product service running on port 3000");
});
