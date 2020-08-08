"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const company_1 = __importDefault(require("../../../module/company"));
describe("Module Company converter ", () => {
    let company;
    beforeEach(() => {
        company = new company_1.default({ id: 1, bs: "bs", name: "rich dev api" });
    });
    it("should has correct attribute", () => {
        expect(company._id).toBe(1);
        expect(company._name).toBe("rich dev api");
        expect(company._bs).toBe("bs");
    });
    it("should return correct JSON format", () => {
        expect(company.toJson()).toStrictEqual({
            id: 1,
            bs: "bs",
            name: "rich dev api",
        });
    });
});
