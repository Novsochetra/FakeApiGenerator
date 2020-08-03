const Generator = require("../generator");
const faker = require("faker");

class Address {
  _id;
  _street;
  _city;
  _zipcode;
  _geo;

  constructor({ id, street, city, zipcode, geo }) {
    this._id = id;
    this._street = street;
    this._city = city;
    this._zipcode = zipcode;
    this._geo = geo;
  }

  getFieldNames() {
    return ["id", "street", "city", "geo"];
  }

  toJson() {
    return {
      id: this._id,
      street: this._street,
      city: this._city,
      zipcode: this._zipcode,
      geo: this._geo,
    };
  }
}

module.exports = Address;
