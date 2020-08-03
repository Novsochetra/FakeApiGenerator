const express = require("express");
const BaseRouter = require("./routes");
const config = require("./config/env");

const app = express();
const baseRouter = new BaseRouter();

app.use("/api/", baseRouter.all());

app.listen(config.PORT, () => {
  console.log(`Example app listening at http://localhost:${config.PORT}`);
});
