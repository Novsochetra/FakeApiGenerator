import express, { Request, Response, NextFunction } from "express";
import fs from "fs";
import AddressModel from "../model/address";

const router = express.Router();

router
  .route("/addresses")
  .get(function (
    req: Request,
    res: Response,
    _next: NextFunction
  ): Response<any> {
    const {
      query: { page, per_page },
    } = req;
    const paginateData = AddressModel.paginate(
      parseInt(page?.toString() ?? "1"),
      parseInt(per_page?.toString() ?? "10")
    );
    return res.json({
      data: paginateData,
      status: res.statusCode,
    });
  });

router
  .route("/addresses/:id")
  .get(function (
    req: Request,
    res: Response,
    _next: NextFunction
  ): Response<any> {
    const des = __dirname + "/../output/addresses_by_id.json";
    const rawData = fs.readFileSync(des).toString();
    const formattedData = JSON.parse(rawData);
    const item = formattedData[req.params.id];

    return res.json({ data: item, status: res.statusCode });
  });

export default router;
