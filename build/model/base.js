"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BaseModel {
    constructor() { }
    static paginate(page = 1, perPage = 10, data) {
        const startPos = (page - 1) * perPage;
        const endPos = startPos + perPage;
        const paginatedData = data.slice(startPos, endPos);
        return paginatedData;
    }
}
exports.default = BaseModel;
