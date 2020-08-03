const Generator = require("../generator");
const Address = require(".");
const Geo = require("../geo");
const faker = require("faker");
const { fake } = require("faker");

class AddressGenerator extends Generator {
  _data = [];
  _byId = {};

  constructor() {
    super({ name: "address" });
  }

  getRandom() {
    let geo = new Geo({
      id: faker.random.uuid(),
      lat: faker.address.latitude(),
      lng: faker.address.longitude(),
    }).toJson();

    return new Address({
      id: faker.random.uuid(),
      street: faker.address.streetName(),
      city: faker.address.city(),
      zipcode: faker.address.zipCode(),
      geo,
    });
  }

  generate(amount = 100) {
    for (let index = 0; index < amount; index++) {
      let address = this.getRandom();
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
