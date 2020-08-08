"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const postGenerator_1 = __importDefault(require("../../../module/post/postGenerator"));
const post_1 = __importDefault(require("../../../module/post"));
describe("Module Post Generator ", () => {
    let postGenerator;
    beforeEach(() => {
        postGenerator = new postGenerator_1.default();
    });
    it("should be generate correct data", () => {
        postGenerator.generate();
        expect(postGenerator.getAll()).not.toHaveLength(0);
    });
    it("should return correct instance: ", () => {
        let random = postGenerator.getRandom(1);
        expect(random).toBeInstanceOf(post_1.default);
    });
});
