"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Address {
    constructor({ id, street, city, zipcode, geo, }) {
        this._id = id;
        this._street = street;
        this._city = city;
        this._zipcode = zipcode;
        this._geo = geo;
    }
    // TODO:
    // update type return function
    getFieldNames() {
        return ["id", "street", "city", "geo"];
    }
    toJson() {
        return {
            id: this._id,
            street: this._street,
            city: this._city,
            zipcode: this._zipcode,
            geo: this._geo.toJson(),
        };
    }
}
exports.default = Address;
