const express = require("express");
const fs = require("fs");
const router = express.Router();

router.route("/users").get(function (req, res, next) {
  const des = __dirname + "/../output/users.json";
  let rawData = fs.readFileSync(des);
  let formattedData = JSON.parse(rawData);

  res.json({ data: formattedData, status: res.statusCode });
});

router.route("/users/:id").get(function (req, res, next) {
  const des = __dirname + "/../output/users_by_id.json";
  const rawData = fs.readFileSync(des);
  const formattedData = JSON.parse(rawData);
  const item = formattedData[req.params.id];

  return res.json({ data: item, status: res.statusCode });
});

module.exports = router;
