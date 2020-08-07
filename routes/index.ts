import userRouter from "./users";
import addressRouter from "./addresses";
import companyRouter from "./companies";
import geoRouter from "./geos";
//const addressRouter = require("./addresses");
//const companyRouter = require("./companies");
//const geoRouter = require("./geos");

export default class BaseRouter {
  constructor() {}

  all() {
    return [userRouter, addressRouter, companyRouter, geoRouter];
  }
}
