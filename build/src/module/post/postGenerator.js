"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const generator_1 = __importDefault(require("../generator"));
const env_1 = __importDefault(require("../../config/env"));
const faker_1 = __importDefault(require("faker"));
const _1 = __importDefault(require("."));
class PostGenerator extends generator_1.default {
    constructor() {
        super({ name: "posts" });
        this._data = [];
        this._byId = {};
    }
    getRandom(id) {
        return new _1.default({
            id,
            title: faker_1.default.lorem.text(),
            body: faker_1.default.lorem.paragraph(),
            userId: id,
        });
    }
    generate() {
        for (let index = 0; index < env_1.default.TOTAL_DATA_SIZE; index++) {
            let post = this.getRandom(index);
            this._data.push(post.toJson());
            this._byId[post._id] = post.toJson();
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
exports.default = PostGenerator;
