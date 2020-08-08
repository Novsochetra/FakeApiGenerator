"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const faker_1 = __importDefault(require("faker"));
const env_1 = __importDefault(require("../../config/env"));
const generator_1 = __importDefault(require("../generator"));
const index_1 = __importDefault(require("./index"));
const geo_1 = __importDefault(require("../geo"));
class AddressGenerator extends generator_1.default {
    constructor() {
        super({ name: "address" });
        this._data = [];
        this._byId = {};
    }
    getRandom(id) {
        let geo = new geo_1.default({
            id: this.getRandomId(),
            lat: faker_1.default.address.latitude(),
            lng: faker_1.default.address.longitude(),
        });
        return new index_1.default({
            id,
            street: faker_1.default.address.streetName(),
            city: faker_1.default.address.city(),
            zipcode: faker_1.default.address.zipCode(),
            geo,
        });
    }
    generate() {
        for (let index = 0; index < env_1.default.TOTAL_DATA_SIZE; index++) {
            let address = this.getRandom(index);
            this._data.push(address.toJson());
            this._byId[address._id] = address.toJson();
        }
        return this._data;
    }
    generateJSON(fileName) {
        super.output(fileName, this._data, this._byId);
    }
    getAll() {
        return this._data;
    }
}
exports.default = AddressGenerator;
