import Generator from "../generator";
import config from "../../config/env";
import faker from "faker";
import Company from ".";
import { ICompany, ICompanyById } from "./interface";

class CompanyGenerator extends Generator {
  _data: ICompany[] = [];
  _byId: ICompanyById = {};

  constructor() {
    super({ name: "companies" });
  }

  getRandom(id: number): any {
    return new Company({
      id,
      name: faker.company.companyName(),
      bs: faker.company.bs(),
    });
  }

  generate(): ICompany[] {
    for (let index = 0; index < config.TOTAL_DATA_SIZE; index++) {
      let company = this.getRandom(index);

      this._data.push(company.toJson());
      this._byId[company._id] = company.toJson();
    }

    return this._data;
  }

  generateJSON(fileName: string): any {
    super.output(fileName, this._data, this._byId);
  }

  getAll() {
    return this._data;
  }
}

export default CompanyGenerator;
