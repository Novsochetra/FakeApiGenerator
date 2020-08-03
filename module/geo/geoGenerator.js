const Generator = require("../generator");
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
      id: faker.random.uuid(),
      lat: faker.address.latitude(),
      lng: faker.address.longitude(),
    });
  }

  generate(amount = 100) {
    for (let index = 0; index < amount; index++) {
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
