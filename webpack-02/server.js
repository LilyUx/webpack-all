const express = require("express");

const app = express();

app.get("/api/info", (req, res) => {
  res.json({
    name: "ling",
  });
});

app.listen("9000");
