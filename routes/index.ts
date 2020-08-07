import userRouter from "./users";
import addressRouter from "./addresses";
import companyRouter from "./companies";
import geoRouter from "./geos";
import postRouter from "./posts";

export default class BaseRouter {
  constructor() {}

  all() {
    return [userRouter, addressRouter, companyRouter, geoRouter, postRouter];
  }
}
