const express = require("express");
const app = express();
const port = 3000;
const target = process.env.TARGET;

app.get("*", (req, res) => res.redirect(301, target));

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
