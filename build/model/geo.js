"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const base_1 = __importDefault(require("./base"));
class GeoModel extends base_1.default {
    constructor() {
        super();
    }
    static paginate(page, perPage) {
        const des = __dirname + "/../output/geos.json";
        const rawData = fs_1.default.readFileSync(des).toString();
        const formattedData = JSON.parse(rawData);
        return super.paginate(page, perPage, formattedData);
    }
}
exports.default = GeoModel;
