const express = require("express");
const vhost = require("vhost");
const cors = require("cors");

const BaseRouter = require("./routes");
const config = require("./config/env");

const app = express();
const mainApp = express();

const baseRouter = new BaseRouter();
mainApp.set("views", __dirname + "/views");
mainApp.set("view engine", "ejs");

app.use(cors());
mainApp.use("/api", baseRouter.all());

mainApp.use(function (req, res, next) {
  if (res.statusCode === 500) {
    return render500Page(req, res);
  }
  return render404Page(req, res);
});

const render404Page = (req, res) => {
  return res.format({
    html: function () {
      res.render("404", { url: req.url });
    },
    json: function () {
      res.json({ error: "Not found" });
    },
    default: function () {
      res.type("txt").send("Not found");
    },
  });
};

const render500Page = (req, res) => {
  return res.format({
    html: function () {
      res.render("500", { url: req.url });
    },
    json: function () {
      res.json({ error: "Not found" });
    },
    default: function () {
      res.type("txt").send("Not found");
    },
  });
};

app.use(vhost(config.HOST_NAME, mainApp));

app.listen(config.PORT, (req, res) => {
  console.log(
    `Example app listening at http://${config.HOST_NAME}:${config.PORT}`
  );
});
