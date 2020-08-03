const Generator = require("../generator");
const config = require("../../config/env");
const faker = require("faker");
const Company = require(".");

class CompanyGenerator extends Generator {
  _data = [];
  _byId = {};

  constructor() {
    super({ name: "companies" });
  }

  getRandom(id) {
    return new Company({
      id,
      name: faker.company.companyName(),
      bs: faker.company.bs(),
    });
  }

  generate() {
    for (let index = 0; index < config.TOTAL_DATA_SIZE; index++) {
      let company = this.getRandom(index);

      this._data.push(company.toJson());
      this._byId[company._id] = company.toJson();
    }

    return this._data;
  }

  output(fileName) {
    super.output(fileName, this._data, this._byId);
  }

  getAll() {
    return this._data;
  }
}

module.exports = CompanyGenerator;
