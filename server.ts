import express, { Request, Response } from "express";
import vhost from "vhost";
import cors from "cors";

import BaseRouter from "./routes/index";
import config from "./config/env";

const app = express();
const mainApp = express();

const baseRouter = new BaseRouter();
mainApp.set("views", __dirname + "/views");
mainApp.set("view engine", "ejs");

app.use(cors());
mainApp.use("/api", baseRouter.all());

mainApp.use(function (req: Request, res: Response): any {
  if (res.statusCode === 500) {
    return render500Page(req, res);
  }
  return render404Page(req, res);
});

const render404Page = (req: Request, res: Response): any => {
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

const render500Page = (req: Request, res: Response): any => {
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

app.listen(config.PORT, (_req: Request, _res: Response): void => {
  console.log(
    `Example app listening at http://${config.HOST_NAME}:${config.PORT}`
  );
});
