const fs = require("fs");
const config = require("../config/env");
const BaseModel = require("./base");

class AddressModel extends BaseModel {
  constructor() {
    super();
  }

  static all(page, perPage) {
    const des = __dirname + "/../output/addresses.json";
    let rawData = fs.readFileSync(des);
    let formattedData = JSON.parse(rawData);

    return this.paginate(page, perPage, formattedData);
  }
}

module.exports = AddressModel;
