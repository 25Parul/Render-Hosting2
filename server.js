const express = require("express");
const app = express();
const port = 3010;
const path = require("path");

app.use(server.static(path.join(__dirname, "/build")));

app.listen(port, () => {
  console.log("Listening on port", port);
});
