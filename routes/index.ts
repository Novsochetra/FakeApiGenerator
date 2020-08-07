const userRouter = require("./users");
const addressRouter = require("./addresses");
const companyRouter = require("./companies");
const geoRouter = require("./geos");

export default class BaseRouter {
  constructor() {}

  all() {
    return [userRouter, addressRouter, companyRouter, geoRouter];
  }
}
