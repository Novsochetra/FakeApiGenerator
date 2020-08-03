const express = require("express");
const BaseRouter = require("./routes");
const app = express();
const port = 3000;
const baseRouter = new BaseRouter();

app.use("/api/", baseRouter.all());

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
