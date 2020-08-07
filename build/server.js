"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const vhost_1 = __importDefault(require("vhost"));
const cors_1 = __importDefault(require("cors"));
const index_1 = __importDefault(require("./routes/index"));
const env_1 = __importDefault(require("./config/env"));
const app = express_1.default();
const mainApp = express_1.default();
const baseRouter = new index_1.default();
mainApp.set("views", __dirname + "/views");
mainApp.set("view engine", "ejs");
app.use(cors_1.default());
mainApp.use("/api", baseRouter.all());
mainApp.use(function (req, res) {
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
app.use(vhost_1.default(env_1.default.HOST_NAME, mainApp));
app.listen(env_1.default.PORT, (_req, _res) => {
    console.log(`Example app listening at http://${env_1.default.HOST_NAME}:${env_1.default.PORT}`);
});
