const express = require("express");
const fs = require("fs");
const CompanyModel = require("../model/company");
const router = express.Router();

router.route("/companies").get(function (req, res, next) {
  const {
    query: { page, per_page },
  } = req;
  let paginateData = CompanyModel.paginate(page, per_page);

  res.json({ data: paginateData, status: res.statusCode });
});

router.route("/companies/:id").get(function (req, res, next) {
  const des = __dirname + "/../output/companies_by_id.json";
  const rawData = fs.readFileSync(des);
  const formattedData = JSON.parse(rawData);
  const item = formattedData[req.params.id];

  return res.json({ data: item, status: res.statusCode });
});

module.exports = router;
