"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const users_1 = __importDefault(require("./users"));
const addresses_1 = __importDefault(require("./addresses"));
const companies_1 = __importDefault(require("./companies"));
const geos_1 = __importDefault(require("./geos"));
const posts_1 = __importDefault(require("./posts"));
class BaseRouter {
    constructor() { }
    all() {
        return [users_1.default, addresses_1.default, companies_1.default, geos_1.default, posts_1.default];
    }
}
exports.default = BaseRouter;
