"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const post_1 = __importDefault(require("../../../module/post"));
describe("Module Geo converter ", () => {
    let post;
    beforeEach(() => {
        post = new post_1.default({ id: 1, userId: 1, title: "title", body: "body" });
    });
    it("should has correct attribute", () => {
        expect(post._id).toBe(1);
        expect(post._userId).toBe(1);
        expect(post._title).toBe("title");
        expect(post._body).toBe("body");
    });
    it("should return correct JSON format", () => {
        expect(post.toJson()).toStrictEqual({
            id: 1,
            userId: 1,
            title: "title",
            body: "body",
        });
    });
});
