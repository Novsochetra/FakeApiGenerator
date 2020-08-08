"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const geo_1 = __importDefault(require("../../../module/geo"));
describe("Module Geo converter ", () => {
    let geo;
    beforeEach(() => {
        geo = new geo_1.default({ id: 1, lat: "10", lng: "10" });
    });
    it("should has correct attribute", () => {
        expect(geo._lat).toBe("10");
        expect(geo._lng).toBe("10");
        expect(geo._id).toBe(1);
    });
    it("should return correct JSON format", () => {
        expect(geo.toJson()).toStrictEqual({ id: 1, lat: "10", lng: "10" });
    });
});
