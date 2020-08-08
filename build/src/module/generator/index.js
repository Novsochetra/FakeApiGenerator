"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const env_1 = __importDefault(require("../../config/env"));
class Generator {
    constructor({ name }) {
        // TODO:
        // check if we could remove _name
        this._name = "";
        this._name = name;
    }
    getRandom(_id) { }
    getRandomId() {
        return Math.floor(Math.random() * Math.floor(env_1.default.TOTAL_DATA_SIZE + 1));
    }
    output(fileName, data, byId) {
        const dest = `${__dirname}/../../output/${fileName}.json`;
        const destById = `${__dirname}/../../output/${fileName}_by_id.json`;
        const destIds = `${__dirname}/../../output/${fileName}_ids.json`;
        const formattedData = JSON.stringify(data);
        const formattedByIdData = JSON.stringify(byId);
        const formattedIds = JSON.stringify(Array.from({ length: env_1.default.TOTAL_DATA_SIZE }, (_, i) => i));
        fs_1.default.writeFileSync(dest, formattedData);
        fs_1.default.writeFileSync(destById, formattedByIdData);
        fs_1.default.writeFileSync(destIds, formattedIds);
        return true;
    }
    data() { }
}
exports.default = Generator;
