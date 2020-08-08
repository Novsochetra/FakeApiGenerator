"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const company_1 = __importDefault(require("../../../module/company"));
const user_1 = __importDefault(require("../../../module/user"));
const address_1 = __importDefault(require("../../../module/address"));
const geo_1 = __importDefault(require("../../../module/geo"));
describe("Module Company converter ", () => {
    let company;
    let user;
    let address;
    let geo;
    beforeEach(() => {
        company = new company_1.default({ id: 1, bs: "bs", name: "rich dev api" });
        geo = new geo_1.default({ id: 1, lat: "10", lng: "10" });
        address = new address_1.default({
            id: 1,
            street: "121",
            city: "phnom penh",
            zipcode: "1111",
            geo: geo,
        });
        user = new user_1.default({
            id: 1,
            firstName: "test",
            lastName: "test",
            email: "test@gmail.com",
            phone: "111111",
            website: "website.com",
            company: company,
            address: address,
        });
    });
    it("should has correct attribute", () => {
        expect(user._id).toBe(1);
        expect(user._firstName).toBe("test");
        expect(user._lastName).toBe("test");
        expect(user._email).toBe("test@gmail.com");
        expect(user._phone).toBe("111111");
        expect(user._website).toBe("website.com");
        expect(user._company).toBeInstanceOf(company_1.default);
        expect(user._address).toBeInstanceOf(address_1.default);
    });
    it("should return correct JSON format", () => {
        expect(user.toJson()).toStrictEqual({
            id: 1,
            firstName: "test",
            lastName: "test",
            email: "test@gmail.com",
            phone: "111111",
            address: address.toJson(),
            website: "website.com",
            company: company.toJson(),
        });
    });
});
