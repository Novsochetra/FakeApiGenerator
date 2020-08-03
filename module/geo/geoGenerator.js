const Generator = require("../generator");
const config = require("../../config/env");
const Geo = require(".");
const faker = require("faker");

class GeoGenerator extends Generator {
  _data = [];
  _byId = {};

  constructor() {
    super({ name: "geos" });
  }

  getRandom() {
    return new Geo({
      id: this.getRandomId(),
      lat: faker.address.latitude(),
      lng: faker.address.longitude(),
    });
  }

  generate() {
    for (let index = 0; index < config.TOTAL_DATA_SIZE; index++) {
      let geo = this.getRandom();

      this._data.push(geo.toJson());
      this._byId[geo._id] = geo.toJson();
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

module.exports = GeoGenerator;
