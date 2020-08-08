"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const addressGenerator_1 = __importDefault(require("../../../module/address/addressGenerator"));
const address_1 = __importDefault(require("../../../module/address"));
describe("Module Address Generator ", () => {
    let addressGenerator;
    beforeEach(() => {
        addressGenerator = new addressGenerator_1.default();
    });
    it("should be generate correct data", () => {
        addressGenerator.generate();
        expect(addressGenerator.getAll()).not.toHaveLength(0);
    });
    it("should return correct instance: ", () => {
        let random = addressGenerator.getRandom(1);
        expect(random).toBeInstanceOf(address_1.default);
    });
});
