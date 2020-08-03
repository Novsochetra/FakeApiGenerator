const faker = require("faker");
const config = require("../../config/env");
const Generator = require("../generator");
const User = require(".");
const CompanyGenerator = require("../company/companyGenerator");
const AddressGenerator = require("../address/addressGenerator");

class UserGenerator extends Generator {
  _data = [];
  _byId = {};

  constructor() {
    super({ name: "users" });
  }

  getRandom() {
    const company = new CompanyGenerator();
    const address = new AddressGenerator();

    return new User({
      id: this.getRandomId(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumber(),
      website: faker.helpers.userCard().website,
      company: company.getRandom().toJson(),
      address: address.getRandom().toJson(),
    });
  }

  generate() {
    for (let index = 0; index < config.TOTAL_DATA_SIZE; index++) {
      let user = this.getRandom();

      this._data.push(user.toJson());
      this._byId[user._id] = user.toJson();
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

module.exports = UserGenerator;
