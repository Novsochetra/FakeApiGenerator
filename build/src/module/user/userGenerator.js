"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const faker_1 = __importDefault(require("faker"));
const env_1 = __importDefault(require("../../config/env"));
const generator_1 = __importDefault(require("../generator"));
const _1 = __importDefault(require("."));
const companyGenerator_1 = __importDefault(require("../company/companyGenerator"));
const addressGenerator_1 = __importDefault(require("../address/addressGenerator"));
class UserGenerator extends generator_1.default {
    constructor() {
        super({ name: "users" });
        this._data = [];
        this._byId = {};
    }
    getRandom(id) {
        const company = new companyGenerator_1.default();
        const address = new addressGenerator_1.default();
        const companyId = this.getRandomId();
        const addressId = this.getRandomId();
        return new _1.default({
            id: id,
            firstName: faker_1.default.name.firstName(),
            lastName: faker_1.default.name.lastName(),
            email: faker_1.default.internet.email(),
            phone: faker_1.default.phone.phoneNumber(),
            website: faker_1.default.helpers.userCard().website,
            company: company.getRandom(companyId),
            address: address.getRandom(addressId),
        });
    }
    generate() {
        for (let index = 0; index < env_1.default.TOTAL_DATA_SIZE; index++) {
            let user = this.getRandom(index);
            this._data.push(user.toJson());
            this._byId[user._id] = user.toJson();
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
exports.default = UserGenerator;
