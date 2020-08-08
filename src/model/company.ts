import fs from "fs";
import BaseModel from "./base";

class CompanyModel extends BaseModel {
  constructor() {
    super();
  }

  static paginate(page: number, perPage: number): any {
    const des = __dirname + "/../output/companies.json";
    const rawData = fs.readFileSync(des).toString();
    const formattedData = JSON.parse(rawData);

    return super.paginate(page, perPage, formattedData);
  }
}

export default CompanyModel;
