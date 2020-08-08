"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Post {
    constructor({ id, userId, body, title }) {
        this._id = id;
        this._body = body;
        this._title = title;
        this._userId = userId;
    }
    getFieldNames() {
        return ["id", "userId", "title", "body"];
    }
    toJson() {
        return {
            id: this._id,
            userId: this._userId,
            title: this._title,
            body: this._body,
        };
    }
}
exports.default = Post;
