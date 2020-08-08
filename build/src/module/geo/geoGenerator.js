"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const generator_1 = __importDefault(require("../generator"));
const env_1 = __importDefault(require("../../config/env"));
const _1 = __importDefault(require("."));
const faker_1 = __importDefault(require("faker"));
class GeoGenerator extends generator_1.default {
    constructor() {
        super({ name: "geos" });
        this._data = [];
        this._byId = {};
    }
    getRandom() {
        return new _1.default({
            id: this.getRandomId(),
            lat: faker_1.default.address.latitude(),
            lng: faker_1.default.address.longitude(),
        });
    }
    generate() {
        for (let index = 0; index < env_1.default.TOTAL_DATA_SIZE; index++) {
            let geo = this.getRandom();
            this._data.push(geo.toJson());
            this._byId[geo._id] = geo.toJson();
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
exports.default = GeoGenerator;
