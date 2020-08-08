"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const companyGenerator_1 = __importDefault(require("../../../module/company/companyGenerator"));
const company_1 = __importDefault(require("../../../module/company"));
describe("Module Company Generator ", () => {
    let companyGenerator;
    beforeEach(() => {
        companyGenerator = new companyGenerator_1.default();
    });
    it("should be generate correct data", () => {
        companyGenerator.generate();
        expect(companyGenerator.getAll()).not.toHaveLength(0);
    });
    it("should return correct instance: ", () => {
        let random = companyGenerator.getRandom(1);
        expect(random).toBeInstanceOf(company_1.default);
    });
});
