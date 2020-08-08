"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const generator_1 = __importDefault(require("../generator"));
const env_1 = __importDefault(require("../../config/env"));
const faker_1 = __importDefault(require("faker"));
const _1 = __importDefault(require("."));
class CompanyGenerator extends generator_1.default {
    constructor() {
        super({ name: "companies" });
        this._data = [];
        this._byId = {};
    }
    getRandom(id) {
        return new _1.default({
            id,
            name: faker_1.default.company.companyName(),
            bs: faker_1.default.company.bs(),
        });
    }
    generate() {
        for (let index = 0; index < env_1.default.TOTAL_DATA_SIZE; index++) {
            let company = this.getRandom(index);
            this._data.push(company.toJson());
            this._byId[company._id] = company.toJson();
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
exports.default = CompanyGenerator;
