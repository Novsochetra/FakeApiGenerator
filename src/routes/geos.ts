import express, { NextFunction, Response, Request } from "express";
import fs from "fs";
import GeoModel from "../model/geo";

const router = express.Router();

router
  .route("/geos")
  .get(function (
    req: Request,
    res: Response,
    _next: NextFunction
  ): Response<any> {
    const {
      query: { page, per_page },
    } = req;
    const paginateData = GeoModel.paginate(
      parseInt(page?.toString() ?? "1"),
      parseInt(per_page?.toString() ?? "10")
    );

    return res.json({ data: paginateData, status: res.statusCode });
  });

router
  .route("/geos/:id")
  .get(function (
    req: Request,
    res: Response,
    _next: NextFunction
  ): Response<any> {
    const des = __dirname + "/../output/geos_by_id.json";
    const rawData = fs.readFileSync(des).toString();
    const formattedData = JSON.parse(rawData);
    const item = formattedData[req.params.id];

    return res.json({ data: item, status: res.statusCode });
  });

export default router;
