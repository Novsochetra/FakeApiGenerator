const fs = require("fs");
const config = require("../config/env");
const BaseModel = require("./base");

class CompanyModel extends BaseModel {
  constructor() {
    super();
  }

  static paginate(page, perPage) {
    const des = __dirname + "/../output/companies.json";
    let rawData = fs.readFileSync(des);
    let formattedData = JSON.parse(rawData);

    return super.paginate(page, perPage, formattedData);
  }
}

module.exports = CompanyModel;
