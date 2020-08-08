"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const geoGenerator_1 = __importDefault(require("../../../module/geo/geoGenerator"));
const geo_1 = __importDefault(require("../../../module/geo"));
describe("Module Geo Generator ", () => {
    let geoGenerator;
    beforeEach(() => {
        geoGenerator = new geoGenerator_1.default();
    });
    it("should be generate correct data", () => {
        geoGenerator.generate();
        expect(geoGenerator.getAll()).not.toHaveLength(0);
    });
    it("should return correct instance: ", () => {
        let random = geoGenerator.getRandom();
        expect(random).toBeInstanceOf(geo_1.default);
    });
});
