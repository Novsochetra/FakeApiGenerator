const { fake } = require("faker");
const config = require("../../config/env");
const Generator = require("../generator");
const Address = require(".");
const Geo = require("../geo");
const faker = require("faker");

class AddressGenerator extends Generator {
  _data = [];
  _byId = {};

  constructor() {
    super({ name: "address" });
  }

  getRandom(id) {
    let geo = new Geo({
      id: this.getRandomId(),
      lat: faker.address.latitude(),
      lng: faker.address.longitude(),
    }).toJson();

    return new Address({
      id,
      street: faker.address.streetName(),
      city: faker.address.city(),
      zipcode: faker.address.zipCode(),
      geo,
    });
  }

  generate() {
    for (let index = 0; index < config.TOTAL_DATA_SIZE; index++) {
      let address = this.getRandom(index);
      this._data.push(address.toJson());
      this._byId[address._id] = address.toJson();
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

module.exports = AddressGenerator;
