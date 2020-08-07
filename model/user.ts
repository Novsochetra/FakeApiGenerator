import fs from "fs";
import BaseModel from "./base";

class UserModel extends BaseModel {
  constructor() {
    super();
  }

  static paginate(page: number, perPage: number): any {
    const des = __dirname + "/../output/users.json";
    const rawData = fs.readFileSync(des).toString();
    const formattedData = JSON.parse(rawData);

    return super.paginate(page, perPage, formattedData);
  }
}

export default UserModel;
