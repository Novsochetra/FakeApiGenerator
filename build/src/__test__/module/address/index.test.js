"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const address_1 = __importDefault(require("../../../module/address"));
const geo_1 = __importDefault(require("../../../module/geo"));
describe("Module Geo converter ", () => {
    let address;
    let geo;
    beforeEach(() => {
        geo = new geo_1.default({ id: 1, lat: "10", lng: "10" });
        address = new address_1.default({
            id: 1,
            geo: geo,
            city: "phnom penh",
            zipcode: "1111",
            street: "121",
        });
    });
    it("should has correct attribute", () => {
        expect(address._id).toBe(1);
        expect(address._geo).toBeInstanceOf(geo_1.default);
        expect(address._zipcode).toBe("1111");
        expect(address._street).toBe("121");
    });
    it("should return correct JSON format", () => {
        const expectedResult = {
            id: 1,
            zipcode: "1111",
            street: "121",
            city: "phnom penh",
            geo: geo.toJson(),
        };
        expect(address.toJson()).toStrictEqual(expectedResult);
    });
});
