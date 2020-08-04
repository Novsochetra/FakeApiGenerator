const express = require("express");
const vhost = require("vhost");
const cors = require("cors");

const BaseRouter = require("./routes");
const config = require("./config/env");

const app = express();
const mainApp = express();

const baseRouter = new BaseRouter();

app.use(cors());
mainApp.use("/api", baseRouter.all());

app.use(vhost(config.HOST_NAME, mainApp));

app.listen(config.PORT, (req, res) => {
  console.log(
    `Example app listening at http://${config.HOST_NAME}:${config.PORT}`
  );
});
