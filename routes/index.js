const userRouter = require("./users");
const addressRouter = require("./addresses");
const companyRouter = require("./companies");
const geoRouter = require("./geos");

class BaseRouter {
  constructor() {}

  all() {
    return [userRouter, addressRouter, companyRouter, geoRouter];
  }
}

module.exports = BaseRouter;
