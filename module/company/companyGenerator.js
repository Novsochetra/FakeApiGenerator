const Generator = require("../generator");
const Address = require(".");
const Geo = require("../geo");
const faker = require("faker");
const Company = require(".");

class CompanyGenerator extends Generator {
  _data = [];
  _byId = {};

  constructor() {
    super({ name: "companies" });
  }

  getRandom() {
    return new Company({
      id: faker.random.uuid(),
      name: faker.company.companyName(),
      bs: faker.company.bs(),
    });
  }

  generate(amount = 100) {
    for (let index = 0; index < amount; index++) {
      let company = this.getRandom();

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
