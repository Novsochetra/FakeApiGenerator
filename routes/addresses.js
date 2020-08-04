const express = require("express");
const fs = require("fs");
const AddressModel = require("../model/address");
const router = express.Router();

router.route("/addresses").get(function (req, res, next) {
  const {
    query: { page, per_page },
  } = req;
  let paginateData = AddressModel.paginate(page, per_page);
  res.json({
    data: paginateData,
    status: res.statusCode,
  });
});

router.route("/addresses/:id").get(function (req, res, next) {
  const des = __dirname + "/../output/addresses_by_id.json";
  const rawData = fs.readFileSync(des);
  const formattedData = JSON.parse(rawData);
  const item = formattedData[req.params.id];

  return res.json({ data: item, status: res.statusCode });
});

module.exports = router;
