"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const user_1 = __importDefault(require("../model/user"));
const router = express_1.default.Router();
router
    .route("/users")
    .get(function (req, res, _next) {
    var _a, _b;
    const { query: { page, per_page }, } = req;
    const paginateData = user_1.default.paginate(parseInt((_a = page === null || page === void 0 ? void 0 : page.toString()) !== null && _a !== void 0 ? _a : "1"), parseInt((_b = per_page === null || per_page === void 0 ? void 0 : per_page.toString()) !== null && _b !== void 0 ? _b : "10"));
    return res.json({ data: paginateData, status: res.statusCode });
});
router
    .route("/users/:id")
    .get(function (req, res, _next) {
    const des = __dirname + "/../output/users_by_id.json";
    const rawData = fs_1.default.readFileSync(des).toString();
    const formattedData = JSON.parse(rawData);
    const item = formattedData[req.params.id];
    return res.json({ data: item, status: res.statusCode });
});
exports.default = router;
