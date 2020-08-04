const fs = require("fs");
const BaseModel = require("./base");

class UserModel extends BaseModel {
  constructor() {
    super();
  }

  static paginate(page, perPage) {
    const des = __dirname + "/../output/users.json";
    let rawData = fs.readFileSync(des);
    let formattedData = JSON.parse(rawData);

    return super.paginate(page, perPage, formattedData);
  }
}

module.exports = UserModel;
